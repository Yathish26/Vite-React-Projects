import { useCallback, useEffect, useRef, useState } from 'react';
import { Region, WaveForm, WaveSurfer } from 'wavesurfer-react';
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline';
import RegionsPlugin from 'wavesurfer.js/dist/plugins/regions';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';



export default function Audiotrim() {
  const fileInputRef = useRef();
  const [audio, setAudio] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [regionData, setRegionData] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const wavesurferRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const ffmpegRef = useRef(new FFmpeg());
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [duration, setDuration] = useState(0);



  const load = async () => {
    const baseURL = 'https://unpkg.com/@ffmpeg/core@0.12.6/dist/esm';
    const ffmpeg = ffmpegRef.current;
    ffmpeg.on('log', ({ message }) => {
      console.log(message);
    });

    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
    });
    setLoaded(true);

    console.log('FFmpeg is ready');
  };

  useEffect(() => {
    load();
  }, []);

  const handleChange = (event) => {
    const file = event.target.files[0];
    console.log(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    setAudioUrl(URL.createObjectURL(file));

    if (file) {
      setAudio(file);
    }
  };

  const plugins = [
    {
      key: 'timeline',
      plugin: TimelinePlugin,
      options: {
        container: '#timeline',
      },
    },
    {
      key: 'regions',
      plugin: RegionsPlugin,
      options: { dragSelection: true },
    },
  ];

  const [regions, setRegions] = useState([
    {
      id: 'region-1',
      start: 0,
      end: 15,
      color: 'rgba(124, 0, 255, 0.4)',
      drag: true,
      resize: true,
      handleStyle: {
        left: 'rgba(98, 86, 202, 0.8)',
        right: 'rgba(98, 86, 202, 0.8)',
      },
      data: {
        systemRegionId: 33,
      },
    },
  ]);

  const regionsRef = useRef(regions);

  useEffect(() => {
    setRegionData(regions[0]);
  }, [regions]);

  const regionCreatedHandler = useCallback(
    (region) => {
      if (region.data.systemRegionId) return;

      setRegions([...regionsRef.current, { ...region, data: { ...region.data, systemRegionId: -1 } }]);
    },
    [regionsRef]
  );

  useEffect(() => {
    regionsRef.current = regions;
  }, [regions]);

  const handleWSMount = useCallback(
    (waveSurfer) => {
      wavesurferRef.current = waveSurfer;

      if (wavesurferRef.current) {
        wavesurferRef.current.on('region-created', regionCreatedHandler);

        wavesurferRef.current.on('ready', () => {
          setIsLoaded(true);
          setIsPlaying(true);

          regions.forEach((region) => {
            wavesurferRef.current.addRegion(region);
          });
        });
      }
    },
    [regionCreatedHandler, regions]
  );

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };


  const handleRegionUpdate = useCallback((region) => {
    setRegionData(region);
    setStartTime(formatTime(region.start));
    setEndTime(formatTime(region.end));
    setDuration(formatTime(region.end - region.start));
    const start = region.start;
    wavesurferRef.current.seekTo(start / wavesurferRef.current.getDuration());
    wavesurferRef.current.play();
  }, []);

  useEffect(() => {
    if (!wavesurferRef.current) return;

    wavesurferRef.current.un('audioprocess');

    wavesurferRef.current.on('audioprocess', (time) => {
      if (time >= regionData.end) {
        wavesurferRef.current.seekTo(regionData.start / wavesurferRef.current.getDuration());
        wavesurferRef.current.pause();
        setIsPlaying(false);
      }
    });
  }, [regionData]);

  const play = useCallback(() => {
    wavesurferRef.current.playPause();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  async function trim() {
    if (!loaded) {
      console.error('FFmpeg is not loaded');
      return;
    }

    try {
      const ffmpeg = ffmpegRef.current;
      const response = await fetch(audioUrl);
      const arrayBuffer = await response.arrayBuffer();
      await ffmpeg.writeFile('audio.mp3', new Uint8Array(arrayBuffer));

      await ffmpeg.exec(['-i', 'audio.mp3', '-ss', regionData.start.toString(), '-to', regionData.end.toString(), 'output.mp3']);

      const data = await ffmpeg.readFile('output.mp3');
      const blob = new Blob([data.buffer], { type: 'audio/mp3' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = 'output.mp3';
      a.click();
      a.remove();

      URL.revokeObjectURL(url);
      await ffmpeg.deleteFile('audio.mp3');
      await ffmpeg.deleteFile('output.mp3');
    } catch (error) {
      console.error('Error during trimming:', error);
    }
  }
  
    

    return (
        <>
            <div
                className="min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-purple-600 to-purple-100"
            >
                <div className="max-w-md w-full mx-auto bg-white shadow-xl p-8 rounded-lg bg-gradient-to-br from-purple-700 to-purple-100 border border-lavender-200">
                    {!audio ? (
                        <div className="flex flex-col justify-center items-center min-h-[350px] p-6 border-2 border-dashed border-lavender-200 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50">
                            <svg
                                width="120px"
                                height="120px"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3.5 25.018h9.877l2.277-10.973 2.278 20.162 2.277-25.145 2.278 29.876 2.277-29.745 2.278 27.235 2.277-25.406 2.278 18.756 2.277-16.217 2.278 11.363H44.5"
                                    fill="none"
                                    stroke="#000"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <h2 className="text-2xl font-bold text-purple-800 mt-4">
                                Upload Audio
                            </h2>
                            <p className="text-md mt-2 mb-4 text-gray-600 text-center">
                                Select an audio file to upload and trim the audio as needed.
                            </p>
                            <button
                                onClick={() => fileInputRef.current.click()}
                                className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl"
                            >
                                Upload Audio
                            </button>
                            <input
                                onChange={handleChange}
                                multiple={false}
                                ref={fileInputRef}
                                type="file"
                                accept="audio/*"
                                className="hidden"
                            />
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center min-h-[450px] p-6 border-2 border-lavender-200 rounded-lg bg-gradient-to-br from-gray-100 to-gray-50">
                            <h2 className="text-2xl font-bold text-purple-800 mt-4">Trim Audio</h2>
                            <div className="flex items-center justify-center mt-4">
                                <svg
                                    width="24px"
                                    height="24px"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.319 2.505A2.75 2.75 0 0011.414 4.3c-.098.27-.132.563-.148.869A17.25 17.25 0 0011.25 6v8.536A4.75 4.75 0 1012.75 18V9.21c.105.056.218.113.343.175L15.8 10.74c.418.21.759.38 1.038.5.281.123.558.223.843.257A2.75 2.75 0 0020.586 9.7c.098-.27.132-.563.148-.87.016-.303.016-.683.016-1.151v-.083c0-.348 0-.62-.049-.878a2.75 2.75 0 00-1.03-1.667c-.21-.16-.453-.281-.764-.436L16.2 3.261c-.418-.21-.759-.38-1.038-.501-.28-.123-.558-.223-.843-.256z"
                                        fill="#000"
                                    />
                                </svg>
                                <p className="text-purple-800 text-center ml-2">{audio.name}</p>
                            </div>

                            <div className="w-full mt-4">
                                <WaveSurfer
                                    plugins={plugins}
                                    onMount={handleWSMount}
                                    cursorColor="transparent"
                                    container="#waveform"
                                    url={audioUrl}
                                    waveColor={'#A594F9'}
                                    barHeight={0.5}
                                    progressColor={'#CDC1FF'}
                                    barWidth={3}
                                    dragToSeek={true}
                                    autoplay={true}
                                    interact={false}
                                >
                                    <WaveForm id="waveform" />
                                    <div id="timeline" />
                                    {isLoaded &&
                                        regions.map((regionProps) => (
                                            <Region
                                                onUpdateEnd={handleRegionUpdate}
                                                key={regionProps.id}
                                                {...regionProps}
                                            />
                                        ))}
                                </WaveSurfer>
                                <div className="text-center mt-4">
                                    <p className="text-sm text-gray-500">Start Time: {startTime} seconds</p>
                                    <p className="text-sm text-gray-500">End Time: {endTime} seconds</p>
                                    <p className="text-sm text-gray-500">Duration: {duration} seconds</p>
                                </div>

                                <div className="flex justify-center gap-4 mt-8">
                                    <button
                                        onClick={play}
                                        className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl"
                                    >
                                        Play / Pause
                                    </button>
                                    <button
                                        onClick={trim}
                                        className="px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl"
                                    >
                                        Trim Audio
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}