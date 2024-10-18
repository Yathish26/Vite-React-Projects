import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import GoogleSignIn from './GoogleSignIn'; // Import the GoogleSignIn component

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(''); // Reset error message

    try {
      const response = await axios.post('https://hire-arrive-server.onrender.com/api/auth/login', {
        email,
        password,
      });

      // Store the token or handle post-login here
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

  // Handle Google Sign-In success
  const handleGoogleSignInSuccess = async (credentialResponse) => {
    try {
      const { credential } = credentialResponse;
      // You can send the credential to your backend for verification
      const response = await axios.post('https://hire-arrive-server.onrender.com/api/auth/google-login', {
        token: credential, 
      });

      // Store the token or handle post-login here
      localStorage.setItem('token', response.data.token); 
      navigate('/'); // Redirect to home or another route after login
    } catch (error) {
      setErrorMessage('Google sign-in failed. Please try again.');
      console.error('Google Sign-In Error:', error);
    }
  };

  const handleGoogleSignInFailure = (error) => {
    setErrorMessage('Google sign-in failed. Please try again.');
    console.error('Google Sign-In Error:', error);
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md m-4 bg-gray-800 p-8 rounded-lg shadow-md">
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
            className="w-full py-3 mt-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition duration-300"
          >
            Sign In
          </button>
          <div className='flex justify-center'>
            <GoogleSignIn onSuccess={handleGoogleSignInSuccess} onFailure={handleGoogleSignInFailure} />
          </div>
          
        </form>
        <div className='w-full flex justify-center'>
          <Link to={'/register'}>
            <button className='bg-gray-700 rounded-lg py-2 px-6 w-full text-center text-white mt-3 hover:bg-purple-800 cursor-pointer'>Create Account</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
