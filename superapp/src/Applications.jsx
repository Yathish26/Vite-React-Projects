import React, { useEffect, useState } from 'react';
import Currency from './Currency';
import { Link, useLocation } from 'react-router-dom';
import Weight from './Weight';
import InstagramPostGenerator from './InstagramPostGenerator';
import AppUI from './AppUI';
import Text2speech from './Text2speech';
import TweetGenerator from './TweetGenerator';
import CaseConverter from './CaseConverter';
import QRgenerator from './QRgenerator';
import Bgremove from './Bgremove';
import Audiotrim from './Audiotrim';
import JsonMerger from './JsonMerger';
import apps from './Editable/Applist';

export default function Applications() {
    const [isUnitopen, setIsUnitopen] = useState(false);
    const [isSocialopen, setIsSocialopen] = useState(false);
    const [istextopen, setIsTextopen] = useState(false)
    const [isothertools, setIsOthertools] = useState(false)


    const location = useLocation();

    useEffect(() => {
        if (isUnitopen) {
            setIsSocialopen(false);
            setIsTextopen(false);
            setIsOthertools(false);
        }
    }, [isUnitopen]);

    useEffect(() => {
        if (isSocialopen) {
            setIsUnitopen(false);
            setIsTextopen(false);
            setIsOthertools(false);
        }
    }, [isSocialopen]);

    useEffect(() => {
        if (istextopen) {
            setIsUnitopen(false);
            setIsSocialopen(false);
            setIsOthertools(false);
        }
    }, [istextopen]);

    useEffect(() => {
        if (isothertools) {
            setIsUnitopen(false);
            setIsSocialopen(false);
            setIsTextopen(false);
        }
    }, [isothertools]);


    return (
        <>
            <div className='flex mo:flex-col flex-1'>
                <nav className="mo:gap-2 mo:flex-row mo:justify-center mo:w-screen mo:h-fit bg-black text-white w-72 top-0 left-0 flex flex-col p-4">
                    <div className="mb-8">
                        {/* Logo or Brand Name */}
                        <div className="mo:hidden text-2xl font-bold">
                            Apps
                        </div>
                    </div>

                    {/* Nav Links */}
                    <ul className="flex flex-col my-2 space-y-4">
                        <li className="flex flex-col mo:justify-center mo:items-center">
                            <div
                                className="flex items-center cursor-pointer justify-between mo:justify-start"
                                onClick={() => setIsUnitopen(!isUnitopen)}
                            >
                                <div className='flex'>
                                    <img className="w-6 h-6 mr-2" src="/apps/currency.svg" alt="Unit Converter" />
                                    <p className="mo:hidden hover:text-blue-300">Unit Converter Tools</p>
                                </div>

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
                                <ul className="r mt-4 ml-8 rounded mo:hidden  space-y-2 flex flex-col gap-2">
                                    {apps[0].subApps.map((app, id) => (
                                        <li key={id}>
                                            <Link to={`/apps/${app.link}`} className="hover:text-blue-300 flex gap-2 items-center">
                                                <img className='w-6 h-6' src={`/apps/${app.icon}.svg`} alt="" />
                                                <p className=''>{app.name}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                    {/* ------------------------------------------------------------------------------------------------------------------- */}
                    <ul className="flex flex-col my-2 space-y-4">
                        <li className="flex flex-col mo:justify-center mo:items-center">
                            <div
                                className="flex items-center cursor-pointer justify-between mo:justify-start"
                                onClick={() => setIsSocialopen(!isSocialopen)}
                            >
                                <div className='flex'>
                                    <img className="w-6 h-6 mr-2" src="/apps/socialmedia.svg" alt="Unit Converter" />
                                    <p className="mo:hidden hover:text-blue-300 ">Social Media Tools</p>
                                </div>

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
                                <ul className="r mt-4 ml-8 rounded mo:hidden space-y-2 flex flex-col gap-2">
                                    {apps[1].subApps.map((app, id) => (
                                        <li key={id}>
                                            <Link to={`/apps/${app.link}`} className="hover:text-blue-300 flex gap-2 items-center">
                                                <img className='w-6 h-6' src={`/apps/${app.icon}.svg`} alt="" />
                                                <p className=''>{app.name}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                    {/* ------------------------------------------------------------------- */}
                    <ul className="flex flex-col my-2 space-y-4">
                        <li className="flex flex-col">
                            <div
                                className="flex items-center cursor-pointer justify-between mo:justify-start"
                                onClick={() => setIsTextopen(!istextopen)}
                            >
                                <div className='flex'>
                                    <img className="w-6 h-6 mr-2" src="/apps/textconv.svg" alt="Unit Converter" />
                                    <p className="mo:hidden hover:text-blue-300 ">Text Converters</p>
                                </div>

                                <svg
                                    className={`w-4 h-4 ml-2 transition-transform duration-300 ease-in-out ${istextopen ? 'transform rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>



                            {istextopen && (
                                <ul className="r mt-4 ml-8 rounded mo:hidden space-y-2 flex flex-col gap-2">
                                    {apps[2].subApps.map((app, id) => (
                                        <li key={id}>
                                            <Link to={`/apps/${app.link}`} className="hover:text-blue-300 flex gap-2 items-center">
                                                <img className='w-6 h-6' src={`/apps/${app.icon}.svg`} alt="" />
                                                <p className=''>{app.name}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>
                    {/* ------------------------------------------------------------------- */}
                    <ul className="flex flex-col my-2 space-y-4">
                        <li className="flex flex-col">
                            <div
                                className="flex items-center cursor-pointer justify-between mo:justify-start"
                                onClick={() => setIsOthertools(!isothertools)}
                            >
                                <div className="flex items-center">
                                    <img className="w-6 h-6 mr-2" src="/icons/othertools.svg" alt="Unit Converter" />
                                    <p className="mo:hidden hover:text-blue-300 ">Other Tools</p>
                                </div>

                                <svg
                                    className={`w-4 h-4 ml-2 transition-transform duration-300 ease-in-out ${isothertools ? 'transform rotate-180' : ''
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>



                            {isothertools && (
                                <ul className="r mt-4 ml-8 rounded mo:hidden space-y-2 flex flex-col gap-2">
                                    {apps[3].subApps.map((app, id) => (
                                        <li key={id}>
                                            <Link to={`/apps/${app.link}`} className="hover:text-blue-300 flex gap-2 items-center">
                                                <img className='w-6 h-6' src={`/apps/${app.icon}.svg`} alt="" />
                                                <p className=''>{app.name}</p>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    </ul>

                </nav>
                {/* This Down options is for the Mobile Menu Responsive */}
                <div className='hidden mo:block' >
                    {isUnitopen && (
                        <ul className=" bg-black mo:items-center py-4 space-y-2 flex flex-col gap-2">
                            {apps[0].subApps.map((app, id) => (
                                <li key={id}>
                                    <Link to={`/apps/${app.link}`} className="hover:text-blue-300 flex gap-2 items-center">
                                        <img className='w-6 h-6' src={`/apps/${app.icon}.svg`} alt="" />
                                        <p className='text-white'>{app.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {isSocialopen && (
                        <ul className=" bg-black mo:items-center py-4 space-y-2 flex flex-col gap-2">
                            {apps[1].subApps.map((app, id) => (
                                <li key={id}>
                                    <Link to={`/apps/${app.link}`} className="hover:text-blue-300 flex gap-2 items-center">
                                        <img className='w-6 h-6' src={`/apps/${app.icon}.svg`} alt="" />
                                        <p className='text-white'>{app.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {istextopen && (
                        <ul className=" bg-black mo:items-center py-4 space-y-2 flex flex-col gap-2">
                            {apps[2].subApps.map((app, id) => (
                                <li key={id}>
                                    <Link to={`/apps/${app.link}`} className="hover:text-blue-300 flex gap-2 items-center">
                                        <img className='w-6 h-6' src={`/apps/${app.icon}.svg`} alt="" />
                                        <p className='text-white'>{app.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {isothertools && (
                        <ul className=" bg-black mo:items-center py-4 space-y-2 flex flex-col gap-2">
                            {apps[3].subApps.map((app, id) => (
                                <li key={id}>
                                    <Link to={`/apps/${app.link}`} className="hover:text-blue-300 flex gap-2 items-center">
                                        <img className='w-6 h-6' src={`/apps/${app.icon}.svg`} alt="" />
                                        <p className='text-white'>{app.name}</p>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                {location.pathname === "/apps" && <AppUI />}
                {location.pathname === "/apps/currencyconverter" && <Currency />}
                {location.pathname === "/apps/weightconverter" && <Weight />}
                {location.pathname === "/apps/instagram-post-generator" && <InstagramPostGenerator />}
                {location.pathname === '/apps/text-to-speech' && <Text2speech />}
                {location.pathname === '/apps/tweet-generator' && <TweetGenerator />}
                {location.pathname === '/apps/text-case-converter' && <CaseConverter />}
                {location.pathname === '/apps/qr-generator' && <QRgenerator />}
                {location.pathname === '/apps/image-bg-remove' && <Bgremove />}
                {location.pathname === '/apps/audio-trimmer' && <Audiotrim />}
                {location.pathname === '/apps/json-merger' && <JsonMerger />}
            </div>
        </>
    );
}
