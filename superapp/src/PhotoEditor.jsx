import React, { useState, useRef } from 'react';

export default function PhotoEditor() {
    const [image, setImage] = useState(null);
    const [grayscale, setGrayscale] = useState(0);
    const [brightness, setBrightness] = useState(100);
    const [contrast, setContrast] = useState(100);
    const [saturate, setSaturate] = useState(100);
    const [huerotate, setHuerotate] = useState(0);
    const [invert, setInvert] = useState(0);
    const [blur, setBlur] = useState(0);
    const [sepia, setSepia] = useState(0);
    const [opacity, setOpacity] = useState(100);
    const canvasRef = useRef(null);

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleExport = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = image;

        img.onload = () => {
            // Set canvas dimensions
            canvas.width = img.width;
            canvas.height = img.height;

            // Apply filters
            ctx.filter = `
                grayscale(${grayscale}%) 
                brightness(${brightness}%) 
                contrast(${contrast}%) 
                saturate(${saturate}%) 
                hue-rotate(${huerotate}deg) 
                invert(${invert}%) 
                blur(${blur}px) 
                sepia(${sepia}%) 
                opacity(${opacity}%)
            `;

            // Draw image on canvas
            ctx.drawImage(img, 0, 0);

            // Create link to download
            const link = document.createElement('a');
            link.download = 'edited-image.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        };
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
            <div className="flex flex-col items-center">
                <img src="icons/photoeditor.svg" alt="Photo Editor Icon" className="w-16 h-16 mb-4" />
                <h1 className="text-4xl md:text-5xl font-bona mb-2 text-center">Photo Editor</h1>
                <p className='font-cursive text-xl mb-8'>Edit your images with ease !</p>
                {!image && (
                    <label className="mb-6 flex items-center bg-gray-700 p-4 rounded-lg cursor-pointer shadow-inner hover:bg-gray-600 transition duration-200 ease-in-out">
                        <img src="/icons/upload.svg" alt="Upload" className="h-8 w-8 mr-3" />
                        <span className="text-gray-400 text-lg md:text-xl">Upload Image</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                    </label>
                )}
            </div>

            {image && (
                <div className="w-full max-w-7xl p-6 bg-gray-900 rounded-lg shadow-2xl mt-8 flex flex-col md:flex-row">
                    <div className="flex flex-col items-center w-full md:w-2/3">
                        <div className="relative w-full">
                            <img
                                style={{
                                    filter: `
                                        grayscale(${grayscale}%) 
                                        brightness(${brightness}%) 
                                        contrast(${contrast}%) 
                                        saturate(${saturate}%) 
                                        hue-rotate(${huerotate}deg) 
                                        invert(${invert}%) 
                                        blur(${blur}px) 
                                        sepia(${sepia}%) 
                                        opacity(${opacity}%)
                                    `,
                                }}
                                className="w-full max-w-lg h-auto rounded-lg shadow-lg mx-auto"
                                src={image}
                                alt="Uploaded"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/3 mt-8 md:mt-0 md:ml-8 flex flex-col items-center">
                        <div className="space-y-6 w-full">
                            {[
                                { label: 'Grayscale', value: grayscale, setter: setGrayscale, max: 100 },
                                { label: 'Brightness', value: brightness, setter: setBrightness, max: 200 },
                                { label: 'Contrast', value: contrast, setter: setContrast, max: 200 },
                                { label: 'Saturate', value: saturate, setter: setSaturate, max: 200 },
                                { label: 'Hue Rotate', value: huerotate, setter: setHuerotate, max: 360 },
                                { label: 'Invert', value: invert, setter: setInvert, max: 100 },
                                { label: 'Blur', value: blur, setter: setBlur, max: 20 },
                                { label: 'Sepia', value: sepia, setter: setSepia, max: 100 },
                                { label: 'Opacity', value: opacity, setter: setOpacity, max: 100 },
                            ].map(({ label, value, setter, max }) => (
                                <div key={label} className="flex items-center gap-4">
                                    <label className="w-32 font-medium text-gray-300">{label}</label>
                                    <input
                                        type="range"
                                        min={0}
                                        max={max}
                                        value={value}
                                        onChange={(e) => setter(e.target.value)}
                                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                    />
                                    <span className="w-16 text-right text-gray-400">{`${value}${label === 'Hue Rotate' ? '°' : '%'}`}</span>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={handleExport}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg mt-6 flex items-center transition-colors duration-200 ease-in-out"
                        >
                            <img src="/icons/export.svg" alt="Export" className="h-6 w-6 mr-2" />
                            Export Image
                        </button>
                        <label className="mt-6 flex items-center bg-gray-700 p-2 rounded-lg cursor-pointer shadow-inner hover:bg-gray-600 transition duration-200 ease-in-out">
                            <img src="/icons/upload.svg" alt="Upload" className="h-6 w-6 mr-2" />
                            <span className="text-gray-400">Upload New Image</span>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>
            )}
            <canvas ref={canvasRef} className="hidden"></canvas>
        </div>
    );
}
