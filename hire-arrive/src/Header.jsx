import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export function Header() {
    // const [menu, setMenu] = useState(true);
    // const [logorotate, setlogorotate] = useState(true);
    // const menuRef = useRef(null);
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

    // const toggleMenu = () => {
    //     setMenu(!menu);
    //     setlogorotate(!logorotate);
    // };

    // useEffect(() => {
    //     if (menu && menuRef.current) {
    //         menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
    //         menuRef.current.style.opacity = '1';
    //     } else if (menuRef.current) {
    //         menuRef.current.style.maxHeight = '0px';
    //         menuRef.current.style.opacity = '0';
    //     }
    // }, [menu]);


    useEffect(() => {
        // Fetch user data (replace with your API endpoint)
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');

            // if (!token) {
            //     navigate('/login');
            //     return;
            // }

            try {
                const response = await fetch('https://hire-arrive-server.onrender.com/api/auth/user', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                if (!response.ok) throw new Error('Failed to fetch user data');
                const data = await response.json();
                setUser(data); // Assuming the response has the user object
            } catch (error) {
                console.error('Error fetching user data:', error);

            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token'); // Clear the token
        setUser(null); // Clear user state
        navigate('/login'); // Redirect to login page
    };

    return (

        <div className="bg-gray-900 h-fit flex flex-col ">
            {login ? <LoginHeader /> :
                (
                    <>
                        <div className='flex mo:justify-center items-center px-6 py-4 justify-between mo:flex-col'>
                            <div className='flex items-center gap-4'>
                                <Link to={"/"}>
                                <svg className='w-12 h-12' fill="#ffffff" height="200px" width="200px" version="1.2" baseProfile="tiny" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-351 153 256 256" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_1_" d="M-177.7,334.5c6.3-2.3,12.6-5.2,19.8-8.6c31.9-16.4,51.7-41.7,51.7-41.7s-32.5,0.6-64.4,17 c-4,1.7-7.5,4-10.9,5.7c5.7-7.5,12.1-16.4,18.7-25c25-37.1,31.3-77.3,31.3-77.3s-34.8,21-59.2,58.6c-5.2,7.5-9.8,14.9-13.8,22.7 c1.1-10.3,1.1-22.1,1.1-33.6c0-50-19.8-91.1-19.8-91.1s-19.8,40.5-19.8,91.1c0,12.1,0.6,23.3,1.1,33.6c-4-7.5-8.6-14.9-13.8-22.7 c-25-37.1-59.2-58.6-59.2-58.6s6.3,40,31.3,77.3c6.3,9.2,12.1,17.5,18.7,25c-3.4-2.3-7.5-4-10.9-5.7c-31.9-16.4-64.4-17-64.4-17 s19.8,25.6,51.7,41.7c6.9,3.4,13.2,6.3,19.8,8.6c-4,0.6-8,1.1-12.1,2.3c-30.5,6.4-53.2,23.9-53.2,23.9s27.3,7.5,58.6,1.1 c9.8-2.3,19.8-4.6,27.3-7.5c-1.1,1.1,15.8-8.6,21.6-14.4v60.4h8.6v-61.8c6.3,6.3,22.7,16.4,22.1,14.9c8,2.9,17.5,5.2,27.3,7.5 c30.8,6.3,58.6-1.1,58.6-1.1s-22.1-17.5-53.4-23.8C-169.6,335.7-173.7,335.1-177.7,334.5z"></path> </g></svg>
                                </Link>
                                <Link to={"/"}>
                                    <div className='font-bree text-white text-4xl'>Hire Arrive</div>
                                </Link>
                                {/* <svg
                                    onClick={toggleMenu}
                                    className={`w-6 h-6 fill-purple-400 transition-transform duration-300 ${logorotate ? 'rotate-180' : ''}`}
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M21,21H3L12,3Z" />
                                </svg> */}
                            </div>
                            <div className='flex items-center gap-4 '>
                                <div className='flex items-center'>
                                    <svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="#ffffff"></path> </g></svg>
                                    <div className='text-white font-spartan text-xl'>
                                        <h1>{error ? error : place}</h1>
                                    </div>
                                </div>
                                {/* <div className='text-white flex'>
                                    {!user ? (
                                        <Link to={'/login'}>
                                            <button className='px-4 py-2 rounded-lg bg-purple-700 transition-opacity duration-300 hover:bg-purple-800'>Signup/Login</button>
                                        </Link>
                                    ) : (
                                        <button onClick={handleLogout} className='px-4 py-2 rounded-lg bg-purple-700 transition-opacity duration-300 hover:bg-purple-800'>Logout</button>
                                    )}
                                </div> */}

                            </div>
                        </div>
                        {/* <div
                            ref={menuRef}
                            className="menu-container overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ maxHeight: '0px', opacity: 0 }}
                        >
                            <Menus />
                        </div> */}

                        <Menus/>

                    </>
                )}

        </div>
    );
}

export default Header;

const Menus = () => {
    return (
        <ul className='flex mo:bg-gray-900 mo:border-2 opacity-90 border-purple-700 mo:rounded-3xl mo:fixed mo:left-1/2 mo:bottom-[1rem] mo:transform mo:-translate-x-1/2 mo:justify-evenly items-center justify-center gap-4 py-4 font-spartan text-lg text-white w-full mo:max-w-[90%]'>
            <Link to='/'>
                <div className='flex flex-col px-4 py-2 justify-center rounded-xl items-center hover:bg-purple-700'>
                    <svg className='w-8 h-8' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z" fill="#ffffff"></path> </g></svg>
                    <li className=' transition-opacity duration-300'>Home</li>
                </div>
            </Link>
            <Link to='/listing'>
                <div className='flex flex-col px-4 py-2 justify-center rounded-xl items-center hover:bg-purple-700'>
                    <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.5189 16.5013C16.6939 16.3648 16.8526 16.2061 17.1701 15.8886L21.1275 11.9312C21.2231 11.8356 21.1793 11.6708 21.0515 11.6264C20.5844 11.4644 19.9767 11.1601 19.4083 10.5917C18.8399 10.0233 18.5356 9.41561 18.3736 8.94849C18.3292 8.82066 18.1644 8.77687 18.0688 8.87254L14.1114 12.8299C13.7939 13.1474 13.6352 13.3061 13.4987 13.4811C13.3377 13.6876 13.1996 13.9109 13.087 14.1473C12.9915 14.3476 12.9205 14.5606 12.7786 14.9865L12.5951 15.5368L12.3034 16.4118L12.0299 17.2323C11.9601 17.4419 12.0146 17.6729 12.1708 17.8292C12.3271 17.9854 12.5581 18.0399 12.7677 17.9701L13.5882 17.6966L14.4632 17.4049L15.0135 17.2214L15.0136 17.2214C15.4394 17.0795 15.6524 17.0085 15.8527 16.913C16.0891 16.8004 16.3124 16.6623 16.5189 16.5013Z" fill="#ffffff"></path> <path d="M22.3665 10.6922C23.2112 9.84754 23.2112 8.47812 22.3665 7.63348C21.5219 6.78884 20.1525 6.78884 19.3078 7.63348L19.1806 7.76071C19.0578 7.88348 19.0022 8.05496 19.0329 8.22586C19.0522 8.33336 19.0879 8.49053 19.153 8.67807C19.2831 9.05314 19.5288 9.54549 19.9917 10.0083C20.4545 10.4712 20.9469 10.7169 21.3219 10.847C21.5095 10.9121 21.6666 10.9478 21.7741 10.9671C21.945 10.9978 22.1165 10.9422 22.2393 10.8194L22.3665 10.6922Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C20.9812 19.6756 20.9997 17.8316 21 14.1801L18.1817 16.9984C17.9119 17.2683 17.691 17.4894 17.4415 17.6841C17.1491 17.9121 16.8328 18.1076 16.4981 18.2671C16.2124 18.4032 15.9159 18.502 15.5538 18.6225L13.2421 19.3931C12.4935 19.6426 11.6682 19.4478 11.1102 18.8898C10.5523 18.3318 10.3574 17.5065 10.607 16.7579L10.8805 15.9375L11.3556 14.5121L11.3775 14.4463C11.4981 14.0842 11.5968 13.7876 11.7329 13.5019C11.8924 13.1672 12.0879 12.8509 12.316 12.5586C12.5106 12.309 12.7317 12.0881 13.0017 11.8183L17.0081 7.81188L18.12 6.70004L18.2472 6.57282C18.9626 5.85741 19.9003 5.49981 20.838 5.5C20.6867 4.46945 20.3941 3.73727 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 9C7.25 8.58579 7.58579 8.25 8 8.25H14.5C14.9142 8.25 15.25 8.58579 15.25 9C15.25 9.41421 14.9142 9.75 14.5 9.75H8C7.58579 9.75 7.25 9.41421 7.25 9ZM7.25 13C7.25 12.5858 7.58579 12.25 8 12.25H10.5C10.9142 12.25 11.25 12.5858 11.25 13C11.25 13.4142 10.9142 13.75 10.5 13.75H8C7.58579 13.75 7.25 13.4142 7.25 13ZM7.25 17C7.25 16.5858 7.58579 16.25 8 16.25H9.5C9.91421 16.25 10.25 16.5858 10.25 17C10.25 17.4142 9.91421 17.75 9.5 17.75H8C7.58579 17.75 7.25 17.4142 7.25 17Z" fill="#ffffff"></path> </g></svg>
                    <li className=' transition-opacity duration-300'>Free Listing</li>
                </div>
            </Link>
            <Link to={'/user'}>
                <div className='flex flex-col px-4 py-2 justify-center rounded-xl items-center hover:bg-purple-700'>
                    <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="#ffffff"></path> <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="#ffffff"></path> </g></svg>
                    <li className=' transition-opacity duration-300'>Profile</li>
                </div>
            </Link>
        </ul>
    );
};


const LoginHeader = () => {
    return (
        <>

            <div className='flex justify-center items-center px-6 py-4'>
                <div className='flex items-center gap-4'>

                    <svg className='w-12 h-12' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polygon points="10.96 17.68 7 9.76 1.38 21 22.55 21 16 6.58 10.96 17.68" fill="white" />
                        <circle cx="11" cy="6" r="3" fill="white" />
                    </svg>


                    <div className='font-bree text-white text-4xl'>Hire Arrive</div>

                </div>
            </div>
        </>
    )
}
