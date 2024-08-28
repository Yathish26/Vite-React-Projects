import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className='bg-black p-4 py-6 relative top-0 left-0 w-full z-50 flex flex-col lg:flex-row lg:items-center items-center'>

      {/* Left Section */}
      <div className='flex items-center gap-3 lg:flex-1'>
        <Link to={'/'}>
          <img className='animate-spin-slow' src="/icons/mainlogo.svg" alt="Main Logo" />
        </Link>
        <div className='text-white text-4xl font-bona flex gap-2 items-center'>
          {props.title}
          <div className='prose max-w-none text-gray-300 text-2xl transition duration-300 ease-in-out'>
            {props.app}
          </div>
        </div>
      </div>

      {/* Center and Right Section */}
      <div className='flex gap-2 sm:flex'>

        {/* Center Section */}
        <ul className='flex gap-8 mt-4 lg:mt-0 lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex-row'>
          <li><Link to={'/'}><img className='cursor-pointer p-2 transition ease-in-out duration-200 rounded hover:bg-slate-700' src="/icons/home.svg" alt="Home" /></Link></li>
          <li><Link to={'/weather'}><img className='cursor-pointer p-2 transition ease-in-out duration-200 rounded hover:bg-slate-700' src="/icons/weather.svg" alt="Weather" /></Link></li>
          <li><Link to={'/todolist'}><img className='cursor-pointer p-2 transition ease-in-out duration-200 rounded hover:bg-slate-700' src="/icons/todolist.svg" alt="Todo List" /></Link></li>
          <li><Link to={'/more'}><img className='cursor-pointer p-2 transition ease-in-out duration-200 rounded hover:bg-slate-700' src="/icons/more.svg" alt="More" /></Link></li>
        </ul>

        {/* Right Section */}
        <div className='mt-4 lg:mt-0 lg:flex-none lg:ml-auto'>
          <Link to={'/profile'}>
            <img className='p-2 hover:bg-slate-700 rounded' src="/icons/user.svg" alt="User" />
          </Link>
        </div>

      </div>

    </div>
  );
}
