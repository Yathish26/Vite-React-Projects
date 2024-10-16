import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import services from './categories';


export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* <div className="min-h-screen bg-gray-100 flex items-center mo:items-start justify-center p-6">
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
      </div> */}
      {/* -----------------------------Home Section Update------------------------------- */}

      {/* Search Bar */}
      <div className="flex items-center justify-center my-4">
        <div className="flex w-2/3 items-center border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-purple-700">
          <div className="px-3">
            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </div>
          <input
            type="text"
            placeholder="Search for services, e.g., plumber, electrician..."
            className="w-full p-4 pl-2 pr-16 focus:outline-none rounded-full"
          />
        </div>
      </div>


      {/* Categories Section */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 m-8">
        {Object.keys(services).map((service, index) => (
          <Link to={services[service].location} key={index}>
            <div className="p-6 flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer" key={index}>
              <img src={services[service].icon} alt={service} className="w-24 h-24 mx-auto mb-4 mo2:mb-0" />
              <h3 className="text-xl font-semibold mo2:hidden text-purple-700">
                {service}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
