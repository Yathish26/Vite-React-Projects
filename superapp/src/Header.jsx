import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <div className='bg-black p-4 py-6 relative '>
      {/* Left Section */}
      <div className='float-left flex items-center gap-3'>
        <Link to={'/'}>
          <img className='animate-spin-slow' src="icons/mainlogo.svg" alt="Main Logo" />
        </Link>
        <div className='text-white text-4xl font-bona flex gap-2 items-center'>
          {props.title}
          <div className='prose max-w-none text-gray-300 text-2xl transition duration-300 ease-in-out'>
            {props.app}
          </div>
        </div>
      </div>

      {/* Center Section */}
      <ul className='absolute left-1/2 transform -translate-x-1/2 flex gap-8 '>
        <li><Link to={'/'}><img className='cursor-pointer p-2 transition ease-in-out duration-75 rounded hover:bg-slate-700' src="/icons/home.svg" alt="Home" /></Link></li>
        <li><Link to={'/weather'}><img className='cursor-pointer p-2 transition ease-in-out duration-75 rounded hover:bg-slate-700' src="icons/weather.svg" alt="Weather" /></Link></li>
        <li><Link to={'/todolist'}><img className='cursor-pointer p-2 transition ease-in-out duration-75 rounded hover:bg-slate-700' src="icons/todolist.svg" alt="Todo List" /></Link></li>
        <li><Link to={'/more'}><img className='cursor-pointer p-2 transition ease-in-out duration-75 rounded hover:bg-slate-700' src="icons/more.svg" alt="More" /></Link></li>
      </ul>

      {/* Right Section */}
      <div className='float-right'>
        <Link to={'/profile'}>
        <img className='p-2 hover:bg-slate-700 rounded' src="icons/user.svg" alt="User" />
        </Link>
      </div>

      {/* Clear Floats */}
      <div className='clear-both'></div>
    </div>
  )
}
