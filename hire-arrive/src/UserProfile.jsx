import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from './smallcomponents/Loading.jsx';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [showContact, setShowContact] = useState(false); // To toggle phone number visibility
  const [loading, setLoading] = useState(true); // Loading state

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      try {
        const response = await fetch('https://hire-arrive-server.onrender.com/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        setUser(data); // Assuming the response has the user object
      } catch (error) {
        console.error('Error fetching user data:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/login');
  };



  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center pb-48 justify-center">
        <div className="text-center">
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="10" r="3" fill="#ffffff"></circle>
              <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="1.2"></circle>
              <path d="M17.8719 18.8083C17.9489 18.7468 17.9799 18.6436 17.9452 18.5513C17.5693 17.5518 16.8134 16.6706 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.18663 16.6706 6.43066 17.5518 6.05477 18.5513C6.02009 18.6436 6.05115 18.7468 6.12813 18.8083C9.56196 21.552 14.438 21.552 17.8719 18.8083Z" fill="#2A4157" fillOpacity="0.24" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round"></path>
            </g>
          </svg>
          <p className="text-white text-lg mb-4">Sign In to see the User Profile</p>
          <Link
            to="/login"
            className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-800 transition duration-300"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  const handleShowContact = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="flex-1 bg-gray-900 flex flex-col items-center justify-center">
      {/* -----------------Mobile View---------------- */}
      <div className='hidden mo:block'>
        <div className='flex flex-col mt-8 items-center justify-center'>
          <div className='w-48 h-48 mb-4 bg-gray-700 rounded-full flex justify-center items-center border-4 border-purple-700'>
            {user.profileImage ? (
              <img src={user.profileImage} className="w-36 h-36 rounded-full" alt="Profile Image" />
            ) : (
              <svg className="w-36 h-36 rounded-full border-4 border-purple-700 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#ffffff"></path> <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#ffffff"></path> <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#ffffff"></path> </g></svg>
            )}
          </div>
          <div className='text-white font-bold text-4xl m-4 mb-2'>{user.name}</div>
          <div className='w-fit px-4 h-[34px] gap-1 bg-[#452A5C] border-2 border-purple-700 rounded-3xl flex justify-center items-center m-4 mt-2'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_7_169)">
                <path d="M14 0H0V14H14V0Z" stroke="white" strokeWidth="0.00048" />
                <path d="M6.99999 2.24584L8.54582 4.66667H5.42499L6.99999 2.24584ZM6.99999 0.583337C6.89978 0.587637 6.80216 0.616483 6.7157 0.667339C6.62925 0.718195 6.5566 0.789505 6.50415 0.875003L3.84999 4.95834C3.80607 5.0493 3.78326 5.149 3.78326 5.25C3.78326 5.35101 3.80607 5.45071 3.84999 5.54167C3.89803 5.63101 3.96966 5.70545 4.0571 5.75688C4.14453 5.80831 4.2444 5.83476 4.34582 5.83334H9.62499C9.7252 5.82904 9.82282 5.80019 9.90928 5.74934C9.99573 5.69848 10.0684 5.62717 10.1208 5.54167C10.1785 5.45534 10.2093 5.35384 10.2093 5.25C10.2093 5.14617 10.1785 5.04467 10.1208 4.95834L7.49582 0.875003C7.44778 0.785664 7.37615 0.711224 7.28871 0.659794C7.20128 0.608364 7.10141 0.581918 6.99999 0.583337Z" fill="white" stroke="white" strokeWidth="0.00048" />
                <path d="M12.5417 12.5417H8.45833C8.30362 12.5417 8.15525 12.4802 8.04585 12.3708C7.93646 12.2614 7.875 12.113 7.875 11.9583V7.87501C7.875 7.7203 7.93646 7.57192 8.04585 7.46253C8.15525 7.35313 8.30362 7.29167 8.45833 7.29167H12.5417C12.6964 7.29167 12.8447 7.35313 12.9541 7.46253C13.0635 7.57192 13.125 7.7203 13.125 7.87501V11.9583C13.125 12.113 13.0635 12.2614 12.9541 12.3708C12.8447 12.4802 12.6964 12.5417 12.5417 12.5417ZM9.04167 11.375H11.9583V8.45834H9.04167V11.375Z" fill="white" stroke="white" strokeWidth="0.00048" />
                <path d="M3.79167 8.16667C4.13779 8.16667 4.47613 8.2693 4.76392 8.46159C5.0517 8.65389 5.276 8.9272 5.40846 9.24697C5.54091 9.56674 5.57557 9.91861 5.50804 10.2581C5.44052 10.5975 5.27385 10.9094 5.02911 11.1541C4.78436 11.3988 4.47254 11.5655 4.13308 11.633C3.79361 11.7006 3.44174 11.6659 3.12197 11.5335C2.8022 11.401 2.52889 11.1767 2.3366 10.8889C2.1443 10.6011 2.04167 10.2628 2.04167 9.91667C2.04167 9.45254 2.22604 9.00742 2.55423 8.67923C2.88242 8.35104 3.32754 8.16667 3.79167 8.16667ZM3.79167 7C3.21481 7 2.6509 7.17106 2.17125 7.49155C1.69161 7.81203 1.31777 8.26756 1.09702 8.80051C0.876264 9.33346 0.818504 9.9199 0.931044 10.4857C1.04358 11.0515 1.32137 11.5712 1.72927 11.9791C2.13718 12.387 2.65688 12.6648 3.22265 12.7773C3.78843 12.8898 4.37488 12.8321 4.90783 12.6113C5.44078 12.3906 5.8963 12.0167 6.21679 11.5371C6.53727 11.0574 6.70833 10.4935 6.70833 9.91667C6.70833 9.53364 6.63289 9.15437 6.48632 8.80051C6.33974 8.44664 6.1249 8.12511 5.85406 7.85427C5.58322 7.58343 5.26169 7.36859 4.90783 7.22202C4.55396 7.07544 4.17469 7 3.79167 7Z" fill="white" stroke="white" strokeWidth="0.00048" />
              </g>
              <defs>
                <clipPath id="clip0_7_169">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <div className='text-sm font-bold text-white'>{user.workcategory}</div>
          </div>
          <div className='flex flex-col gap-2'>
            <div className='text-gray-400 text-xl'>{user.bio}</div>
            <div className='text-gray-400 text-xl'>{user.email}</div>
            <div className='text-gray-400 text-xl flex gap-2 items-center justify-center'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_5_50)">
                  <path d="M12.5417 4.16667C13.3556 4.32547 14.1037 4.72355 14.6901 5.30995C15.2765 5.89635 15.6745 6.64439 15.8333 7.45834M12.5417 0.833336C14.2327 1.0212 15.8097 1.77848 17.0135 2.98084C18.2174 4.1832 18.9767 5.75918 19.1667 7.45M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1938 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1112 17.2006 18.1856C16.9808 18.2599 16.7478 18.2876 16.5167 18.2667C13.9524 17.988 11.4892 17.1118 9.325 15.7083C7.31152 14.4289 5.60445 12.7218 4.325 10.7083C2.91665 8.53434 2.0402 6.05916 1.76667 3.48334C1.74584 3.25289 1.77323 3.02064 1.84708 2.80136C1.92094 2.58208 2.03964 2.38058 2.19564 2.20969C2.35163 2.0388 2.5415 1.90226 2.75316 1.80877C2.96481 1.71528 3.19362 1.66689 3.425 1.66667H5.925C6.32942 1.66269 6.72149 1.8059 7.02813 2.06961C7.33478 2.33332 7.53506 2.69954 7.59167 3.1C7.69719 3.90006 7.89288 4.68561 8.175 5.44167C8.28712 5.73994 8.31139 6.0641 8.24492 6.37574C8.17846 6.68737 8.02405 6.97343 7.8 7.2L6.74167 8.25834C7.92796 10.3446 9.65538 12.072 11.7417 13.2583L12.8 12.2C13.0266 11.9759 13.3126 11.8215 13.6243 11.7551C13.9359 11.6886 14.2601 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.2031 13.2932 18.3435 13.6913 18.3333 14.1Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <clipPath id="clip0_5_50">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-gray-400">{user.phoneNumber}</p>
            </div>
            <div className='text-gray-400 text-xl flex gap-2 items-center justify-center'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="white" />
              </svg>
              <p className="text-gray-400">{user.location}</p>
            </div>
          </div>

          <div className='my-9 flex flex-col justify-center items-center gap-7 '>
            <Link to={'/user/editprofile'}>
              <div className='bg-purple-700 justify-center items-center  text-white font-semibold flex py-2 gap-2 px-4 rounded-3xl'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_5_33)">
                    <path d="M9.16666 3.33333H3.33333C2.8913 3.33333 2.46738 3.50893 2.15482 3.82149C1.84226 4.13405 1.66666 4.55797 1.66666 5V16.6667C1.66666 17.1087 1.84226 17.5326 2.15482 17.8452C2.46738 18.1577 2.8913 18.3333 3.33333 18.3333H15C15.442 18.3333 15.8659 18.1577 16.1785 17.8452C16.4911 17.5326 16.6667 17.1087 16.6667 16.6667V10.8333M15.4167 2.08333C15.7482 1.75181 16.1978 1.56557 16.6667 1.56557C17.1355 1.56557 17.5851 1.75181 17.9167 2.08333C18.2482 2.41485 18.4344 2.86449 18.4344 3.33333C18.4344 3.80217 18.2482 4.25181 17.9167 4.58333L10 12.5L6.66666 13.3333L7.5 10L15.4167 2.08333Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_33">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <p className='font-bold text-xl'>Edit Profile</p>
              </div>
            </Link>
            <Link to={'/business'}>
              <div className='bg-purple-700 justify-center items-center text-white font-semibold flex py-2 gap-2 px-8 rounded-3xl'>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.3804 5.37125H1.61996C0.725195 5.37125 0 6.09675 0 6.99125V9.20988L8.26199 10.9523V9.84765H11.6906V10.9523L20 9.19879V6.99125C20 6.09675 19.2748 5.37125 18.3804 5.37125Z" fill="white" />
                  <path d="M11.6906 14.4191H8.26199V12.1919L0.571602 10.6645V17.1801C0.571602 18.0745 1.29648 18.8 2.19094 18.8H17.8091C18.7035 18.8 19.4287 18.0745 19.4287 17.1801V10.6532L11.6906 12.1918V14.4191Z" fill="white" />
                  <path d="M10.8334 10.7048H9.11922V13.5616H10.8334V10.7048Z" fill="white" />
                  <path d="M7.56976 2.82054C7.57007 2.75401 7.59468 2.70112 7.63812 2.65616C7.68214 2.61308 7.73539 2.58905 7.80125 2.58843H12.1988C12.2646 2.58905 12.3182 2.61308 12.3623 2.65616C12.4053 2.70112 12.4297 2.75401 12.43 2.82054V3.97784H13.8185V2.82054C13.8188 2.37483 13.6362 1.96605 13.3441 1.67487C13.0533 1.38249 12.6436 1.19964 12.1988 1.19995H7.80125C7.35617 1.19964 6.94675 1.38249 6.65593 1.67487C6.36414 1.96605 6.18101 2.3748 6.18191 2.82054V3.97784H7.56976V2.82054Z" fill="white" />
                </svg>
                <p className='font-bold text-xl'>My Business</p>
              </div>
            </Link>
            <div onClick={handleLogout} className='bg-purple-950 hover:bg-red-900 justify-center items-center text-white font-semibold flex py-2 gap-2 px-4 rounded-3xl'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.44 14.62L20 12.06L17.44 9.5M9.76 12.06H19.93M11.76 20C7.34 20 3.76 17 3.76 12C3.76 7 7.34 4 11.76 4" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className='font-bold text-xl'>Logout</p>
            </div>
          </div>
        </div>
      </div>


      {/* ----------PC Version------------ */}
      <div className='mt-6 w-full mo:hidden'>
        <div className='flex justify-end px-16'>
          <div onClick={handleLogout} className='bg-purple-950 cursor-pointer hover:bg-red-900 justify-center items-center text-white font-semibold flex py-2 gap-2 px-6 rounded-3xl'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.44 14.62L20 12.06L17.44 9.5M9.76 12.06H19.93M11.76 20C7.34 20 3.76 17 3.76 12C3.76 7 7.34 4 11.76 4" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <p className='font-bold text-xl'>Logout</p>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className=' w-[711px] h-[356px] bg-gradient-to-b from-[#090C14] to-[#111827] flex flex-col justify-center items-center rounded-3xl'>
            <div className='flex w-full justify-end pr-[19px] pt-[16px]'>
              <Link to={'/user/editprofile'}>
                <div className='w-[60px] h-[60px] bg-purple-700 rounded-full flex justify-center items-center'>
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.75 5.00001H5C4.33696 5.00001 3.70107 5.2634 3.23223 5.73224C2.76339 6.20108 2.5 6.83697 2.5 7.50001V25C2.5 25.663 2.76339 26.2989 3.23223 26.7678C3.70107 27.2366 4.33696 27.5 5 27.5H22.5C23.163 27.5 23.7989 27.2366 24.2678 26.7678C24.7366 26.2989 25 25.663 25 25V16.25M23.125 3.12501C23.6223 2.62773 24.2967 2.34836 25 2.34836C25.7033 2.34836 26.3777 2.62773 26.875 3.12501C27.3723 3.62229 27.6517 4.29675 27.6517 5.00001C27.6517 5.70327 27.3723 6.37773 26.875 6.87501L15 18.75L10 20L11.25 15L23.125 3.12501Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </Link>
            </div>
            <div className='w-full h-full flex'>
              <div className='w-[50%] flex flex-col justify-center items-center'>
                <div className='w-36 h-36 mb-4 bg-gray-700 rounded-full flex justify-center items-center border-4 border-purple-700'>
                  {user.profileImage ? (
                    <img src={user.profileImage} className="w-28 h-28 rounded-full" alt="Profile Image" />
                  ) : (
                    <svg className="w-28 h-28 rounded-full border-4 border-purple-700 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#ffffff"></path> <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#ffffff"></path> <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#ffffff"></path> </g></svg>
                  )}
                </div>
                <div className='w-fit px-6 h-[34px] gap-1 bg-[#452A5C] border-2 border-purple-700 rounded-3xl flex justify-center items-center m-4 mt-2'>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_7_169)">
                      <path d="M14 0H0V14H14V0Z" stroke="white" strokeWidth="0.00048" />
                      <path d="M6.99999 2.24584L8.54582 4.66667H5.42499L6.99999 2.24584ZM6.99999 0.583337C6.89978 0.587637 6.80216 0.616483 6.7157 0.667339C6.62925 0.718195 6.5566 0.789505 6.50415 0.875003L3.84999 4.95834C3.80607 5.0493 3.78326 5.149 3.78326 5.25C3.78326 5.35101 3.80607 5.45071 3.84999 5.54167C3.89803 5.63101 3.96966 5.70545 4.0571 5.75688C4.14453 5.80831 4.2444 5.83476 4.34582 5.83334H9.62499C9.7252 5.82904 9.82282 5.80019 9.90928 5.74934C9.99573 5.69848 10.0684 5.62717 10.1208 5.54167C10.1785 5.45534 10.2093 5.35384 10.2093 5.25C10.2093 5.14617 10.1785 5.04467 10.1208 4.95834L7.49582 0.875003C7.44778 0.785664 7.37615 0.711224 7.28871 0.659794C7.20128 0.608364 7.10141 0.581918 6.99999 0.583337Z" fill="white" stroke="white" strokeWidth="0.00048" />
                      <path d="M12.5417 12.5417H8.45833C8.30362 12.5417 8.15525 12.4802 8.04585 12.3708C7.93646 12.2614 7.875 12.113 7.875 11.9583V7.87501C7.875 7.7203 7.93646 7.57192 8.04585 7.46253C8.15525 7.35313 8.30362 7.29167 8.45833 7.29167H12.5417C12.6964 7.29167 12.8447 7.35313 12.9541 7.46253C13.0635 7.57192 13.125 7.7203 13.125 7.87501V11.9583C13.125 12.113 13.0635 12.2614 12.9541 12.3708C12.8447 12.4802 12.6964 12.5417 12.5417 12.5417ZM9.04167 11.375H11.9583V8.45834H9.04167V11.375Z" fill="white" stroke="white" strokeWidth="0.00048" />
                      <path d="M3.79167 8.16667C4.13779 8.16667 4.47613 8.2693 4.76392 8.46159C5.0517 8.65389 5.276 8.9272 5.40846 9.24697C5.54091 9.56674 5.57557 9.91861 5.50804 10.2581C5.44052 10.5975 5.27385 10.9094 5.02911 11.1541C4.78436 11.3988 4.47254 11.5655 4.13308 11.633C3.79361 11.7006 3.44174 11.6659 3.12197 11.5335C2.8022 11.401 2.52889 11.1767 2.3366 10.8889C2.1443 10.6011 2.04167 10.2628 2.04167 9.91667C2.04167 9.45254 2.22604 9.00742 2.55423 8.67923C2.88242 8.35104 3.32754 8.16667 3.79167 8.16667ZM3.79167 7C3.21481 7 2.6509 7.17106 2.17125 7.49155C1.69161 7.81203 1.31777 8.26756 1.09702 8.80051C0.876264 9.33346 0.818504 9.9199 0.931044 10.4857C1.04358 11.0515 1.32137 11.5712 1.72927 11.9791C2.13718 12.387 2.65688 12.6648 3.22265 12.7773C3.78843 12.8898 4.37488 12.8321 4.90783 12.6113C5.44078 12.3906 5.8963 12.0167 6.21679 11.5371C6.53727 11.0574 6.70833 10.4935 6.70833 9.91667C6.70833 9.53364 6.63289 9.15437 6.48632 8.80051C6.33974 8.44664 6.1249 8.12511 5.85406 7.85427C5.58322 7.58343 5.26169 7.36859 4.90783 7.22202C4.55396 7.07544 4.17469 7 3.79167 7Z" fill="white" stroke="white" strokeWidth="0.00048" />
                    </g>
                    <defs>
                      <clipPath id="clip0_7_169">
                        <rect width="14" height="14" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className='text-sm font-bold text-white'>{user.workcategory}</div>
                </div>
              </div>
              <div className='w-[50%] flex flex-col justify-center items-start '>
                <div className='text-white font-bold text-3xl mb-[30px]'>{user.name}</div>
                <div className='text-gray-400 mb-[10px]'>{user.description}</div>
                <div className='text-gray-400 mb-[10px]'>{user.email}</div>
                <div className='text-gray-400 flex gap-2 items-center justify-center'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_5_50)">
                      <path d="M12.5417 4.16667C13.3556 4.32547 14.1037 4.72355 14.6901 5.30995C15.2765 5.89635 15.6745 6.64439 15.8333 7.45834M12.5417 0.833336C14.2327 1.0212 15.8097 1.77848 17.0135 2.98084C18.2174 4.1832 18.9767 5.75918 19.1667 7.45M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1938 17.2745C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1112 17.2006 18.1856C16.9808 18.2599 16.7478 18.2876 16.5167 18.2667C13.9524 17.988 11.4892 17.1118 9.325 15.7083C7.31152 14.4289 5.60445 12.7218 4.325 10.7083C2.91665 8.53434 2.0402 6.05916 1.76667 3.48334C1.74584 3.25289 1.77323 3.02064 1.84708 2.80136C1.92094 2.58208 2.03964 2.38058 2.19564 2.20969C2.35163 2.0388 2.5415 1.90226 2.75316 1.80877C2.96481 1.71528 3.19362 1.66689 3.425 1.66667H5.925C6.32942 1.66269 6.72149 1.8059 7.02813 2.06961C7.33478 2.33332 7.53506 2.69954 7.59167 3.1C7.69719 3.90006 7.89288 4.68561 8.175 5.44167C8.28712 5.73994 8.31139 6.0641 8.24492 6.37574C8.17846 6.68737 8.02405 6.97343 7.8 7.2L6.74167 8.25834C7.92796 10.3446 9.65538 12.072 11.7417 13.2583L12.8 12.2C13.0266 11.9759 13.3126 11.8215 13.6243 11.7551C13.9359 11.6886 14.2601 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.2031 13.2932 18.3435 13.6913 18.3333 14.1Z" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_50">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <p className="text-gray-400 mb-[10px]">{user.phoneNumber}</p>
                </div>
                <div className='text-gray-400 flex gap-2 items-center justify-center'>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="white" />
                  </svg>
                  <p className="text-gray-400 mb-[10px]">{user.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <Link to={'/business'}>
            <div className='bg-purple-700 justify-center items-center my-16 text-white font-semibold flex py-4 gap-2 px-8 rounded-3xl'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.3804 5.37125H1.61996C0.725195 5.37125 0 6.09675 0 6.99125V9.20988L8.26199 10.9523V9.84765H11.6906V10.9523L20 9.19879V6.99125C20 6.09675 19.2748 5.37125 18.3804 5.37125Z" fill="white" />
                <path d="M11.6906 14.4191H8.26199V12.1919L0.571602 10.6645V17.1801C0.571602 18.0745 1.29648 18.8 2.19094 18.8H17.8091C18.7035 18.8 19.4287 18.0745 19.4287 17.1801V10.6532L11.6906 12.1918V14.4191Z" fill="white" />
                <path d="M10.8334 10.7048H9.11922V13.5616H10.8334V10.7048Z" fill="white" />
                <path d="M7.56976 2.82054C7.57007 2.75401 7.59468 2.70112 7.63812 2.65616C7.68214 2.61308 7.73539 2.58905 7.80125 2.58843H12.1988C12.2646 2.58905 12.3182 2.61308 12.3623 2.65616C12.4053 2.70112 12.4297 2.75401 12.43 2.82054V3.97784H13.8185V2.82054C13.8188 2.37483 13.6362 1.96605 13.3441 1.67487C13.0533 1.38249 12.6436 1.19964 12.1988 1.19995H7.80125C7.35617 1.19964 6.94675 1.38249 6.65593 1.67487C6.36414 1.96605 6.18101 2.3748 6.18191 2.82054V3.97784H7.56976V2.82054Z" fill="white" />
              </svg>
              <p className='font-bold text-xl'>My Business</p>
            </div>
          </Link>
        </div>
      </div>


    </div>
  );
}