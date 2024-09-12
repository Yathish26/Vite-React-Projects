import React from 'react';
import Lottie from 'lottie-react';
import welcomerose from './lottie/blue.json';
export default function Home() {
  return (
    <>
      <div className=" relative min-h-[87vh] bg-gradient-to-r from-[#09203F] to-[#537895] text-white flex flex-col justify-center items-center">
        <div className='absolute top-3' style={{ background: 'transparent', backgroundColor: 'transparent' }}>
          <Lottie className='w-72 bg-transparent' animationData={welcomerose} loop={false} autoplay={true} />
        </div>
        <h1 className="bg-gradient-to-r from-blue-800 via-blue-500 to-blue-200 bg-clip-text text-transparent text-4xl font-bold m-4 text-center">Welcome to Axios Zone</h1>
        <div className='flex gap-1 font-semibold text-xl m-4'>
          <p className='text-blue-400'>Hola,</p>
          <p className='text-blue-200'>I am Yathish</p>
        </div>
        <div className='flex justify-center items-center flex-col text-lg m-4 font-semibold lg:font-normal lg:m-0'>
          <p className='text-blue-200 text-center'>This is my Person Portfolio Project where i learn and update the things in here</p>
          <p className='text-blue-200 text-center'>You can check some of Apps Section on the Navbar for more Apps.</p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="bg-white m-4 bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">Weather Updates</h2>
            <p>Get real-time weather updates for any city. Stay informed about temperature, humidity, wind conditions, and more.</p>
            <a href="/weather" className="mt-4 inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out">Check Weather</a>
          </div>

          <div className="bg-white m-4 bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">To-Do List</h2>
            <p>Organize your tasks and boost your productivity. Create, manage, and track your daily to-do list with ease.</p>
            <a href="/todolist" className="mt-4 inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out">Manage Tasks</a>
          </div>

          <div className="bg-white m-4 bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">About this Project</h2>
            <p>This project was done as a practice project using: React, Tailwind CSS, Vite.</p>
            <a href="/more" className="mt-4 inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out">Discover More</a>
          </div>

          <div className="bg-white m-4 bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4">User Profile</h2>
            <p>Access your user profile to manage your settings and preferences within the app.</p>
            <a href="/profile" className="mt-4 inline-block bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out">View Profile</a>
          </div>
        </div> */}
      </div>
    </>
  );
}
