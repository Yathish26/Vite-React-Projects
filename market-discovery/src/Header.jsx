import React from 'react';

export default function Header() {
  return (
    <header className= " bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Market Discovery</h1>
        
        <div className=" hidden md:flex space-x-4">
          <a href="#" className="hover:text-blue-200">Market Prices</a>
          <a href="#" className="hover:text-blue-200">Tools</a>
          <a href="#" className="hover:text-blue-200">More</a>
        </div>
      </div>
    </header>
  );
}
