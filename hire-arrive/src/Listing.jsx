import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios

export default function Listing() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [user, setUser] = useState({
    businessName: '',
    description: '',
    contactEmail: '',
    phoneNumber: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/auth/user', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data); // Set user data from the response
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); // Update the user state
    setSuccessMessage(''); // Clear success message on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:5000/api/auth/user', user, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(response.data); // Update local state with the updated user data
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
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-3xl font-bold text-white mb-6">Register Your Business</h2>
        {/* Success Message */}
        {successMessage && (
          <div className="bg-green-500 text-white p-2 mb-4 rounded">
            {successMessage}
          </div>
        )}
        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-500 text-white p-2 mb-4 rounded">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="businessName" className="block text-gray-300 font-semibold mb-2">Business Name</label>
            <input
              id="businessName"
              name="businessName"
              type="text"
              value={user.businessName} // Changed from formData to user
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
              placeholder="Enter your business name"
              required
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-300 font-semibold mb-2">Description</label>
            <textarea
              id="description"
              name="description"
              value={user.description} // Changed from formData to user
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
              rows="4"
              placeholder="Describe your business"
              required
            />
          </div>
          <div>
            <label htmlFor="contactEmail" className="block text-gray-300 font-semibold mb-2">Contact Email</label>
            <input
              id="contactEmail"
              name="contactEmail"
              type="email"
              value={user.contactEmail} // Changed from formData to user
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
              placeholder="Enter your contact email"
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-300 font-semibold mb-2">Phone Number</label>
            <input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={user.phoneNumber} // Changed from formData to user
              onChange={handleChange}
              className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
