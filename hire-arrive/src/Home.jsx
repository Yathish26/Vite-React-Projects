import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import services from './categories';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [csvData, setCsvData] = useState([]);

  // Load CSV Data
  useEffect(() => {
    const googleSheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-SIrG6BIe7bteDoL60lDX1jKgKHNUcLSv_ARXnX-5V_SRsbREQdCf3H3xmqoixS8FOM8MUjyOo44G/pub?output=csv';

    fetch(googleSheet)
      .then(response => response.text())
      .then(data => {
        Papa.parse(data, {
          header: true,
          skipEmptyLines: true,
          complete: (result) => {
            setCsvData(result.data);
          },
        });
      });
  }, []);

  // Filter results based on search term
  useEffect(() => {
    if (searchTerm.trim()) {
      const filteredResults = csvData.filter(row =>
        row.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.Address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.Contact.includes(searchTerm) ||
        row.Category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchTerm, csvData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* -----------------------------Home Section Update------------------------------- */}

      {/* Search Bar */}
      <div className="flex items-center justify-center my-4">
        <div className="flex w-2/3 items-center border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-purple-700">
          <div className="px-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search for services, e.g., plumber, electrician..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-4 pl-2 pr-16 focus:outline-none rounded-full"
          />
        </div>
      </div>

      {/* Search Results */}
      {searchTerm.trim() && results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-purple-500 mb-2">{result.Name}</h2>
              <p className="text-gray-300">{result.Address}</p>
              <p className="text-gray-400 mt-2">Contact: {result.Contact}</p>
              <p className="text-gray-400 mt-2">Category: {result.Category}</p>
            </div>
          ))}
        </div>
      ) : searchTerm.trim() && results.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-12 p-8 shadow-lg">
          <svg className="w-16 h-16 mb-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l-4-4m0 0l4-4m-4 4h12m-4 4l4-4m0 0l-4-4"></path>
          </svg>
          <p className="text-2xl text-gray-300 font-semibold mb-2">No results found</p>
          <p className="text-gray-400">We couldn’t find any matches for "{searchTerm}". Please try again with a different keyword.</p>
        </div>

      ) : (
        /* Categories Section (Shown when there's no search) */
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 m-8">
          {Object.keys(services).map((service, index) => (
            <Link to={services[service].location} key={index}>
              <div className="p-6 flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer" key={index}>
                <img src={services[service].icon} alt={service} className="w-24 h-24 mx-auto mb-4 mo2:mb-0" />
                <h3 className="text-xl font-semibold mo2:hidden text-purple-700">{service}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
