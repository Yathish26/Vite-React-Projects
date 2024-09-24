import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header() {
    const [menu, setMenu] = useState(false);
    const [logorotate, setlogorotate] = useState(false);
    const menuRef = useRef(null);
    const [location, setLocation] = useState({ lat: null, lon: null });
    const [error, setError] = useState(null);
    const [place, setPlace] = useState('');
    const [user, setUser] = useState(null);

    const navigate = useNavigate();


    const url = useLocation()

    const login = url.pathname === '/login' || url.pathname === '/register';

    // Fetch the reverse geocode based on the user's coordinates
    useEffect(() => {
        if (location.lat && location.lon) {
            fetch(`https://api.geoapify.com/v1/geocode/reverse?lat=${location.lat}&lon=${location.lon}&apiKey=4626726a7987421297b4a38a4a88cf6c`)
                .then(response => response.json())
                .then(result => {
                    if (result.features && result.features.length > 0) {
                        setPlace(result.features[0].properties.city || 'Unknown location');
                    }
                })
                .catch(error => console.log('Error fetching location:', error));
        }
    }, [location]);

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
                }
            );
        } else {
            setError('Geolocation is not supported by your browser');
        }
    }, []);

    const toggleMenu = () => {
        setMenu(!menu);
        setlogorotate(!logorotate);
    };

    useEffect(() => {
        if (menu && menuRef.current) {
            menuRef.current.style.maxHeight = `${menuRef.current.scrollHeight}px`;
            menuRef.current.style.opacity = '1';
        } else if (menuRef.current) {
            menuRef.current.style.maxHeight = '0px';
            menuRef.current.style.opacity = '0';
        }
    }, [menu]);


    

    useEffect(() => {
        // Fetch user data (replace with your API endpoint)
        const fetchUserData = async () => {
            const token = localStorage.getItem('token');



            try {
                const response = await fetch('http://localhost:5000/api/auth/user', {
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
                                    <svg className='w-12 h-12' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <polygon points="10.96 17.68 7 9.76 1.38 21 22.55 21 16 6.58 10.96 17.68" fill="white" />
                                        <circle cx="11" cy="6" r="3" fill="white" />
                                    </svg>
                                </Link>
                                <Link to={"/"}>
                                    <div className='font-bree text-white text-4xl'>Hire Arrive</div>
                                </Link>
                                <svg
                                    onClick={toggleMenu}
                                    className={`w-6 h-6 fill-purple-400 transition-transform duration-300 ${logorotate ? 'rotate-180' : ''}`}
                                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M21,21H3L12,3Z" />
                                </svg>
                            </div>
                            <div className='flex items-center gap-4 '>
                                <div className='flex items-center'>
                                    <svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="#ffffff"></path> </g></svg>
                                    <div className='text-white'>
                                        <h1>{error ? error : place}</h1>
                                    </div>
                                </div>
                                <div className='text-white flex'>
                                    {!user ? (
                                        <Link to={'/login'}>
                                            <button className='px-4 py-2 rounded-lg bg-purple-700 transition-opacity duration-300 hover:bg-purple-800'>Signup/Login</button>
                                        </Link>
                                    ) : (
                                        <button onClick={handleLogout} className='px-4 py-2 rounded-lg bg-purple-700 transition-opacity duration-300 hover:bg-purple-800'>Logout</button>
                                    )}
                                </div>
                                <Link to={'/user'}>
                                    <svg className='w-12 h-12' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 6.49 17.51 2 12 2C6.49 2 2 6.49 2 12C2 14.9 3.25 17.51 5.23 19.34C5.23 19.35 5.23 19.35 5.22 19.36C5.32 19.46 5.44 19.54 5.54 19.63C5.6 19.68 5.65 19.73 5.71 19.77C5.89 19.92 6.09 20.06 6.28 20.2C6.35 20.25 6.41 20.29 6.48 20.34C6.67 20.47 6.87 20.59 7.08 20.7C7.15 20.74 7.23 20.79 7.3 20.83C7.5 20.94 7.71 21.04 7.93 21.13C8.01 21.17 8.09 21.21 8.17 21.24C8.39 21.33 8.61 21.41 8.83 21.48C8.91 21.51 8.99 21.54 9.07 21.56C9.31 21.63 9.55 21.69 9.79 21.75C9.86 21.77 9.93 21.79 10.01 21.8C10.29 21.86 10.57 21.9 10.86 21.93C10.9 21.93 10.94 21.94 10.98 21.95C11.32 21.98 11.66 22 12 22C12.34 22 12.68 21.98 13.01 21.95C13.05 21.95 13.09 21.94 13.13 21.93C13.42 21.9 13.7 21.86 13.98 21.8C14.05 21.79 14.12 21.76 14.2 21.75C14.44 21.69 14.69 21.64 14.92 21.56C15 21.53 15.08 21.5 15.16 21.48C15.38 21.4 15.61 21.33 15.82 21.24C15.9 21.21 15.98 21.17 16.06 21.13C16.27 21.04 16.48 20.94 16.69 20.83C16.77 20.79 16.84 20.74 16.91 20.7C17.11 20.58 17.31 20.47 17.51 20.34C17.58 20.3 17.64 20.25 17.71 20.2C17.91 20.06 18.1 19.92 18.28 19.77C18.34 19.72 18.39 19.67 18.45 19.63C18.56 19.54 18.67 19.45 18.77 19.36C18.77 19.35 18.77 19.35 18.76 19.34C20.75 17.51 22 14.9 22 12ZM16.94 16.97C14.23 15.15 9.79 15.15 7.06 16.97C6.62 17.26 6.26 17.6 5.96 17.97C4.44 16.43 3.5 14.32 3.5 12C3.5 7.31 7.31 3.5 12 3.5C16.69 3.5 20.5 7.31 20.5 12C20.5 14.32 19.56 16.43 18.04 17.97C17.75 17.6 17.38 17.26 16.94 16.97Z" fill="#ffffff"></path> <path d="M12 6.92969C9.93 6.92969 8.25 8.60969 8.25 10.6797C8.25 12.7097 9.84 14.3597 11.95 14.4197C11.98 14.4197 12.02 14.4197 12.04 14.4197C12.06 14.4197 12.09 14.4197 12.11 14.4197C12.12 14.4197 12.13 14.4197 12.13 14.4197C14.15 14.3497 15.74 12.7097 15.75 10.6797C15.75 8.60969 14.07 6.92969 12 6.92969Z" fill="#ffffff"></path> </g></svg>
                                </Link>
                            </div>
                        </div>
                        <div
                            ref={menuRef}
                            className="menu-container overflow-hidden transition-all duration-300 ease-in-out"
                            style={{ maxHeight: '0px', opacity: 0 }}
                        >
                            <Menus />
                        </div>
                    </>
                )}

        </div>
    );
}

export default Header;

const Menus = () => {
    return (
        <ul className='flex justify-center gap-10 py-4 font-spartan text-lg text-white'>
            <Link to='/'><li className='px-4 py-2 rounded-lg hover:bg-purple-700 transition-opacity duration-300'>Home</li></Link>
            <Link to='/listing'><li className='px-4 py-2 rounded-lg hover:bg-purple-700 transition-opacity duration-300'>Free Listing</li></Link>
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
