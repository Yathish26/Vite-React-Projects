import React, { useEffect } from 'react';

export default function Blog() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-gradient-to-b from-[#FFF2FF] to-[#F4DCFF] mo:bg-gradient-to-b mo:from-[#B069DD] mo:to-[#F4DCFF] font-spartan px-7  min-h-screen flex justify-center items-center">
            <div className='w-full h-full'>
                <div className='flex my-7 gap-5 mo:overflow-hidden mo:overflow-x-scroll hide-scrollbar mo:mr-[-25px]'>
                    <div className='w-fit h-fit py-2 px-4 flex justify-center items-center gap-[10px] rounded-3xl font-bold bg-white'>
                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.5425 7.54L13 13.0108L22.4575 7.54M13 23.92V13M22.75 17.3333V8.66666C22.7496 8.28671 22.6493 7.91354 22.4592 7.58459C22.269 7.25564 21.9957 6.98247 21.6667 6.7925L14.0833 2.45916C13.754 2.269 13.3803 2.16888 13 2.16888C12.6197 2.16888 12.246 2.269 11.9167 2.45916L4.33333 6.7925C4.00428 6.98247 3.73098 7.25564 3.54083 7.58459C3.35069 7.91354 3.25039 8.28671 3.25 8.66666V17.3333C3.25039 17.7133 3.35069 18.0865 3.54083 18.4154C3.73098 18.7444 4.00428 19.0175 4.33333 19.2075L11.9167 23.5408C12.246 23.731 12.6197 23.8311 13 23.8311C13.3803 23.8311 13.754 23.731 14.0833 23.5408L21.6667 19.2075C21.9957 19.0175 22.269 18.7444 22.4592 18.4154C22.6493 18.0865 22.7496 17.7133 22.75 17.3333Z" stroke="#1E1E1E" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className='text-xl'>Latest</div>
                    </div>

                    <div className='w-fit h-fit py-2 px-4 font-semibold rounded-3xl bg-white'>Finance</div>
                    <div className='w-fit h-fit py-2 px-4 font-semibold rounded-3xl bg-white'>Tech</div>
                    <div className='w-fit h-fit py-2 px-4 font-semibold rounded-3xl bg-white'>Education</div>
                    <div className='w-fit h-fit py-2 px-4 font-semibold rounded-3xl bg-white'>Travel</div>
                </div>
                <div className='flex justify-center items-center'>
                    <div className='mo:block hidden'>
                        <div className="relative max-w-xl ">
                            <input className=' w-full px-4 py-2 pr-12 rounded-3xl'
                                type="text"
                                placeholder="Search for Articles"
                            />
                            <svg className='absolute right-2 top-1 ' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.375 25.375L20.1188 20.1188M22.9583 13.2917C22.9583 18.6304 18.6304 22.9583 13.2917 22.9583C7.95291 22.9583 3.625 18.6304 3.625 13.2917C3.625 7.95291 7.95291 3.625 13.2917 3.625C18.6304 3.625 22.9583 7.95291 22.9583 13.2917Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>


                <svg className='my-7' width="145" height="26" viewBox="0 0 145 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="4" height="26" fill="#AE00F9" />
                    <rect x="6" width="139" height="26" fill="url(#paint0_linear_0_1)" />
                    <path d="M13.8217 17V7.54545H17.6072C18.3028 7.54545 18.8829 7.64856 19.3477 7.85476C19.8124 8.06096 20.1617 8.34718 20.3956 8.71342C20.6295 9.07659 20.7464 9.49515 20.7464 9.96911C20.7464 10.3384 20.6726 10.6631 20.5249 10.9432C20.3771 11.2202 20.174 11.4479 19.9155 11.6264C19.66 11.8018 19.3677 11.9265 19.0384 12.0004V12.0927C19.3984 12.1081 19.7354 12.2096 20.0494 12.3974C20.3664 12.5851 20.6233 12.8482 20.8203 13.1868C21.0173 13.5223 21.1158 13.9223 21.1158 14.3871C21.1158 14.8887 20.9911 15.3365 20.7418 15.7305C20.4956 16.1213 20.1309 16.4306 19.6477 16.6584C19.1645 16.8861 18.569 17 17.8612 17H13.8217ZM15.8207 15.3658H17.4503C18.0073 15.3658 18.4136 15.2596 18.669 15.0472C18.9245 14.8318 19.0522 14.5456 19.0522 14.1886C19.0522 13.927 18.9891 13.6961 18.8629 13.4961C18.7367 13.296 18.5567 13.1391 18.3228 13.0252C18.092 12.9113 17.8165 12.8544 17.4964 12.8544H15.8207V15.3658ZM15.8207 11.5018H17.3026C17.5765 11.5018 17.8196 11.4541 18.032 11.3587C18.2474 11.2602 18.4167 11.1217 18.5398 10.9432C18.666 10.7647 18.729 10.5508 18.729 10.3015C18.729 9.95987 18.6075 9.68442 18.3643 9.47514C18.1243 9.26586 17.7827 9.16122 17.3395 9.16122H15.8207V11.5018ZM22.4165 17V7.54545H28.7872V9.19354H24.4154V11.4464H28.4594V13.0945H24.4154V15.3519H28.8057V17H22.4165ZM35.5053 10.2646C35.4684 9.89216 35.3099 9.60286 35.0298 9.39666C34.7498 9.19046 34.3697 9.08736 33.8896 9.08736C33.5633 9.08736 33.2879 9.13352 33.0632 9.22585C32.8385 9.3151 32.6662 9.43975 32.5462 9.59979C32.4292 9.75982 32.3707 9.94141 32.3707 10.1445C32.3646 10.3138 32.4 10.4615 32.4769 10.5877C32.5569 10.7139 32.6662 10.8232 32.8047 10.9155C32.9432 11.0047 33.1032 11.0832 33.2848 11.1509C33.4664 11.2156 33.6603 11.271 33.8665 11.3171L34.7159 11.5202C35.1283 11.6126 35.5069 11.7357 35.8516 11.8896C36.1963 12.0434 36.4948 12.2327 36.7472 12.4574C36.9995 12.6821 37.195 12.9467 37.3335 13.2514C37.475 13.5561 37.5473 13.9054 37.5504 14.2994C37.5473 14.878 37.3996 15.3796 37.1072 15.8043C36.8179 16.226 36.3994 16.5537 35.8516 16.7876C35.3068 17.0185 34.6497 17.1339 33.8803 17.1339C33.1171 17.1339 32.4523 17.0169 31.886 16.783C31.3228 16.5491 30.8827 16.2029 30.5657 15.7443C30.2518 15.2827 30.0871 14.7118 30.0717 14.0316H32.006C32.0276 14.3486 32.1184 14.6133 32.2784 14.8256C32.4415 15.0349 32.6585 15.1934 32.9293 15.3011C33.2032 15.4058 33.5125 15.4581 33.8572 15.4581C34.1958 15.4581 34.4897 15.4089 34.739 15.3104C34.9914 15.2119 35.1868 15.0749 35.3253 14.8995C35.4638 14.7241 35.533 14.5225 35.533 14.2947C35.533 14.0824 35.4699 13.9039 35.3438 13.7592C35.2206 13.6146 35.0391 13.4915 34.799 13.3899C34.562 13.2884 34.2712 13.196 33.9265 13.1129L32.897 12.8544C32.0999 12.6605 31.4705 12.3574 31.0089 11.945C30.5472 11.5326 30.3179 10.977 30.321 10.2784C30.3179 9.70597 30.4703 9.20585 30.7781 8.77805C31.0889 8.35026 31.5152 8.01634 32.0568 7.77628C32.5985 7.53622 33.214 7.41619 33.9034 7.41619C34.6051 7.41619 35.2176 7.53622 35.7408 7.77628C36.267 8.01634 36.6764 8.35026 36.9688 8.77805C37.2611 9.20585 37.4119 9.70135 37.4212 10.2646H35.5053ZM38.5349 9.19354V7.54545H46.2998V9.19354H43.4053V17H41.4294V9.19354H38.5349ZM59.2756 12.2727C59.2756 13.3037 59.0801 14.1809 58.6893 14.9041C58.3015 15.6274 57.7721 16.1798 57.1012 16.5614C56.4334 16.94 55.6824 17.1293 54.8484 17.1293C54.0082 17.1293 53.2541 16.9384 52.5863 16.5568C51.9184 16.1752 51.3906 15.6228 51.0028 14.8995C50.6151 14.1763 50.4212 13.3007 50.4212 12.2727C50.4212 11.2417 50.6151 10.3646 51.0028 9.64134C51.3906 8.91809 51.9184 8.36719 52.5863 7.98864C53.2541 7.60701 54.0082 7.41619 54.8484 7.41619C55.6824 7.41619 56.4334 7.60701 57.1012 7.98864C57.7721 8.36719 58.3015 8.91809 58.6893 9.64134C59.0801 10.3646 59.2756 11.2417 59.2756 12.2727ZM57.2489 12.2727C57.2489 11.6049 57.1489 11.0417 56.9489 10.5831C56.7519 10.1245 56.4734 9.77675 56.1133 9.53977C55.7532 9.30279 55.3316 9.1843 54.8484 9.1843C54.3652 9.1843 53.9435 9.30279 53.5835 9.53977C53.2234 9.77675 52.9433 10.1245 52.7433 10.5831C52.5463 11.0417 52.4478 11.6049 52.4478 12.2727C52.4478 12.9406 52.5463 13.5038 52.7433 13.9624C52.9433 14.4209 53.2234 14.7687 53.5835 15.0057C53.9435 15.2427 54.3652 15.3612 54.8484 15.3612C55.3316 15.3612 55.7532 15.2427 56.1133 15.0057C56.4734 14.7687 56.7519 14.4209 56.9489 13.9624C57.1489 13.5038 57.2489 12.9406 57.2489 12.2727ZM60.7563 17V7.54545H67.0162V9.19354H62.7552V11.4464H66.6008V13.0945H62.7552V17H60.7563ZM71.0095 9.19354V7.54545H78.7744V9.19354H75.8799V17H73.904V9.19354H71.0095ZM80.0532 17V7.54545H82.0521V11.4464H86.11V7.54545H88.1043V17H86.11V13.0945H82.0521V17H80.0532ZM89.7524 17V7.54545H96.1231V9.19354H91.7513V11.4464H95.7954V13.0945H91.7513V15.3519H96.1416V17H89.7524ZM102.849 17L100.144 7.54545H102.328L103.893 14.1147H103.971L105.698 7.54545H107.567L109.289 14.1286H109.372L110.937 7.54545H113.121L110.416 17H108.468L106.667 10.8185H106.593L104.797 17H102.849ZM114.191 17V7.54545H120.562V9.19354H116.19V11.4464H120.234V13.0945H116.19V15.3519H120.58V17H114.191ZM122.151 17V7.54545H128.522V9.19354H124.15V11.4464H128.194V13.0945H124.15V15.3519H128.54V17H122.151ZM130.111 17V7.54545H132.11V11.7141H132.234L135.637 7.54545H138.033L134.524 11.7788L138.074 17H135.683L133.093 13.1129L132.11 14.3132V17H130.111Z" fill="black" />
                    <defs>
                        <linearGradient id="paint0_linear_0_1" x1="145" y1="15.5" x2="6" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stop-color="white" />
                            <stop offset="0.5" stop-color="#EAD8F2" />
                            <stop offset="1" stop-color="#C35CF7" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className='flex gap-2  items-center'>
                    <p className='text-sm font-semibold text-[#202EFC]'>Blockchain News</p>
                    <p className='text-sm font-semibold text-[#A0A1A8] mo:text-white'>•</p>
                    <p className='text-sm font-semibold text-[#A0A1A8] mo:text-white'>4 hours ago</p>
                </div>
                <div className="w-full max-w-[580px] h-auto mt-8 text-4xl font-semibold">
                    Top Analyst Unveils Ethereum Catalyst That Could Trigger Nearly 50% Surge for ETH - Here's His Outlook
                </div>

                <div className='flex gap-2 mt-7 font-semibold text-sm text-[#A0A1A8] mo:text-white items-center'>
                    <p>#Ethereum</p>
                    <p>#Cryptocurrency</p>
                </div>
                <button className='w-fit h-fit py-4 px-6 mt-7 bg-white rounded-3xl flex justify-center text-xl items-center gap-2 font-semibold '>
                    Read Article
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33331 7.99999H12.6666M12.6666 7.99999L7.99998 3.33333M12.6666 7.99999L7.99998 12.6667" stroke="#1E1E1E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                <div className='w-full h-full mt-20 mo:mt-16 grid gap-2 grid-cols-1 sm:grid-cols-2 bl:grid-cols-3'>
                    <div className=''>
                        <svg width="41" height="3" viewBox="0 0 41 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="41" height="3" rx="1.5" fill="#D9D9D9" />
                            <rect width="23" height="3" rx="1.5" fill="#434343" />
                        </svg>
                        <div className='flex gap-2 mt-4 items-center'>
                            <p className='text-sm font-semibold text-[#202EFC]'>Blockchain News</p>
                            <p className='text-sm font-semibold text-[#A0A1A8]'>•</p>
                            <p className='text-sm font-semibold text-[#A0A1A8]'>4 hours ago</p>
                        </div>
                        <div className='w-[259px] h-[80px] mt-4 text-base font-semibold'>Top Analyst Unveils Ethereum Catalyst That Could Trigger Nearly 50...</div>

                    </div>
                    <div className=''>
                        <svg width="41" height="3" viewBox="0 0 41 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="41" height="3" rx="1.5" fill="#D9D9D9" />
                            <rect width="23" height="3" rx="1.5" fill="#434343" />
                        </svg>
                        <div className='flex gap-2 mt-4 items-center'>
                            <p className='text-sm font-semibold text-[#202EFC]'>Blockchain News</p>
                            <p className='text-sm font-semibold text-[#A0A1A8]'>•</p>
                            <p className='text-sm font-semibold text-[#A0A1A8]'>4 hours ago</p>
                        </div>
                        <div className='w-[259px] h-[80px] mt-4 text-base font-semibold'>Top Analyst Unveils Ethereum Catalyst That Could Trigger Nearly 50...</div>

                    </div>
                    <div className=''>
                        <svg width="41" height="3" viewBox="0 0 41 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="41" height="3" rx="1.5" fill="#D9D9D9" />
                            <rect width="23" height="3" rx="1.5" fill="#434343" />
                        </svg>
                        <div className='flex gap-2 mt-4 items-center'>
                            <p className='text-sm font-semibold text-[#202EFC]'>Blockchain News</p>
                            <p className='text-sm font-semibold text-[#A0A1A8]'>•</p>
                            <p className='text-sm font-semibold text-[#A0A1A8]'>4 hours ago</p>
                        </div>
                        <div className='w-[259px] h-[80px] mt-4 text-base font-semibold'>Top Analyst Unveils Ethereum Catalyst That Could Trigger Nearly 50...</div>

                    </div>
                </div>

            </div>
            <div className='w-fit h-full mo:hidden bg-white rounded-3xl flex flex-col justify-center items-center'>
                <div className='w-96 h-10 rounded-xl m-4 bg-gray-200 flex justify-between px-4 items-center'>
                    <input className='bg-gray-200 focus:outline-none' placeholder='Article Search' ></input>
                    <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 20L15.8033 15.8033M18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18C14.6421 18 18 14.6421 18 10.5Z" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                </div>

                <div className='flex w-full justify-between p-4'>
                    <h1 className='text-xl font-semibold'>Recommended</h1>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-sm font-semibold'>View All</h1>
                        <svg className='w-3 h-3' fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xml:space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
                    </div>
                </div>
                <div className='w-96 h-28 m-4 bg-gray-400 rounded-2xl'></div>
                <div className='w-96 h-32 flex justify-between items-center '>
                    <div className='w-[212px] h-[85px] '>
                        <div className=' text-sm gap-2 flex  rounded-2xl'>
                            <h1 className='text-[#202EFC] text-sm font-semibold'>Blockchain News</h1>
                            <p className='text-gray-500'>•</p>
                            <p className='text-gray-500 font-semibold'>4 hours ago</p>
                        </div>
                        <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus official</p>
                    </div>
                    <div className='w-[89px] h-[85px] rounded-2xl bg-gray-400 '></div>
                </div>
                <div class="w-96 h-[1px] my-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
                <div className='w-96 h-32 flex justify-between items-center '>
                    <div className='w-[212px] h-[85px] '>
                        <div className=' text-sm gap-2 flex  rounded-2xl'>
                            <h1 className='text-[#202EFC] text-sm font-semibold'>Blockchain News</h1>
                            <p className='text-gray-500'>•</p>
                            <p className='text-gray-500 font-semibold'>4 hours ago</p>
                        </div>
                        <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus official</p>
                    </div>
                    <div className='w-[89px] h-[85px] rounded-2xl bg-gray-400 '></div>
                </div>
                <div class="w-96 h-[1px] my-1 bg-gradient-to-r from-transparent via-gray-800 to-transparent"></div>
                <div className='w-96 h-32 flex justify-between items-center '>
                    <div className='w-[212px] h-[85px] '>
                        <div className=' text-sm gap-2 flex  rounded-2xl'>
                            <h1 className='text-[#202EFC] text-sm font-semibold'>Blockchain News</h1>
                            <p className='text-gray-500'>•</p>
                            <p className='text-gray-500 font-semibold'>4 hours ago</p>
                        </div>
                        <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus official</p>
                    </div>
                    <div className='w-[89px] h-[85px] rounded-2xl bg-gray-400 '></div>
                </div>


            </div>
        </div>
    );
}
