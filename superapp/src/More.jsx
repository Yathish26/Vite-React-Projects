import React from 'react';

export default function More() {
  return (
    <div className="mo:justify-start min-h-screen bg-gradient-to-tr from-blue-800 to-blue-500 text-white flex flex-col justify-center items-center p-8">
      <div className=" mo:mt-12 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-4 text-center">About This Project</h1>
        <p className="text-lg mb-6 text-center">
          This project was done as a practice project using:
        </p>
        <ul className="flex flex-col items-center py-2">
          <li className="flex items-center gap-2 font-semibold mb-2">
            React <img src="icons/react.svg" alt="React" className="w-6 h-6" />
          </li>
          <li className="flex items-center gap-2 font-semibold mb-2">
            Tailwind CSS <img src="icons/tailwind.svg" alt="Tailwind CSS" className="w-6 h-6" />
          </li>
          <li className="flex items-center gap-2 font-semibold mb-2">
            Vite <img src="icons/vite.svg" alt="Vite" className="w-6 h-6" />
          </li>
        </ul>
        <div className="flex flex-col items-center mt-4">
          <p className="text-center mb-4">The source code can be found in this repository ⤶</p>
          <a
            href="https://github.com/Yathish26/Vite-React-Projects/tree/main/superapp"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out"
          >
            Github <img src="icons/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
          <div className="pt-4 font-bold text-center">
            ✦•┈๑⋅⋯ The project was started on 26/08/2024 ⋯⋅๑┈•✦
          </div>
        </div>
      </div>
    </div>
  );
}
