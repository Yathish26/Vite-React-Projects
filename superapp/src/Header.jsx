import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  const [appProp, setAppProp] = useState(props.app);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const fadeOut = () => {
      document.getElementById('appProp').classList.add('fade-out');
      setTimeout(() => {
        setAppProp(props.app);
        document.getElementById('appProp').classList.remove('fade-out');
      }, 300);
    };

    fadeOut();
  }, [props.app]);


  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
      <div className='bg-black p-4 py-6 relative top-0 left-0 w-full z-50 flex flex-col lg:flex-row lg:items-center items-center '>
        {/* Left Section */}
        <div className='flex items-center gap-3 lg:flex-1'>
          <Link to={'/'}>
            <img className='animate-spin-slow' src="/icons/mainlogo.svg" alt="Main Logo" />
          </Link>
          <div className='text-white text-4xl font-bona flex gap-2 items-center'>
            {props.title}
            <div
              id='appProp'
              className='font-cursive text-gray-300 text-2xl transition-opacity duration-300 ease-in-out'
            >
              {appProp}
            </div>
          </div>
        </div>

        {/* Center and Right Section */}
        <div className='flex gap-2 sm:flex'>
          {/* Center Section */}
          <ul className='flex gap-8 mt-4 lg:mt-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex-row'>
            <li>
              <Link to={'/'}>
                <img className='cursor-pointer p-2 transition ease-in-out duration-200 rounded hover:bg-slate-700' src="/icons/home.svg" alt="Home" />
              </Link>
            </li>
            <li>
              <Link to={'/weather'}>
                <img className='cursor-pointer p-2 transition ease-in-out duration-200 rounded hover:bg-slate-700' src="/icons/weather.svg" alt="Weather" />
              </Link>
            </li>

            {/* -------------------------Apps Section------------------------- */}
            <li className='relative group'>
              <img className='cursor-pointer p-2 transition ease-in-out duration-200 rounded hover:bg-slate-700' src="/icons/apps.svg" alt="Apps" />
              {/* Dropdown Menu */}
              <div className='absolute left-0 w-48 bg-black text-white rounded-lg shadow-lg menu'>
                <Link to={'/todolist'} className='flex items-center p-3'>
                  <img className='w-6 h-6 mr-2' src="/icons/todolist.svg" alt="Todo List" />
                  Todo List
                </Link>
                <Link to={'/photoeditor'} className='flex items-center p-3'>
                  <img className='w-6 h-6 mr-2' src="/icons/photoeditor.svg" alt="Photo Editor" />
                  Photo Editor
                </Link>
                <Link to={'/passwordgenerator'} className='flex items-center p-3'>
                  <img className='w-6 h-6 mr-2' src="/icons/passwordgenerator.svg" alt="Password Generator" />
                  Password Generator
                </Link>
              </div>
            </li>
            {/* -------------------------Apps Section Close------------------------- */}
            <li>
              <Link to={'/more'}>
                <img className='cursor-pointer p-2 transition ease-in-out duration-200 rounded hover:bg-slate-700' src="/icons/more.svg" alt="More" />
              </Link>
            </li>
          </ul>

          {/* Right Section */}
          <div className=' flex items-center gap-4 mt-4 lg:mt-0 lg:flex-none lg:ml-auto'>
            {/* Dark Mode Switch */}
            <label className="switch relative">
              <input type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
              <span className="slider"></span>
            </label>
            <Link to={'/profile'}>
              <img className='p-2 hover:bg-slate-700 rounded' src="/icons/user.svg" alt="User" />
            </Link>
          </div>
        </div>
      </div>
  );
}
