import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function EditProfile() {
  const [user, setUser] = useState({ name: '', email: '', bio: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://https://hire-arrive-server.onrender.com/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setSuccessMessage(''); // Clear success message on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('https://https://hire-arrive-server.onrender.com/api/auth/user', user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data); // Update local state with the updated user
      setSuccessMessage('Profile updated successfully!'); // Set success message
    } catch (error) {
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'An error occurred. Please try again.');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-md p-8 w-96">
        <h2 className="text-2xl font-bold text-purple-700 mb-6">Edit Profile</h2>
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>} {/* Success message */}
        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>} {/* Error message */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-semibold mb-1">Bio</label>
            <textarea
              name="bio"
              value={user.bio}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
              placeholder="Enter your bio"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
