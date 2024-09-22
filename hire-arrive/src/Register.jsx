import React from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Register</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-white text-sm font-semibold mb-1" htmlFor="name">Name</label>
            <input 
              id="name" 
              type="text" 
              placeholder="Enter your name" 
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-semibold mb-1" htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-semibold mb-1" htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 mt-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>
        <Link to={'/login'}>
        <p className='text-center text-gray-300 mt-3 hover:text-purple-700 cursor-pointer'>Already have an account? Sign In</p>
        </Link>
      </div>
    </div>
  );
}
