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
    <div className="min-h-screen bg-gray-900 flex items-center mo:items-start justify-center">
      <div className="bg-gray-800 rounded-lg shadow-md mo:mt-16 p-8 w-96">
        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-6">
          {user.profileImage ? (
            <div className='w-32 h-32 mb-4 rounded-full flex justify-center items-center border-4 border-purple-700'>
              <img src={user.profileImage} className="w-24 h-24 rounded-full" alt="Profie Image" />
            </div>
          ) : (
            <svg className="w-32 h-32 rounded-full border-4 border-purple-700 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#ffffff"></path> <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#ffffff"></path> <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#ffffff"></path> </g></svg>
          )}
          <h2 className="text-2xl font-bold text-white">{user.name}</h2>
          <p className="text-gray-400">{user.email}</p>
          {user.location &&
            <div className='flex my-1'>
              <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12.2848 18.9935C12.1567 19.0875 12.0373 19.1728 11.9282 19.2493C11.8118 19.1721 11.6827 19.0833 11.5427 18.9832C10.8826 18.5109 10.0265 17.8176 9.18338 16.9529C7.45402 15.1792 6 12.9151 6 10.5C6 7.18629 8.68629 4.5 12 4.5C15.3137 4.5 18 7.18629 18 10.5C18 12.8892 16.4819 15.1468 14.6893 16.9393C13.8196 17.8091 12.9444 18.5099 12.2848 18.9935ZM19.5 10.5C19.5 16.5 12 21 12 21C11.625 21 4.5 16.5 4.5 10.5C4.5 6.35786 7.85786 3 12 3C16.1421 3 19.5 6.35786 19.5 10.5ZM13.5 10.5C13.5 11.3284 12.8284 12 12 12C11.1716 12 10.5 11.3284 10.5 10.5C10.5 9.67157 11.1716 9 12 9C12.8284 9 13.5 9.67157 13.5 10.5ZM15 10.5C15 12.1569 13.6569 13.5 12 13.5C10.3431 13.5 9 12.1569 9 10.5C9 8.84315 10.3431 7.5 12 7.5C13.6569 7.5 15 8.84315 15 10.5Z" fill="#ffffff"></path> </g></svg>
              <p className='text-gray-400'>{user.location}</p>
            </div>}
        </div>

        {/* User Bio Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-purple-700">Bio</h3>
          <p className="text-gray-300">
            {user.bio ? user.bio : 'No bio available'}
          </p>
        </div>

        {/* Business Section */}
        {user.businessName && user.description && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-purple-700">Service</h3>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Business Name:</span> {user.businessName}
            </p>
            <p className="text-gray-300">
              <span className="font-semibold text-white">Description:</span> {user.description}
            </p>
            <button
              onClick={handleShowContact}
              className="mt-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded transition duration-300"
            >
              {showContact ? 'Hide Contact' : 'Contact'}
            </button>
            {showContact && (
              <p className="text-gray-300 mt-2">
                <span className="font-semibold text-white">Phone:</span> {user.phoneNumber}
              </p>
            )}
          </div>
        )}

        {/* Edit Profile and Log Out Section */}
        <div className="flex justify-between">
          <Link to="/user/editprofile">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded">
              Edit Profile
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
