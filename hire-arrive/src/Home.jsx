import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';
import services from './categories';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [csvData, setCsvData] = useState([]);
  const [clear, setClear] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState('');

  // Load CSV Data
  useEffect(() => {
    const googleSheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-SIrG6BIe7bteDoL60lDX1jKgKHNUcLSv_ARXnX-5V_SRsbREQdCf3H3xmqoixS8FOM8MUjyOo44G/pub?output=csv';

    const fetchData = async () => {
      const response = await fetch(googleSheet);
      const data = await response.text();
      Papa.parse(data, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => setCsvData(result.data),
      });
    };

    fetchData();
  }, []);

  // Debounce search term to limit filter frequency
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 300);

    return () => clearTimeout(handler);
  }, [searchTerm]);

  // Handle input change with clear button visibility
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setClear(e.target.value !== '');
  };

  // Clear search term and results
  const handleClear = useCallback(() => {
    setSearchTerm('');
    setClear(false);
  }, []);

  // Filter results based on the debounced search term
  const filteredResults = useMemo(() => {
    if (!debouncedTerm.trim()) return [];

    return csvData.filter(row =>
      row.Name?.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
      row.Address?.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
      row.Contact?.includes(debouncedTerm) ||
      row.Category?.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
  }, [debouncedTerm, csvData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
            onChange={handleInputChange}
            className="w-full p-4 py-4 focus:outline-none rounded-full"
          />
          {clear && (
            <div onClick={handleClear} className="px-3 cursor-pointer">
              <img className="w-6 h-6" src="/logos/cross.svg" alt="Clear" />
            </div>
          )}
        </div>
      </div>

      {/* Search Results */}
      {searchTerm.trim() && filteredResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
          {filteredResults.map((result, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300">
              <h2 className="text-2xl font-semibold text-purple-500 mb-2">{result.Name}</h2>
              <div className="flex items-center">
                <img className="w-4 h-4 mr-2" src="/logos/address.svg" alt="Address:" />
                <p className="text-gray-300">{result.Address}</p>
              </div>
              <div className="flex items-center mt-2">
                <img className="w-4 h-4 mr-2" src="/logos/call.svg" alt="Contact:" />
                <p className="text-gray-400">Contact: {result.Contact}</p>
              </div>
              <p className="mt-2 inline-block px-3 py-1 border border-purple-500 text-purple-500 rounded-full text-sm">
                {result.Category}
              </p>
            </div>
          ))}
        </div>
      ) : searchTerm.trim() && filteredResults.length === 0 ? (
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
              <div className="p-6 flex flex-col justify-center items-center bg-gray-100 rounded-lg shadow-lg hover:bg-gray-200 cursor-pointer">
                <img src={services[service].icon} alt={service} className="w-24 h-24 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-purple-700">{service}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
