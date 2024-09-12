import React, { useState } from 'react';
import Currency from './Currency';
import { Link, useLocation } from 'react-router-dom';
import Weight from './Weight';
import InstagramPostGenerator from './InstagramPostGenerator';
import AppUI from './AppUI';
import Text2speech from './Text2speech';

export default function Applications() {
    const [isUnitopen, setIsUnitopen] = useState(false);
    const [isSocialopen, setIsSocialopen] = useState(false);
    const location = useLocation();

    return (
        <>
            <div className='flex mo:flex-col'>
                <nav className=" mo:flex-row mo:w-screen mo:h-fit bg-black text-white w-72 h-screen top-0 left-0 flex flex-col p-4">
                    <div className="mb-8">
                        {/* Logo or Brand Name */}
                        <div className="mo:hidden text-2xl font-bold">
                            Apps
                        </div>
                    </div>

                    {/* Nav Links */}
                    <ul className="flex flex-col my-2 space-y-4">
                        <li className="flex flex-col">
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={()=>setIsUnitopen(!isUnitopen)}
                            >
                                <img className="w-6 h-6 mr-2" src="/apps/currency.svg" alt="Unit Converter" />
                                <p className="mo:hidden hover:text-blue-300">Unit Converter Tools</p>
                                <svg
                                    className={`w-4 h-4 ml-2 transition-transform duration-300 ease-in-out ${isUnitopen ? 'transform rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>



                            {isUnitopen && (
                                <ul className="r mt-4 ml-8 rounded  space-y-2 flex flex-col gap-2">
                                    <li>
                                        <Link to={'/apps/weightconverter'} className="hover:text-blue-300 flex gap-2 items-center">
                                            <img className='w-6 h-6' src="/apps/weight.svg" alt="" />
                                            <p className=''>Weight Converter</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/apps/currencyconverter'} className="hover:text-blue-300 flex gap-2">
                                            <img className='w-6 h-6' src="/apps/currency.svg" alt="" />
                                            <p className=''>Currency Converter</p>
                                        </Link>
                                    </li>
                                    {/* Add more submenu items here */}
                                </ul>
                            )}
                        </li>
                    </ul>
                    {/* ------------------------------------------------------------------------------------------------------------------- */}
                    <ul className="flex flex-col my-2 space-y-4">
                        <li className="flex flex-col">
                            <div
                                className="flex items-center cursor-pointer"
                                onClick={()=>setIsSocialopen(!isSocialopen)}
                            >
                                <img className="w-6 h-6 mr-2" src="/apps/socialmedia.svg" alt="Unit Converter" />
                                <p className="mo:hidden hover:text-blue-300 ">Social Media Tools</p>
                                <svg
                                    className={`w-4 h-4 ml-2 transition-transform duration-300 ease-in-out ${isSocialopen ? 'transform rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>



                            {isSocialopen && (
                                <ul className="r mt-4 ml-8 rounded  space-y-2 flex flex-col gap-2">
                                    <li>
                                        <Link to={'/apps/instagram-post-generator'} className="hover:text-blue-300 flex gap-2 items-center">
                                            <img className='w-6 h-6' src="/apps/insta.svg" alt="" />
                                            <p className=''>Instagram Post Generator</p>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/apps/text-to-speech'} className="hover:text-blue-300 flex gap-2">
                                            <img className='w-6 h-6' src="/apps/text2speech.svg" alt="" />
                                            <p className=''>Text to Speech</p>
                                        </Link>
                                    </li>
                                    {/* Add more submenu items here */}
                                </ul>
                            )}
                        </li>
                    </ul>

                </nav>
                {location.pathname === "/apps" && <AppUI/>}
                {location.pathname === "/apps/currencyconverter" && <Currency />}
                {location.pathname === "/apps/weightconverter" && <Weight />}
                {location.pathname === "/apps/instagram-post-generator" && <InstagramPostGenerator/>}
                {location.pathname === '/apps/text-to-speech' && <Text2speech/>}
            </div>
        </>
    );
}
