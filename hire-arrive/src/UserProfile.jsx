import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [showContact, setShowContact] = useState(false); // To toggle phone number visibility
  const [loading, setLoading] = useState(true); // Loading state

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data (replace with your API endpoint)
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

  // Loading spinner component
  const LoadingSpinner = () => (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative flex items-center justify-center">
        <div className="animate-spin h-12 w-12 border-4 border-t-4 border-purple-700 border-t-transparent rounded-full">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-700 to-purple-500 opacity-30"></div>
        </div>
        <div className="absolute h-10 w-10 rounded-full bg-purple-700 opacity-60"></div>
      </div>
    </div>
  );


  if (loading) {
    return <LoadingSpinner />; // Show loading spinner while fetching data
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
          {/* <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-purple-700 mb-4"
          /> */}
          <svg className="w-32 h-32 rounded-full border-4 border-purple-700 mb-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#ffffff"></path> <path d="M16.807 19.0112C15.4398 19.9504 13.7841 20.5 12 20.5C10.2159 20.5 8.56023 19.9503 7.193 19.0111C6.58915 18.5963 6.33109 17.8062 6.68219 17.1632C7.41001 15.8302 8.90973 15 12 15C15.0903 15 16.59 15.8303 17.3178 17.1632C17.6689 17.8062 17.4108 18.5964 16.807 19.0112Z" fill="#ffffff"></path> <path d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3432 6 9.00004 7.34315 9.00004 9C9.00004 10.6569 10.3432 12 12 12Z" fill="#ffffff"></path> </g></svg>
          <h2 className="text-2xl font-bold text-white">{user.name}</h2>
          <p className="text-gray-400">{user.email}</p>
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
