import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const requirements = 'Must contain at least 8 characters';
  const requirements2 = 'Include one special character';
  const spclchars = ['+', '-', '!', '@', '#', '$', '%', '^', '&', '*', '_', '+'];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passMessage, setPassMessage] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    const containsSpecialChar = spclchars.some((char) => value.includes(char));

    if (value.length === 0) {
      setPassMessage('');
    } else if (value.length < 5) {
      setPassMessage('Very Short');
    } else if (value.length >= 5 && !containsSpecialChar && value.length < 8) {
      setPassMessage('Medium');
    } else if (value.length >= 8 && !containsSpecialChar) {
      setPassMessage('Strong');
    } else if (value.length >= 8 && containsSpecialChar) {
      setPassMessage('Very Strong');
    }

    validateForm(value);
  };

  const validateForm = (passwordValue) => {
    const isPasswordValid = passwordValue.length >= 10 && spclchars.some((char) => passwordValue.includes(char));
    const isEmailValid = email.includes('@') && email.includes('.');
    const isNameValid = name.trim().length > 0;

    setIsFormValid(isPasswordValid && isEmailValid && isNameValid);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    validateForm(password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateForm(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.msg || 'Registration failed');
        return;
      }

      // Set success message on successful registration
      setSuccessMessage('Registration successful! Now you can log in.');
      // Clear the form fields
      setName('');
      setEmail('');
      setPassword('');
      setPassMessage('');
      setErrorMessage('');
    } catch (err) {
      console.error('Error:', err);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  // Determine class names based on password validation
  const lengthRequirementClass = password.length >= 8 ? 'text-green-500' : 'text-yellow-500';
  const specialCharRequirementClass = spclchars.some((char) => password.includes(char)) ? 'text-green-500' : 'text-yellow-500';

  return (
    <div className="min-h-[90vh] flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Register</h1>
        {successMessage ? (
          <div className="text-center">
            <p className="text-green-500">{successMessage}</p>
            <Link to="/login">
              <button className="mt-4 py-2 px-4 bg-purple-700 text-white rounded-lg">
                Go to Login
              </button>
            </Link>
          </div>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-white text-sm font-semibold mb-1" htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-1" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
              />
            </div>
            <div>
              <label className="block text-white text-sm font-semibold mb-1" htmlFor="password">Create Password</label>
              <input
                id="password"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded focus:outline-none focus:border-purple-700"
              />
              <p className={`mt-2 ${passMessage === 'Very Short' ? 'text-red-500' : passMessage === 'Medium' ? 'text-yellow-500' : passMessage === 'Strong' ? 'text-orange-500' : 'text-green-500'}`}>
                {passMessage}
              </p>
              <p className={`mt-2 ${lengthRequirementClass}`}>{password.length > 0 && requirements}</p>
              <p className={`mt-2 ${specialCharRequirementClass}`}>{password.length > 0 && requirements2}</p>
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-2 mt-4 bg-purple-700 hover:bg-purple-800 text-white font-bold rounded-lg transition duration-300 ${!isFormValid ? 'cursor-not-allowed opacity-50' : ''}`}
            >
              Register
            </button>
          </form>
        )}
        {!successMessage && (
          <Link to="/login">
            <p className="text-center text-gray-300 mt-3 hover:text-purple-700 cursor-pointer">
              Already have an account? Sign In
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
