import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  const title = 'Playwin Bet'
  document.title = title

  return (
    <header className="bg-gray-900 text-white py-4 px-6 relative">
      <div className="container mx-auto flex justify-between items-center">
        <div className='flex items-center gap-4'>
          <Link to={'/'}>
            <img src="/icons/dice.svg" alt="Dice" />
          </Link>
          {/* Site Name */}
          <div className="text-3xl font-bold text-green-500">
            Playwin Bet
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-6">
          <a href="/" className="hover:text-green-300">Home</a>
          <Link to={'/sports'}>Sports</Link>
          <a href="/contact" className="hover:text-green-300">Contact</a>
          <a href="/faq" className="hover:text-green-300">FAQ</a>
          <a href="/dice" className="hover:text-green-300">Dice</a>
        </nav>

        {/* Login/Signup Button */}
        <div className="md:hidden block">
          <a href="/login" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 block w-full text-center">
            Login / Sign Up
          </a>
        </div>
        <div className="hidden md:block">
          <a href="/login" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">
            Login / Sign Up
          </a>
        </div>
      </div>
    </header>
  )
}
