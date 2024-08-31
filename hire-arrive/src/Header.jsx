import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [menu, setMenu] = useState(false);
    const [logorotate, setlogorotate] = useState(false);
    const menuRef = useRef(null);

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

    return (
            <div className="bg-gray-900 h-fit flex flex-col ">
                <div className='flex justify-center items-center px-6 py-4 lg:justify-between'>
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
                </div>
                <div
                    ref={menuRef}
                    className="menu-container overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: '0px', opacity: 0 }}
                >
                    <Menus />
                </div>
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
