import React, { useRef, useState } from 'react'
import { toJpeg } from 'html-to-image'

export default function InstagramPostGenerator() {
    const [theme, setTheme] = useState('Light')
    const [username, setUsername] = useState('johndoe')
    const [location, setLocation] = useState('New York, USA')
    const [caption, setCaption] = useState('This is a sample post text. @mentions, #hashtags,https://links.com are all automatically converted.')
    const [likes, setLikes] = useState('1234')
    const [comments, setComments] = useState('1234')
    const [image, setImage] = useState('/images/nodp.jpg');
    const [postimage, setPostImage] = useState('/images/cat.jpg')
    const [cmtdisplay, setCmtdisplay] = useState(true)
    const [tagged, setTagged] = useState(true)
    const [isStory, setIsStory] = useState(true)
    const [isverified, setVerified] = useState(true)
    const [isliked, setIsLiked] = useState(false)
    const [time, setTime] = useState('h')
    const [timedigit, setTimedigit] = useState('2')
    const exportRef = useRef(null);



    const handleTheme = (e) => {
        const selectedTheme = e.target.value
        setTheme(selectedTheme)
    }

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                setImage(event.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleImageUploadPost = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                setPostImage(event.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const highlightText = (text) => {
        const regex = /(@\w+|#\w+|https?:\/\/[^\s]+)/g;
        const parts = text.split(regex);

        return parts.map((part, index) => {
            if (part.match(/@\w+/)) {
                return <span key={index} className="text-[#00376B] dark:text-[#E0F1FF]">{part}</span>;
            } else if (part.match(/#\w+/)) {
                return <span key={index} className="text-[#00376B] dark:text-[#E0F1FF]">{part}</span>;
            } else if (part.match(/https?:\/\/[^\s]+/)) {
                return <span key={index} className="text-[#00376B] dark:text-[#E0F1FF]">{part}</span>;
            }
            return part;
        });
    };

    const handleLike = () => {
        setIsLiked(!isliked)
    }

    const handleExport = () => {
        if (exportRef.current === null) {
            return;
        }

        // Options to increase quality
        const scale = 2; // Increase this value for higher resolution
        const node = exportRef.current;
        const width = node.offsetWidth * scale;
        const height = node.offsetHeight * scale;

        toJpeg(node, {
            quality: 1, //Quality
            width: width,
            height: height,
            style: {
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
            },
        })
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.download = 'image.jpg';
                link.href = dataUrl;
                link.click();
            })
            .catch((err) => {
                console.error('Failed to export image', err);
            });
    };

    return (
        <>
            <div className='min-h-screen w-screen flex justify-center items-center bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]'>
                <div className={`mo:flex-col  mo:items-center mo:gap-8 flex ${theme}`}>
                    <div className=' mo:ml-4 mo:mr-4 mo:mt-4 border-8 w-fit h-fit rounded-md'>
                        <div ref={exportRef} className='dark:bg-black bg-white'>
                            {/* Upper Part */}
                            <div className='flex justify-between items-center px-4 py-2'>
                                <div className='flex gap-2 items-center'>
                                    <div className={`w-9 h-9 rounded-full ${isStory ? 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]' : ''} flex justify-center items-center`}>
                                        <img className='border-white dark:border-black border-2 w-8 h-8 rounded-full object-cover' src={`${image}`} alt="" />
                                    </div>

                                    <div className='flex flex-col'>
                                        <div className='flex gap-1 items-center'>
                                            <p className='font-semibold text-sm dark:text-white '>{username}</p>
                                            {isverified && <svg aria-label="Verified" className="x1lliihq x1n2onr6" fill="rgb(0, 149, 246)" height="12" role="img" viewBox="0 0 40 40" width="12"><title>Verified</title><path d="M19.998 3.094 14.638 0l-2.972 5.15H5.432v6.354L0 14.64 3.094 20 0 25.359l5.432 3.137v5.905h5.975L14.638 40l5.36-3.094L25.358 40l3.232-5.6h6.162v-6.01L40 25.359 36.905 20 40 14.641l-5.248-3.03v-6.46h-6.419L25.358 0l-5.36 3.094Zm7.415 11.225 2.254 2.287-11.43 11.5-6.835-6.93 2.244-2.258 4.587 4.581 9.18-9.18Z" fillRule="evenodd"></path></svg>}
                                            <p className='text-[#737373] dark:text-[#A8A8A8] font-normal'>•</p>
                                            <p className='text-[#737373] dark:text-[#A8A8A8] text-sm font-normal'>{timedigit}{time}</p>
                                        </div>
                                        <p className='text-[#737373] font-normal text-[12px] dark:text-white'>{location}</p>
                                    </div>
                                </div>
                                <svg className="dark:fill-white fill-black x1lliihq x1n2onr6 x5n08af" aria-label="More options" height="24" role="img" viewBox="0 0 24 24" width="24">
                                    <title>More options</title>
                                    <circle cx="12" cy="12" r="1.5"></circle>
                                    <circle cx="6" cy="12" r="1.5"></circle>
                                    <circle cx="18" cy="12" r="1.5"></circle>
                                </svg>
                            </div>
                            {/* Image Part */}
                            <div className='relative w-96 h-96'>
                                {tagged &&
                                    <div className='absolute bottom-5 left-4 bg-[#262626] rounded-full p-1'>
                                        <svg aria-label="Tags" className="   fill-white " height="12" role="img" viewBox="0 0 24 24" width="12"><title>Tags</title><path d="M21.334 23H2.666a1 1 0 0 1-1-1v-1.354a6.279 6.279 0 0 1 6.272-6.272h8.124a6.279 6.279 0 0 1 6.271 6.271V22a1 1 0 0 1-1 1ZM12 13.269a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z"></path></svg>
                                    </div>
                                }
                                <img className='w-full h-full object-cover' src={`${postimage}`} />
                            </div>
                            {/* Bottom Part */}
                            <div className='w-96 px-4 py-2'>
                                <div className='flex justify-between pb-3'>
                                    <div className='flex gap-4'>
                                        {
                                            isliked ?
                                                (<svg className='cursor-pointer' onClick={handleLike} aria-label="Unlike" fill="red" height="24" role="img" viewBox="0 0 48 48" width="24"><title>Unlike</title><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>)
                                                :
                                                (<svg onClick={handleLike} className='dark:fill-white cursor-pointer' aria-label="Like" role="img" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path></svg>
                                                )
                                        }
                                        <svg className='dark:stroke-white cursor-pointer stroke-black' aria-label="Comment" fill="currentColor" role="img" width="24" height="24" viewBox="0 0 24 24"><path d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z" fill='none' strokeLinejoin="round" strokeWidth="2"></path></svg>
                                        <svg className='dark:stroke-white cursor-pointer stroke-black' aria-label="Share Post" fill="currentColor" role="img" width="24" height="24" viewBox="0 0 24 24"><line fill="none" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                    </div>
                                    <svg className='dark:stroke-white cursor-pointer stroke-black' aria-label="Save" fill="currentColor" role="img" width="24" height="24" viewBox="0 0 24 24"><title>Save</title><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                                </div>
                                <p className='font-system mb-2 font-semibold text-sm dark:text-white'>{Number(likes).toLocaleString()} likes</p>
                                <div className='mb-2'>
                                    <p className='font-system text-sm dark:text-white'><b className='font-semibold text-smdark:text-white'>{username}</b> {highlightText(caption)}</p>
                                </div>
                                {cmtdisplay &&
                                    <p className='text-sm text-[#737373] dark:text-[#A8A8A8] '>View all {Number(comments).toLocaleString()} comments</p>
                                }
                            </div>
                        </div>
                    </div>
                    {/* Controls Section */}
                    <div className='ml-4 mo:ml-0 mo:mb-4 w-96 h-fit flex flex-col gap-4  max-w-lg bg-white border rounded-lg shadow-lg p-6'>

                        <div className=' flex justify-between items-center'>
                            <h1 className='font-system font-semibold text-2xl text-gray-800'>Post Body</h1>
                            <button onClick={handleExport} className='py-2 px-4 text-white font-semibold bg-blue-500 rounded'>Export</button>
                        </div>


                        <div className='w-full flex justify-between items-center '>
                            {/* <button onClick={handleTheme} className='border rounded bg-black text-white px-2 py-1'>{theme ? 'Light Mode': 'Dark Mode'}</button> */}
                            <select value={theme} onChange={handleTheme} className='border py-3 px-12 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-fit' defaultValue={'Theme'}>
                                <option value="light">Light</option>
                                <option value="dark">Dark</option>
                            </select>
                            <div className='border border-gray-300 py-1 rounded-md flex items-center'>
                                <input value={username} onChange={e => setUsername(e.target.value)} className='outline-none px-2 w-full' type="text" placeholder='Username' />
                                <button value={isverified} onClick={() => setVerified(!isverified)} className={`${isverified ? 'bg-blue-700' : 'bg-blue-400'} font-semibold text-white rounded-md py-2 px-4 mx-1 hover:bg-blue-600`}>{isverified ? `Verfied` : `Verify `}</button>
                            </div>
                        </div>

                        <div className='flex gap-2'>
                            <div>
                                <label className='text-gray-600'>Location</label>
                                <input value={location} onChange={e => setLocation(e.target.value)} type="text" className='border border-gray-300 px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full' placeholder='Location' />
                            </div>
                            <div>
                                <label className='text-gray-600'>Time</label>
                                <div className='flex relative'>
                                    <input value={timedigit} onChange={e => setTimedigit(e.target.value)} type="number" className='border border-gray-300 px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full' placeholder='Time' />
                                    <select value={time} onChange={e => setTime(e.target.value)} className='absolute right-0 h-full border border-gray-300 rounded-md'>
                                        <option value="s">s</option>
                                        <option value="m">m</option>
                                        <option value="h">h</option>
                                        <option value="d">d</option>
                                        <option value="w">w</option>
                                    </select>

                                </div>

                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <label className='text-gray-600 mb-1'>Profile Picture</label>
                                <label className="cursor-pointer border border-gray-300 px-4 py-2 rounded-md bg-white text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Choose File
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
                                </label>
                            </div>
                            <div className='flex flex-col'>
                                <label className='text-gray-600 mb-1'>Post Image</label>
                                <label className="cursor-pointer border border-gray-300 px-4 py-2 rounded-md bg-white text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    Choose File
                                    <input type="file" className="hidden" accept="image/*" onChange={handleImageUploadPost} />
                                </label>
                            </div>
                        </div>

                        <textarea value={caption} onChange={(e) => setCaption(e.target.value)} className='border border-gray-300 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Post Caption' rows={3}></textarea>


                        {/* <h1 className='font-system my-3 font-semibold text-2xl text-gray-800'>Stats & States</h1> */}

                        <div className='flex mb-6 space-x-4'>
                            {/* Number of Images */}
                            {/* <div className='flex flex-col'>
                                <label className='text-gray-600 mb-1'>Image Count</label>
                                <select className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'>
                                    <option disabled>Image Count</option>
                                    {[...Array(10).keys()].map(n => (
                                        <option key={n} value={n + 1}>{n + 1}</option>
                                    ))}
                                </select>
                            </div> */}
                            <div>
                                <label className='text-gray-600'>Like Count</label>
                                <input value={likes} onChange={(e) => setLikes(e.target.value)} type="number" className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full' placeholder='Like Count' />
                            </div>
                            <div>
                                <label className='text-gray-600'>Comment Count</label>
                                <input value={comments} onChange={(e) => setComments(e.target.value)} type="number" className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full' placeholder='Comment Count' />
                            </div>
                        </div>

                        <div>
                            <div className='flex mb-6 justify-between'>
                                <div className='flex items-center space-x-2'>
                                    <input checked={isliked} onChange={() => setIsLiked(!isliked)} type="checkbox" className='form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500' />
                                    <p className='text-gray-600'>Is Post liked by Viewer?</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <input checked={tagged} onChange={() => setTagged(!tagged)} type="checkbox" className='form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500' />
                                    <p className='text-gray-600'>Is Someone Tagged?</p>
                                </div>
                            </div>

                            <div className='flex justify-between'>
                                <div className='flex items-center space-x-2'>
                                    <input checked={isStory} onChange={() => setIsStory(!isStory)} type="checkbox" className='form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500' />
                                    <p className='text-gray-600'>Has An Instagram Story?</p>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <input checked={cmtdisplay} onChange={() => setCmtdisplay(!cmtdisplay)} type="checkbox" className='form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500' />
                                    <p className='text-gray-600'>Are Comments Displayed?</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
