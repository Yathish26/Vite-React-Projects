import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../smallcomponents/Loading'; // Import your loading spinner

export default function Detailpage() {
    const { slug } = useParams(); // Get the slug from the URL
    const [constructorDetail, setConstructorDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); 

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchConstructorDetails = async () => {
            try {
                
                const response = await fetch(`https://hire-arrive-server.onrender.com/maxim26/data?Name=${slug}`); 
                if (!response.ok) throw new Error('Network response was not ok'); 

                const data = await response.json(); 
                
                
                if (data.length > 0) {
                    setConstructorDetail(data[0]);
                } else {
                    console.error('Constructor not found');
                    setError('No details found for this constructor.'); 
                }
                setLoading(false);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch data.'); 
                setLoading(false);
            }
        };

        fetchConstructorDetails();
    }, [slug]); 

    if (loading) {
        return <LoadingSpinner />; 
    }

    if (error) {
        return <div>{error}</div>; 
    }

    return (
        <div className="min-h-25 flex flex-col   text-black p-10">
            {/* Business Name */}
            <h1 className="text-3xl font-semibold mb-4">{constructorDetail.Name}</h1>

            {/* Location */}
            {constructorDetail.Location && (
                <div className='flex w-fit h-fit justify-center items-center mb-8'>
                    <svg className='w-5 h-5 mr-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M7 1.25C7.41421 1.25 7.75 1.58579 7.75 2V3.75H8C8.01496 3.75 8.02987 3.75 8.04475 3.75C8.47757 3.74995 8.8744 3.7499 9.19721 3.7933C9.55269 3.84109 9.92841 3.95354 10.2374 4.26256C10.5465 4.57159 10.6589 4.94731 10.7067 5.30279C10.7501 5.62561 10.7501 6.02244 10.75 6.45526C10.75 6.47013 10.75 6.48504 10.75 6.5V7.88206C10.8169 7.93503 10.8818 7.99268 10.9445 8.05546C11.4 8.51093 11.5857 9.07773 11.6701 9.70552C11.7284 10.139 11.7442 10.6545 11.7484 11.25H12.25L12.25 7.71C12.25 6.45165 12.2499 5.42299 12.3656 4.6381C12.4856 3.82422 12.7528 3.09753 13.4336 2.62571C14.1145 2.15388 14.8887 2.15884 15.6929 2.33231C16.4684 2.49959 17.4316 2.8608 18.6098 3.30267L18.7057 3.33862C19.3012 3.56191 19.8051 3.75085 20.2009 3.95182C20.6219 4.16555 20.9859 4.42361 21.2603 4.81961C21.5347 5.21562 21.6486 5.647 21.7009 6.11624C21.75 6.55746 21.75 7.0956 21.75 7.73158V21.25H22C22.4142 21.25 22.75 21.5858 22.75 22C22.75 22.4142 22.4142 22.75 22 22.75H2C1.58579 22.75 1.25 22.4142 1.25 22C1.25 21.5858 1.58579 21.25 2 21.25H2.25L2.25 11.948C2.24997 11.0495 2.24994 10.3003 2.32991 9.70552C2.41432 9.07773 2.59999 8.51093 3.05546 8.05546C3.11823 7.99268 3.18313 7.93503 3.25 7.88206V6.5C3.25 6.48504 3.25 6.47013 3.25 6.45525C3.24995 6.02243 3.2499 5.6256 3.2933 5.30279C3.34109 4.94731 3.45354 4.57159 3.76256 4.26256C4.07159 3.95354 4.44731 3.84109 4.80279 3.7933C5.1256 3.7499 5.52243 3.74995 5.95525 3.75C5.97012 3.75 5.98504 3.75 6 3.75H6.25V2C6.25 1.58579 6.58579 1.25 7 1.25ZM4.75 7.32412C5.33751 7.24995 6.07178 7.24997 6.94801 7.25H7.05199C7.92822 7.24997 8.66249 7.24995 9.25 7.32412V6.5C9.25 6.00739 9.24841 5.71339 9.22008 5.50266C9.20709 5.40611 9.1918 5.35774 9.18284 5.33596C9.18077 5.33092 9.17915 5.3276 9.17814 5.32567L9.17676 5.32324L9.17433 5.32186C9.1724 5.32085 9.16908 5.31923 9.16404 5.31716C9.14226 5.3082 9.09389 5.29291 8.99734 5.27992C8.78661 5.25159 8.49261 5.25 8 5.25H6C5.50739 5.25 5.21339 5.25159 5.00266 5.27992C4.90611 5.29291 4.85774 5.3082 4.83596 5.31716C4.83092 5.31923 4.8276 5.32085 4.82567 5.32186L4.82324 5.32324L4.82186 5.32567C4.82085 5.3276 4.81923 5.33092 4.81716 5.33596C4.8082 5.35774 4.79291 5.40611 4.77992 5.50266C4.75159 5.71339 4.75 6.00739 4.75 6.5V7.32412ZM3.75 21.25H6.25L6.25 15.948C6.24997 15.0495 6.24995 14.3003 6.32991 13.7055C6.41432 13.0777 6.59999 12.5109 7.05546 12.0555C7.51093 11.6 8.07773 11.4143 8.70552 11.3299C9.13855 11.2717 9.65344 11.2559 10.2482 11.2516C10.244 10.6814 10.23 10.2512 10.1835 9.90539C10.1214 9.44393 10.0142 9.24643 9.88388 9.11612C9.75357 8.9858 9.55607 8.87858 9.09461 8.81654C8.61157 8.75159 7.96401 8.75 7 8.75C6.03599 8.75 5.38843 8.75159 4.90539 8.81654C4.44393 8.87858 4.24643 8.9858 4.11612 9.11612C3.9858 9.24643 3.87858 9.44393 3.81654 9.90539C3.75159 10.3884 3.75 11.036 3.75 12V21.25ZM7.75 21.25H16.25V16C16.25 15.036 16.2484 14.3884 16.1835 13.9054C16.1214 13.4439 16.0142 13.2464 15.8839 13.1161C15.7536 12.9858 15.5561 12.8786 15.0946 12.8165C14.6116 12.7516 13.964 12.75 13 12.75H11C10.036 12.75 9.38843 12.7516 8.90539 12.8165C8.44393 12.8786 8.24643 12.9858 8.11612 13.1161C7.9858 13.2464 7.87858 13.4439 7.81654 13.9054C7.75159 14.3884 7.75 15.036 7.75 16V21.25ZM17.75 21.25H20.25V7.772C20.25 7.08479 20.2489 6.63075 20.2101 6.28238C20.1734 5.95272 20.1091 5.79193 20.0274 5.67401C19.9457 5.55609 19.8177 5.43949 19.5219 5.28934C19.2094 5.13066 18.7846 4.97023 18.1412 4.72893C16.8906 4.25997 16.0312 3.93978 15.3766 3.79858C14.7379 3.66082 14.468 3.73388 14.288 3.85859C14.108 3.98331 13.9448 4.21044 13.8496 4.8568C13.752 5.5193 13.75 6.43639 13.75 7.772V11.2516C14.3455 11.2558 14.861 11.2716 15.2945 11.3299C15.9223 11.4143 16.4891 11.6 16.9445 12.0555C17.4 12.5109 17.5857 13.0777 17.6701 13.7055C17.7501 14.3003 17.75 15.0495 17.75 15.948L17.75 21.25ZM4.82324 5.32324C4.82357 5.32297 4.82364 5.32283 4.82324 5.32324C4.82278 5.32369 4.82296 5.32358 4.82324 5.32324ZM9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H14C14.4142 14.25 14.75 14.5858 14.75 15C14.75 15.4142 14.4142 15.75 14 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15ZM9.25 18C9.25 17.5858 9.58579 17.25 10 17.25H14C14.4142 17.25 14.75 17.5858 14.75 18C14.75 18.4142 14.4142 18.75 14 18.75H10C9.58579 18.75 9.25 18.4142 9.25 18Z" fill="#000000"></path> </g></svg>
                    <p className="text-xl text-black ">{constructorDetail.Location}</p>
                </div>
                
            )}

            {/* Call and WhatsApp Section */}
            <div className="flex items-center mb-6 space-x-4">
                {/* Call Button */}
                <a
                    href={`tel:${constructorDetail.Contact.split(',')[0]}`}
                    className="flex items-center px-4 py-2 border-2 border-green-400 rounded-lg hover:bg-green-500 transition-colors"
                >
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#1C274C"></path> </g></svg>
                    <span className="text-lg font-semibold">Call</span>
                </a>

                {/* WhatsApp Button */}
                <a
                    href={`https://wa.me/${constructorDetail.Contact.split(',')[0]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border-2 border-green-400 rounded-lg hover:bg-green-500 transition-colors"
                >
                    <svg className='w-6 h-6 mr-2' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z" fill="#BFC8D0"></path> <path d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" fill="url(#paint0_linear_87_7264)"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z" fill="white"></path> <path d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7264" x1="26.5" y1="7" x2="4" y2="28" gradientUnits="userSpaceOnUse"> <stop stop-color="#5BD066"></stop> <stop offset="1" stop-color="#27B43E"></stop> </linearGradient> </defs> </g></svg>
                    <span className="text-lg font-semibold">WhatsApp</span>
                </a>
            </div>

            {/* Address Section */}
            {constructorDetail.Address && (
                <div className="text-xl mb-6">
                    <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(constructorDetail.Address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white"
                    >
                        <div className="flex items-center">
                        <svg className='w-6 h-6 mr-2' viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 9.24 18.76 7 16 7C13.24 7 11 9.24 11 12C11 14.76 13.24 17 16 17C18.76 17 21 14.76 21 12ZM16 1C22.08 1 27 5.92 27 12C27 21 16 31 16 31C16 31 5 21 5 12C5 5.92 9.92 1 16 1Z" fill="#FFC44D"></path> <path d="M19 28C23 24 27 17.447 27 12C27 5.925 22.075 1 16 1C9.925 1 5 5.925 5 12C5 21 16 31 16 31M5 31H27M21 12C21 9.238 18.762 7 16 7C13.238 7 11 9.238 11 12C11 14.762 13.238 17 16 17C18.762 17 21 14.762 21 12Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                            <span className='text-black'>{constructorDetail.Address}</span>
                        </div>
                    </a>
                </div>
            )}
        </div>

    );
}
