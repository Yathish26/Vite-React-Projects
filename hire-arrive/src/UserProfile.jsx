import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function UserProfile() {
  const [user, setUser] = useState(null);

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

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-md p-8 w-96">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-purple-700 mb-4"
          />
          <h2 className="text-2xl font-bold text-white">{user.name}</h2>
          <p className="text-gray-400">{user.email}</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-purple-700">About</h3>
          <p className="text-gray-300">
            {user.bio}
          </p>
        </div>
        <div className="flex justify-between">
          <Link to="/user/editprofile">
            <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded">
              Edit Profile
            </button>
          </Link>
          <Link to="/login">
          <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded">
            Log Out
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
