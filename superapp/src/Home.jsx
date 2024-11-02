import React from 'react';
import Lottie from 'lottie-react';
import welcomerose from './lottie/blue.json';
export default function Home() {
  return (
    <>
      <div className=" relative flex-1 bg-gradient-to-r from-[#09203F] to-[#537895] text-white flex flex-col justify-center items-center">
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
      </div>
    </>
  );
}
