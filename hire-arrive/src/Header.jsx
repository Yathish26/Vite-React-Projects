import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Metadata from './Meta';
import axios from 'axios';

export function Header() {
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);
    const [place, setPlace] = useState('');
    const [user, setUser] = useState(null);

    const navigate = useNavigate();


    const url = useLocation()

    const login = url.pathname === '/login' || url.pathname === '/register';



    useEffect(() => {
        if (!login && location.lat && location.lon) {
            fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${location.lat}&lon=${location.lon}&apiKey=4626726a7987421297b4a38a4a88cf6c`)
                .then(response => response.json())
                .then(result => {
                    if (result.features && result.features.length > 0) {
                        setPlace(result.features[0].properties.city || 'Unknown location');
                    }
                })
                .catch(error => console.log('Error fetching location:', error));
        }
    }, [login, location]);

    // Get the user's current location using the browser's geolocation API
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (err) => {
                    setError('Unable to retrieve your location');
                    setTimeout(() => {
                        setError('')
                    }, 2000)
                }
            );
        } else {
            setError('Geolocation is not supported by your browser');
        }
    }, []);


    useEffect(() => {
        // Fetch user data (replace with your API endpoint)
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');

            try {
                const response = await fetch('https://hire-arrive-server.onrender.com/api/auth/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                if (!response.ok) throw new Error('Failed to fetch user data');
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Error fetching user data:', error);

            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        setUser(null);
        navigate('/login');
    };

    return (

        <div className="bg-gray-900 h-fit flex flex-col ">
            <Metadata />
            {login ? <LoginHeader /> :
                (
                    <>
                        <div className='flex mo:justify-center items-center px-6 py-4 justify-between mo:flex-col'>
                            <div className='flex items-center gap-4'>
                                <Link to={"/"}>
                                    <svg className='w-12 h-12' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{'fill:#ffffff;'} </style> <g> <path className="st0" d="M201.905,145.195c0,13.862,5.214,26.498,13.785,36.064h80.619c8.571-9.566,13.789-22.202,13.789-36.064 c0-18.74-9.538-35.252-24.017-44.965l8.256-16.862c2.814-0.448,5.376-2.201,6.721-4.948c2.186-4.471,0.336-9.874-4.138-12.061 c-4.472-2.194-9.875-0.344-12.058,4.134c-1.584,3.231-1.048,6.932,1.052,9.573l-7.73,15.797c-6.77-3.048-14.276-4.758-22.181-4.758 c-7.912,0-15.415,1.71-22.188,4.758l-7.726-15.797c2.099-2.642,2.635-6.342,1.055-9.573c-2.19-4.478-7.59-6.328-12.061-4.134 c-4.475,2.187-6.329,7.59-4.138,12.061c1.346,2.747,3.907,4.5,6.721,4.948l8.256,16.862 C211.436,109.943,201.905,126.455,201.905,145.195z"></path> <path className="st0" d="M182.52,210.456c20.608-10.302,14.805-25.188,5.354-35.63C163.402,147.774,78.392,98.828,33.97,91.105 C21.282,88.89-6.387,90.243,1.34,129.749c2.663,13.61,21.47,73.838,62.686,94.457C105.24,244.803,164.972,219.23,182.52,210.456z"></path> <path className="st0" d="M203.475,211.941c-4.394,4.219-10.004,7.443-15.194,10.036c-10.761,5.382-48.862,22.932-87.386,22.932 c-3.413,0-6.732-0.168-9.987-0.442c-21.442,22.756-28.973,53.55-17.44,73.328c12.026,20.611,47.33,26.505,72.991,10.302 c32.63-20.604,52.804-80.721,56.241-97.884C203.678,225.313,205.567,215.249,203.475,211.941z"></path> <path className="st0" d="M478.03,91.105c-44.422,7.723-129.432,56.669-153.905,83.72c-9.447,10.442-15.253,25.328,5.351,35.63 c17.549,8.774,77.284,34.347,118.499,13.75c41.219-20.619,60.022-80.847,62.685-94.457C518.387,90.243,490.719,88.89,478.03,91.105 z"></path> <path className="st0" d="M411.101,244.908c-38.52,0-76.621-17.549-87.382-22.932c-5.186-2.593-10.804-5.816-15.194-10.036 c-2.092,3.308-0.207,13.372,0.774,18.271c3.434,17.163,23.614,77.28,56.241,97.884c25.657,16.203,60.964,10.309,72.987-10.302 c11.535-19.778,4.005-50.572-17.437-73.328C417.836,244.74,414.518,244.908,411.101,244.908z"></path> <path className="st0" d="M293.997,191.562h-75.994c-2.846,0-5.155,2.312-5.155,5.158v32.841c0,2.846,2.309,5.158,5.155,5.158h75.994 c2.842,0,5.151-2.312,5.151-5.158v-32.841C299.148,193.874,296.839,191.562,293.997,191.562z"></path> <path className="st0" d="M217.351,246.954c-3.346,3.182-13.729,19-20.734,39.926h118.766c-7.005-20.927-17.388-36.744-20.734-39.926 H217.351z"></path> <path className="st0" d="M190.506,313.925c-0.869,7.842-0.925,15.916,0.214,23.948c0.816,5.746,2.011,11.052,3.48,15.986h123.608 c1.472-4.934,2.66-10.239,3.473-15.986c1.139-8.032,1.083-16.105,0.214-23.948H190.506z"></path> <path className="st0" d="M249.726,412.356l4.692,31.67c0.217,1.458,1.472,2.538,2.95,2.538c1.479,0,2.737-1.079,2.95-2.538 l4.846-32.721c10.169-3.904,26.824-12.573,39.582-30.402h-97.481C221.325,400.533,240.1,409.076,249.726,412.356z"></path> </g> </g></svg>
                                </Link>
                                <Link to={"/"}>
                                    <div className='font-bree text-white text-4xl'>Hire Arrive</div>
                                </Link>
                            </div>
                            <div className='flex items-center gap-4 '>
                                <div className='flex items-center'>
                                    <svg className='w-10 h-10 mo:w-8 mo:h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="#ffffff"></path> </g></svg>
                                    <div className='text-white font-spartan text-xl'>
                                        <h1>{error ? error : place}</h1>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <Menus />

                    </>
                )}

        </div>
    );
}

export default Header;

const Menus = () => {
    const token = localStorage.getItem('token');
    const [user, setUser] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchUserData = async () => {
            try {
                const response = await axios.get('https://hire-arrive-server.onrender.com/api/auth/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data.businessName); // Set user data from the response
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };
        fetchUserData();
    }, []);

    return (
        <ul className='flex mo:bg-gray-900 mo:border-2 opacity-90 border-purple-700 mo:rounded-3xl mo:z-50 mo:fixed mo:left-1/2 mo:bottom-[1rem] mo:transform mo:-translate-x-1/2 mo:justify-evenly items-center justify-center gap-4 py-4 font-spartan text-lg text-white w-full mo:max-w-[90%]'>
            
            <a href="/">
                <div className='flex flex-col px-4 py-2 justify-center rounded-xl items-center hover:bg-purple-700'>
                    <svg className='w-8 h-8' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#ffffff"></path> </g></svg>
                    <li className=' transition-opacity duration-300'>Home</li>
                </div>
                </a>
            
            {user === '' ? (
                    <Link to='/listing'>
                        <div className='flex flex-col px-4 py-2 justify-center rounded-xl items-center hover:bg-purple-700'>
                            <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5189 16.5013C16.6939 16.3648 16.8526 16.2061 17.1701 15.8886L21.1275 11.9312C21.2231 11.8356 21.1793 11.6708 21.0515 11.6264C20.5844 11.4644 19.9767 11.1601 19.4083 10.5917C18.8399 10.0233 18.5356 9.41561 18.3736 8.94849C18.3292 8.82066 18.1644 8.77687 18.0688 8.87254L14.1114 12.8299C13.7939 13.1474 13.6352 13.3061 13.4987 13.4811C13.3377 13.6876 13.1996 13.9109 13.087 14.1473C12.9915 14.3476 12.9205 14.5606 12.7786 14.9865L12.5951 15.5368L12.3034 16.4118L12.0299 17.2323C11.9601 17.4419 12.0146 17.6729 12.1708 17.8292C12.3271 17.9854 12.5581 18.0399 12.7677 17.9701L13.5882 17.6966L14.4632 17.4049L15.0135 17.2214L15.0136 17.2214C15.4394 17.0795 15.6524 17.0085 15.8527 16.913C16.0891 16.8004 16.3124 16.6623 16.5189 16.5013Z" fill="#ffffff"></path> <path d="M22.3665 10.6922C23.2112 9.84754 23.2112 8.47812 22.3665 7.63348C21.5219 6.78884 20.1525 6.78884 19.3078 7.63348L19.1806 7.76071C19.0578 7.88348 19.0022 8.05496 19.0329 8.22586C19.0522 8.33336 19.0879 8.49053 19.153 8.67807C19.2831 9.05314 19.5288 9.54549 19.9917 10.0083C20.4545 10.4712 20.9469 10.7169 21.3219 10.847C21.5095 10.9121 21.6666 10.9478 21.7741 10.9671C21.945 10.9978 22.1165 10.9422 22.2393 10.8194L22.3665 10.6922Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.9812 19.6756 20.9997 17.8316 21 14.1801L18.1817 16.9984C17.9119 17.2683 17.691 17.4894 17.4415 17.6841C17.1491 17.9121 16.8328 18.1076 16.4981 18.2671C16.2124 18.4032 15.9159 18.502 15.5538 18.6225L13.2421 19.3931C12.4935 19.6426 11.6682 19.4478 11.1102 18.8898C10.5523 18.3318 10.3574 17.5065 10.607 16.7579L10.8805 15.9375L11.3556 14.5121L11.3775 14.4463C11.4981 14.0842 11.5968 13.7876 11.7329 13.5019C11.8924 13.1672 12.0879 12.8509 12.316 12.5586C12.5106 12.309 12.7317 12.0881 13.0017 11.8183L17.0081 7.81188L18.12 6.70004L18.2472 6.57282C18.9626 5.85741 19.9003 5.49981 20.838 5.5C20.6867 4.46945 20.3941 3.73727 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H10.5C10.9142 12.25 11.25 12.5858 11.25 13C11.25 13.4142 10.9142 13.75 10.5 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H9.5C9.91421 16.25 10.25 16.5858 10.25 17C10.25 17.4142 9.91421 17.75 9.5 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z" fill="#ffffff"></path> </g></svg>
                            <li className=' transition-opacity duration-300'>Free Listing</li>
                        </div>
                    </Link>
                ) : (
                    <Link to='/business'>
                        <div className='flex flex-col px-4 py-2 justify-center rounded-xl items-center hover:bg-purple-700'>
                            <svg className='w-8 h-8' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path className="st0" d="M470.537,137.504H41.471C18.565,137.504,0,156.077,0,178.976v56.797l211.507,44.607V252.1h87.772v28.28 L512,235.489v-56.513C512,156.077,493.435,137.504,470.537,137.504z"></path> <path className="st0" d="M299.279,369.129h-87.772v-57.017L14.633,273.012V439.81c0,22.898,18.557,41.47,41.455,41.47h399.824 c22.898,0,41.463-18.572,41.463-41.47V272.721l-198.096,39.39V369.129z"></path> <rect x="233.452" y="274.044" className="st0" width="43.882" height="73.132"></rect> <path className="st0" d="M193.786,72.206c0.008-1.703,0.638-3.057,1.75-4.208c1.127-1.103,2.49-1.718,4.176-1.734h112.577 c1.686,0.016,3.058,0.631,4.185,1.734c1.103,1.151,1.726,2.505,1.733,4.208v29.627h35.546V72.206 c0.008-11.41-4.665-21.875-12.143-29.329c-7.446-7.485-17.934-12.166-29.321-12.158H199.712 c-11.394-0.008-21.875,4.673-29.32,12.158c-7.47,7.454-12.158,17.918-12.135,29.329v29.627h35.529V72.206z"></path> </g> </g></svg>
                            <li className=' transition-opacity duration-300'>Business</li>
                        </div>
                    </Link>)}


            {token ? (<Link to={'/user'}>
                <div className='flex flex-col px-4 py-2 justify-center rounded-xl items-center hover:bg-purple-700'>
                    <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="#ffffff"></path> <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="#ffffff"></path> </g></svg>
                    <li className=' transition-opacity duration-300'>Profile</li>
                </div>
            </Link>) :
                (<Link to={'/login'}>
                    <div className='flex flex-col px-4 py-2 justify-center rounded-xl items-center hover:bg-purple-700'>
                        <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="#ffffff"></path> <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="#ffffff"></path> </g></svg>
                        <li className=' transition-opacity duration-300'>Login</li>
                    </div>
                </Link>)}
        </ul>
    );
};


const LoginHeader = () => {
    return (
        <>

            <div className='flex justify-center items-center px-6 py-4'>
                <Link to='/'>
                    <div className='flex items-center gap-4'>

                        <svg className='w-12 h-12' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{'fill:#ffffff;'} </style> <g> <path className="st0" d="M201.905,145.195c0,13.862,5.214,26.498,13.785,36.064h80.619c8.571-9.566,13.789-22.202,13.789-36.064 c0-18.74-9.538-35.252-24.017-44.965l8.256-16.862c2.814-0.448,5.376-2.201,6.721-4.948c2.186-4.471,0.336-9.874-4.138-12.061 c-4.472-2.194-9.875-0.344-12.058,4.134c-1.584,3.231-1.048,6.932,1.052,9.573l-7.73,15.797c-6.77-3.048-14.276-4.758-22.181-4.758 c-7.912,0-15.415,1.71-22.188,4.758l-7.726-15.797c2.099-2.642,2.635-6.342,1.055-9.573c-2.19-4.478-7.59-6.328-12.061-4.134 c-4.475,2.187-6.329,7.59-4.138,12.061c1.346,2.747,3.907,4.5,6.721,4.948l8.256,16.862 C211.436,109.943,201.905,126.455,201.905,145.195z"></path> <path className="st0" d="M182.52,210.456c20.608-10.302,14.805-25.188,5.354-35.63C163.402,147.774,78.392,98.828,33.97,91.105 C21.282,88.89-6.387,90.243,1.34,129.749c2.663,13.61,21.47,73.838,62.686,94.457C105.24,244.803,164.972,219.23,182.52,210.456z"></path> <path className="st0" d="M203.475,211.941c-4.394,4.219-10.004,7.443-15.194,10.036c-10.761,5.382-48.862,22.932-87.386,22.932 c-3.413,0-6.732-0.168-9.987-0.442c-21.442,22.756-28.973,53.55-17.44,73.328c12.026,20.611,47.33,26.505,72.991,10.302 c32.63-20.604,52.804-80.721,56.241-97.884C203.678,225.313,205.567,215.249,203.475,211.941z"></path> <path className="st0" d="M478.03,91.105c-44.422,7.723-129.432,56.669-153.905,83.72c-9.447,10.442-15.253,25.328,5.351,35.63 c17.549,8.774,77.284,34.347,118.499,13.75c41.219-20.619,60.022-80.847,62.685-94.457C518.387,90.243,490.719,88.89,478.03,91.105 z"></path> <path className="st0" d="M411.101,244.908c-38.52,0-76.621-17.549-87.382-22.932c-5.186-2.593-10.804-5.816-15.194-10.036 c-2.092,3.308-0.207,13.372,0.774,18.271c3.434,17.163,23.614,77.28,56.241,97.884c25.657,16.203,60.964,10.309,72.987-10.302 c11.535-19.778,4.005-50.572-17.437-73.328C417.836,244.74,414.518,244.908,411.101,244.908z"></path> <path className="st0" d="M293.997,191.562h-75.994c-2.846,0-5.155,2.312-5.155,5.158v32.841c0,2.846,2.309,5.158,5.155,5.158h75.994 c2.842,0,5.151-2.312,5.151-5.158v-32.841C299.148,193.874,296.839,191.562,293.997,191.562z"></path> <path className="st0" d="M217.351,246.954c-3.346,3.182-13.729,19-20.734,39.926h118.766c-7.005-20.927-17.388-36.744-20.734-39.926 H217.351z"></path> <path className="st0" d="M190.506,313.925c-0.869,7.842-0.925,15.916,0.214,23.948c0.816,5.746,2.011,11.052,3.48,15.986h123.608 c1.472-4.934,2.66-10.239,3.473-15.986c1.139-8.032,1.083-16.105,0.214-23.948H190.506z"></path> <path className="st0" d="M249.726,412.356l4.692,31.67c0.217,1.458,1.472,2.538,2.95,2.538c1.479,0,2.737-1.079,2.95-2.538 l4.846-32.721c10.169-3.904,26.824-12.573,39.582-30.402h-97.481C221.325,400.533,240.1,409.076,249.726,412.356z"></path> </g> </g></svg>


                        <div className='font-bree text-white text-4xl'>Hire Arrive</div>

                    </div>
                </Link>
            </div>
        </>
    )
}
