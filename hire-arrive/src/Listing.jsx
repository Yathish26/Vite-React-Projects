import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

export default function Listing() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [user, setUser] = useState({
    businessName: '',
    description: '',
    workcategory: '',
    phoneNumber: '',
  });

  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('https://hire-arrive-server.onrender.com/api/auth/user', {
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
    setUser((prevUser) => ({ ...prevUser, [name]: value })); // Update the user state
    setSuccessMessage(''); // Clear success message on change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('https://hire-arrive-server.onrender.com/api/auth/user', user, {
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

  const works = [
    'Electrician',
    'Painter',
    'Plumber',
    'Carpenter',
    'Mason',
    'AC Technician',
    'Locksmith',
    'Roofing',
    'Flooring',
    'Handyman',
    'Landscaping',
    'Tree Service',
    'Fencing',
    'Siding',
    'Gutter Cleaning',
    'Window Cleaning',
    'Pressure Washing',
  ];

  const workCategory = [
    'Accounting',
    'Advertising',
    'Agricultural',
    'Automotive',
    'Banking',
    'Beauty',
    'Chemical',
    'Construction',
    'Consulting',
    'Customer Service',
    'Education',
    'Energy',
    'Engineering',
    'Entertainment',
    'Environmental',
    'Financial',
    'Food & Beverage',
    'Government',
    'Healthcare',
    'Hospitality',
    'Information Technology',
    'Insurance',
    'Legal',
    'Logistics',
    'Manufacturing',
    'Marketing',
    'Media',
    'Non-Profit',
    'Pharmaceutical',
    'Real Estate',
    'Retail',
    'Telecommunications',
    'Transportation',
    'Travel & Tourism',
    'Utilities',
    'Wholesale',
    'Other'
  ];

  const titlePlaceHolders = () => {
    const randomIndex = Math.floor(Math.random() * works.length);
    return works[randomIndex];
  }

  if (successMessage) {
    setTimeout(() => {
      setSuccessMessage(!successMessage);
    }, 2000);
  }

  if (errorMessage) {
    setTimeout(() => {
      setErrorMessage(!errorMessage)
    }, 2000);
  }

  const Submitted = () => {
    return (
      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
      >
        Submitted
      </button>
    )
  }

  const Error = () => {
    return (
      <button
        type="submit"
        className="w-full py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-300"
      >
        Error
      </button>
    )
  }

  return (
    <div className="bg-gray-900 min-h-[80vh] flex items-center mo:items-start justify-center p-4">
      {token ?
        (<div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-3xl font-bold text-white mb-6">Register Your Work / Business</h2>

          {/* Success Message
          {successMessage && (
            <div className="bg-green-500 text-white p-2 mb-4 rounded">
              {successMessage}
            </div>
          )}
          Error Message
          {errorMessage && (
            <div className="bg-red-500 text-white p-2 mb-4 rounded">
              {errorMessage}
            </div>
          )} */}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="businessName" className="block text-gray-300 font-semibold mb-2">Business Title</label>
              <div className="relative w-full">
                <input
                  id="businessName"
                  name="businessName"
                  type="text"
                  value={user.businessName}
                  onChange={handleChange}
                  className="w-full p-3 pr-10 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
                  placeholder={`Eg:- ${titlePlaceHolders()}`}
                  required
                />

                {/* Information Button */}
                <div className="absolute inset-y-0 right-3 flex items-center">
                  <div className="group relative">
                    <button type="button" className=" w-6 h-6 hover:text-gray-300">
                      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM10.3027 13.3942C10.2316 13.7147 10.5038 14 10.8479 14H13.0406C13.2979 14 13.5151 13.8351 13.6064 13.6061C13.697 13.3789 14.0117 12.9674 14.254 12.7518C14.4827 12.5112 14.7213 12.2848 14.9563 12.0618C15.8824 11.183 16.754 10.356 16.754 8.91047C16.754 6.40301 14.582 5 12.2707 5C10.5038 5 8.06416 5.80604 7.58396 8.50363C7.48716 9.04737 7.94773 9.5 8.50002 9.5H9.91229C10.4388 9.5 10.8312 9.07642 11.0121 8.582C11.1863 8.10604 11.5379 7.7551 12.2707 7.7551C13.6066 7.7551 13.6064 9.22371 12.8346 10.1843C12.5434 10.5467 12.2023 10.8677 11.8648 11.1853C11.1798 11.8298 10.5098 12.4602 10.3027 13.3942ZM13.9999 17C13.9999 18.1046 13.1045 19 11.9999 19C10.8954 19 9.99994 18.1046 9.99994 17C9.99994 15.8954 10.8954 15 11.9999 15C13.1045 15 13.9999 15.8954 13.9999 17Z" fill="#7E22ce"></path> </g></svg>
                    </button>

                    {/* Tooltip */}
                    <div className="hidden group-hover:block absolute right-0 bottom-full mb-2 w-48 p-2 bg-gray-700 text-white text-sm rounded-lg shadow-lg">
                      Suggestion: Enter the full name of your business, e.g., "Tech Solutions Inc."
                    </div>
                  </div>
                </div>
              </div>
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
                placeholder="Describe your work"
                required
              />
            </div>
            <div>
              <label htmlFor="workCategory" className="block text-gray-300 font-semibold mb-2">Category</label>
              <select
                id="workcategory"
                name="workcategory"
                value={user.workcategory}
                onChange={handleChange}
                className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
                required
              >
                <option value="" disabled>Select a category</option>
                {workCategory.map((work, id) => (<option key={id} value={work}>{work}</option>))}
              </select>
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
            {successMessage ? <Submitted /> : errorMessage ? <Error /> : (
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Submit
              </button>)}
          </form>
        </div>) :

        (<div className='flex flex-col justify-center items-center'>
          <svg className='w-56 h-56' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <circle cx="12" cy="10" r="3" fill="#ffffff"></circle>
              <circle cx="12" cy="12" r="9" stroke="#ffffff" strokeWidth="1.2"></circle>
              <path d="M17.8719 18.8083C17.9489 18.7468 17.9799 18.6436 17.9452 18.5513C17.5693 17.5518 16.8134 16.6706 15.7814 16.0332C14.6966 15.3632 13.3674 15 12 15C10.6326 15 9.30341 15.3632 8.21858 16.0332C7.18663 16.6706 6.43066 17.5518 6.05477 18.5513C6.02009 18.6436 6.05115 18.7468 6.12813 18.8083C9.56196 21.552 14.438 21.552 17.8719 18.8083Z" fill="#2A4157" fillOpacity="0.24" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round"></path>
            </g>
          </svg>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
            <p className="text-white text-lg mb-4">
              Kindly log in to list your service or create an account if you don't have one yet.
            </p>

            <div className="flex justify-center gap-4">
              {/* Login Button */}
              <Link to="/login" className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md">
                Login
              </Link>

              {/* Register Button */}
              <Link to="/register" className="bg-purple-700 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow-md">
                Create an Account
              </Link>
            </div>
          </div>
        </div>)}
    </div>
  );
}



