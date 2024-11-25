import React, { useState, useRef } from 'react'
import { toJpeg } from 'html-to-image'

export default function TweetGenerator() {
    const [username, setUsername] = useState('johndoe')
    const [name, setName] = useState('John Doe')
    const [time, setTime] = useState('5')
    const [timeunit, setTimeunit] = useState('m')
    const [tweet, setTweet] = useState('This is a sample tweet. @mentions, #hashtags, https://links.com are all automatically converted.')
    const [cmntcount, setCmntCount] = useState('')
    const [rtcount, setRtCount] = useState('')
    const [likecount, setLikeCount] = useState('')
    const [viewcount, setViewCount] = useState('')
    const [verified, setVerified] = useState(false)
    const [theme, setTheme] = useState('light')
    const [liked, setLiked] = useState(false)
    const [profimage, setProfimage] = useState(false)
    const [postimage, setPostImage] = useState(false)
    const exportRef = useRef(null);

    const highlightText = (text) => {
        const regex = /(@\w+|#\w+|https?:\/\/[^\s]+)/g;
        const parts = text.split(regex);

        return parts.map((part, index) => {
            if (part.match(/@\w+/)) {
                return <span key={index} className="text-[#1DA1F2]">{part}</span>;
            } else if (part.match(/#\w+/)) {
                return <span key={index} className="text-[#1DA1F2]">{part}</span>;
            } else if (part.match(/https?:\/\/[^\s]+/)) {
                return <span key={index} className="text-[#1DA1F2]">{part}</span>;
            }
            return part;
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (event) => {
                setProfimage(event.target.result)
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
            <div className='w-full min-h-screen bg-gradient-to-tr from-blue-800 to-blue-500 flex justify-center items-center'>
                <div className={`w-3/5 h-fit mo:w-full mo:bg-transparent bg-gray-300 p-2 rounded-lg flex flex-col gap-2 ${theme} my-4 `}>
                    <div className='w-full bg-white h-fit flex rounded justify-center p-4  '>
                        <div ref={exportRef} className=' dark:bg-black dark:border-black bg-white flex border w-[600px]  p-4 font-system'>
                            <div className='mr-2 min-w-fit'>
                                {profimage ?
                                    (<img src={profimage} className='w-12 h-12 rounded-full object-cover' />)
                                    : (<svg className='rounded-full w-12 h-12' viewBox="0 0 134 134"><g clipPath="url(#clipAvatar)"><rect width="133.333" height="133.333" fill="#CCD7DD"></rect><path d="M55.123 33.6523C48.5897 37.519 44.0563 45.3857 42.723 55.119C41.3897 64.1857 41.7897 67.7857 44.8563 74.5857C47.923 81.3857 53.523 83.6523 66.723 83.6523C85.123 83.6523 91.2563 78.1857 91.123 62.1857C90.9897 48.4523 85.7897 37.3857 77.3897 32.9857C71.7897 30.0523 60.323 30.4523 55.123 33.6523Z" fill="#657687"></path><circle cx="66.5" cy="135.5" r="43.5" fill="#657686"></circle></g><defs><clipPath id="clipAvatar"><rect width="133.333" height="133.333" fill="white"></rect></clipPath></defs></svg>)
                                }
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <div className='flex items-center'>
                                        <p className='dark:text-[#E7E9EA] font-bold text[15px]'>{name}</p>
                                        {verified && <svg className='ml-1 fill-[#1DA1F2]' width="18.75" height="18.75" viewBox="0 0 22 22" aria-label="Verified account"><g><path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"></path></g></svg>}
                                        <p className='dark:text-[#71767B] text-[#536471] ml-1  text-[15px]'>@{username} · {time}{timeunit}</p>
                                    </div>
                                    <svg className='fill-[#536471]' width="18.75" height="18.75" viewBox="0 0 24 24"><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                                </div>
                                <div className='dark:text-[#E7E9EA] text-[15px]'>{highlightText(tweet)}</div>

                                {postimage &&
                                    <div className='w-fit max-h-96 mt-3 rounded-lg overflow-hidden '>
                                        <img src={postimage} alt="" className="max-w-full max-h-full" />
                                    </div>
                                }

                                <div className='flex justify-between mt-3'>
                                    <div className=' text-[#536471] text-[15px] flex items-center'>
                                        <svg width="18.75" height="18.75" viewBox="0 0 24 24" fill="currentColor"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg>
                                        <p className='ml-1 text-[13px]'>{cmntcount}</p>
                                    </div>
                                    <div className='text-[#536471] text-[15px] flex items-center'>
                                        <svg fill="currentColor" width="18.75" height="18.75" viewBox="0 0 24 24"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg>
                                        <p className=' ml-1 text-[13px]'>{rtcount}</p>
                                    </div>
                                    <div className='text-[#536471] text-[15px] flex items-center'>
                                        {liked ? (
                                            <svg className='cursor-pointer' onClick={() => setLiked(false)} width="18.75" height="18.75" fill="#F91880" viewBox="0 0 24 24" aria-hidden="true"><g><path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>
                                        ) : (<svg className='cursor-pointer' onClick={() => setLiked(true)} fill="currentColor" width="18.75" height="18.75" viewBox="0 0 24 24"><g><path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"></path></g></svg>)}

                                        <p className='ml-1 text-[13px] '>{likecount}</p>
                                    </div>
                                    <div className='text-[#536471] text-[15px] flex items-center'>
                                        <svg fill="currentColor" width="18.75" height="18.75" viewBox="0 0 24 24"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path></g></svg>
                                        <p className='ml-1 text-[13px]'>{viewcount}</p>
                                    </div>
                                    <div className='flex gap-4 text-[#536471]'>
                                        <svg fill="currentColor" width="18.75" height="18.75" viewBox="0 0 24 24"><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path></g></svg>
                                        <svg fill="currentColor" width="18.75" height="18.75" viewBox="0 0 24 24"><g><path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path></g></svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Operations */}
                    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-4">
                        <button className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={handleExport}>Export</button>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">Theme</label>
                                <select value={theme} onChange={(e) => setTheme(e.target.value)} className="border rounded-lg w-full p-2">
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">Profile Pic</label>
                                <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full p-2 border rounded-lg" />
                            </div>

                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">Tweet Image</label>
                                <input type="file" accept="image/*" onChange={handleImageUploadPost} className="w-full p-2 border rounded-lg" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">Name</label>
                                <input value={name} onChange={(e) => setName(e.target.value)} className="border rounded-lg w-full p-2" type="text" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">Username</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} className="border rounded-lg w-full p-2" type="text" />
                            </div>
                            <button onClick={() => setVerified(!verified)} className={`md:col-span-2 w-full py-2 ${verified ? 'bg-green-500' : 'bg-gray-300'} text-white rounded-lg hover:bg-green-600 transition`}>
                                {verified ? 'Verified' : 'Verify'}
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">Tweet Time</label>
                                <div className="flex space-x-2">
                                    <input value={time} onChange={(e) => setTime(e.target.value)} className="border rounded-lg w-1/2 p-2" type="number" />
                                    <select value={timeunit} onChange={(e) => setTimeunit(e.target.value)} className="border rounded-lg w-1/2 p-2">
                                        <option value="s">s</option>
                                        <option value="m">m</option>
                                        <option value="h">h</option>
                                        <option value="d">d</option>
                                        <option value="w">w</option>
                                        <option value="y">y</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-gray-600 font-medium">Tweet</label>
                            <textarea value={tweet} onChange={(e) => setTweet(e.target.value)} className="border rounded-lg w-full p-2 h-32" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <button onClick={() => setLiked(!liked)} className={`w-full py-2 ${liked ? 'bg-pink-500' : 'bg-gray-300'} text-white rounded-lg hover:bg-pink-600 transition`}>
                                {liked ? 'Liked' : 'Like'}
                            </button>

                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">Comment Count</label>
                                <input value={cmntcount} onChange={(e) => setCmntCount(e.target.value)} className="border rounded-lg w-full p-2" type="number" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">Retweet Count</label>
                                <input value={rtcount} onChange={(e) => setRtCount(e.target.value)} className="border rounded-lg w-full p-2" type="number" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">Like Count</label>
                                <input value={likecount} onChange={(e) => setLikeCount(e.target.value)} className="border rounded-lg w-full p-2" type="number" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-gray-600 font-medium">View Count</label>
                                <input value={viewcount} onChange={(e) => setViewCount(e.target.value)} className="border rounded-lg w-full p-2" type="number" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
