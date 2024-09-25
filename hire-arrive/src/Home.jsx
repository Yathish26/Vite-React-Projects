import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


export default function Home() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  },[])

  return (
    <div className="min-h-screen bg-gray-100 flex items-center mo:items-start justify-center p-6">
      <div className="max-w-3xl bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">Welcome to Hire Arrive</h1>
        <p className="text-lg text-gray-700 mb-6">
          We help services reach the right customers near you, making it easier for people to connect with the services they need.
          Whether you're looking for a service or offering one, we are here to bridge that gap.
        </p>
        <p className="text-lg text-gray-700">
          If you want to register your own service, you can click on the{' '}
          <Link to="/listing" className="text-purple-700 font-semibold hover:underline">
            free listing
          </Link>{' '}
          option above to get started.
        </p>
      </div>
    </div>
  );
}
