import React, { useEffect, useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [showContact, setShowContact] = useState(false); // To toggle phone number visibility

  const navigate = useNavigate();
  

  useEffect(() => {
    // Fetch user data (replace with your API endpoint)
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');

      

      try {
        const response = await fetch('http://localhost:5000/api/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        setUser(data); // Assuming the response has the user object
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  // Function to log out the user
  const handleLogout = () => {
    localStorage.removeItem('token'); // Clear the token
    setUser(null); // Clear user state
    navigate('/login'); // Redirect to login page
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-lg mb-4">You are not logged in.</p>
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
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-md p-8 w-96">
        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-purple-700 mb-4"
          />
          <h2 className="text-2xl font-bold text-white">{user.name}</h2>
          <p className="text-gray-400">{user.email}</p>
        </div>

        {/* User Bio Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-purple-700">About</h3>
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
