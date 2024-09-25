import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message

    try {
      const response = await axios.post('https://ytx-hire-arrive-a1ddd7b53764.herokuapp.com/api/auth/login', {
        email,
        password,
      });

      console.log(response.data); // Store the token or handle post-login here
      localStorage.setItem('token', response.data.token);
      navigate('/'); // Redirect to home or another route after login
    } catch (error) {
      if (error.response && error.response.data) {
        // Assuming your backend returns an error message
        setErrorMessage(error.response.data.message || 'Username or password is incorrect');
      } else {
        setErrorMessage('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md mo:m-4 bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Login</h1>
        {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-white text-sm font-semibold mb-1" htmlFor="email">Email</label>
            <input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email" 
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-semibold mb-1" htmlFor="password">Password</label>
            <input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password" 
              className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-2 mt-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition duration-300"
          >
            Sign In
          </button>
        </form>
        <Link to={'/register'}>
          <p className='text-center text-gray-300 mt-3 hover:text-purple-700 cursor-pointer'>Create Account</p>
        </Link>
      </div>
    </div>
  );
}
