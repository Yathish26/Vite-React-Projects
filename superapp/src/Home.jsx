import React from 'react';

export default function Home() {
  return (
    <>
      <div className=" min-h-screen bg-gradient-to-r from-blue-800 to-blue-500 text-white flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-8 m-4">Welcome to Axios Zone</h1>
        <p className="text-lg mb-6 max-w-xl text-center m-4">
          <b>Hola</b>, I am Yathish This is my Person Portfolio Project where i learn and update the things in here You can check some of these apps below or go through the Apps Section on the Navbar for more Apps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
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
        </div>
      </div>
    </>
  );
}
