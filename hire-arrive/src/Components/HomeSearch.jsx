// HomeSearch.jsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Shimmer from '../smallcomponents/Shimmer';
import { CSSTransition } from 'react-transition-group';
import { data } from 'autoprefixer';

const HomeSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [apiData, setApiData] = useState([]);
  const [clear, setClear] = useState(false);
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0); // New state for pagination
  const resultsPerPage = 10;

  // Fetch data with pagination
  const fetchData = async (pageNum) => {
    const start = pageNum * resultsPerPage;
    const end = start + resultsPerPage;
    const hyphenatedTerm = debouncedTerm.replace(/\s+/g, '-');
    setLoading(true);
    try {
      const response = await fetch(`https://hire-arrive-server.onrender.com/maxim26/data?All=${hyphenatedTerm}&Entries=${start}-${end}`);
      const data = await response.json();
      if (data.error) {
        setApiData([]);
      } else {
        setApiData(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setApiData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (debouncedTerm.trim()) {
      fetchData(page);
    } else {
      setApiData([]);
    }
  }, [debouncedTerm, page]);

  // Debounce effect for search term
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 0);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    setClear(e.target.value !== '');
    setPage(0);
  };

  const handleClear = useCallback(() => {
    setSearchTerm('');
    setDebouncedTerm('');
    setClear(false);
    setPage(0);
  }, []);

  const filteredResults = useMemo(() => {
    if (!debouncedTerm.trim()) return [];
    return apiData.filter(row =>
      row.Name?.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
      row.Address?.toLowerCase().includes(debouncedTerm.toLowerCase()) ||
      row.Contact?.includes(debouncedTerm) ||
      row.Category?.toLowerCase().includes(debouncedTerm.toLowerCase())
    );
  }, [debouncedTerm, apiData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const createSlug = (name, id) => {
    return `${name.toLowerCase().replace(/\s+/g, '-')}*${id}`;
};

  return (
    <>
      <div className="flex items-center justify-center my-4">
        <div className="flex w-2/3 items-center border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-purple-700">
          <div className="px-3 mo:pr-0">
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

      <CSSTransition
      in={searchTerm.trim() !== ''}
      timeout={300}
      classNames="slide"
      unmountOnExit
    >
      <div className='bg-purple-200 m-12 mo:m-4 rounded-3xl shadow-lg'>
        {loading ? (
          <Shimmer />
        ) : filteredResults.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 m-8">
            {filteredResults.map((result, index) => (
              <Link to={`/${result.Category}/${createSlug(result.Name , result._id)}`} key={index}>
                <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:bg-purple-700 transition duration-300">
                  <h2 className="text-2xl font-semibold text-purple-500 mb-2">{result.Name}</h2>
                  <div className="flex items-center">
                    <img className="w-4 h-4 mr-2" src="/logos/address.svg" alt="Address:" />
                    <p className="text-gray-300">{result.Address}</p>
                  </div>
                  <div className='flex justify-between'>
                    <p className="mt-2 inline-block px-3 py-1 border border-purple-500 text-purple-500 rounded-full text-sm">
                      {result.Category}
                    </p>
                    <div className="mt-2 flex gap-1 justify-center items-center px-3 py-1 border border-green-500 text-green-500 rounded-full text-sm">
                      <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45ZM12.0011 13.46C10.2611 13.46 8.85107 12.05 8.85107 10.31C8.85107 8.57 10.2611 7.16 12.0011 7.16C13.7411 7.16 15.1511 8.57 15.1511 10.31C15.1511 12.05 13.7411 13.46 12.0011 13.46Z" fill="#3F9C6E"></path> </g></svg>
                      <p className='font-semibold'>{result.Location}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : filteredResults.length === 0 && (
          <div className="flex flex-col items-center justify-center mt-12 p-8">
            <svg className="w-16 h-16 mb-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l-4-4m0 0l4-4m-4 4h12m-4 4l4-4m0 0l-4-4"></path>
            </svg>
            <p className="text-2xl text-black font-semibold mb-2">No results found</p>
            <p className="text-gray-700 text-center">We couldn’t find any matches for "{searchTerm}". Please try again with a different keyword.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {filteredResults.length > 0 && (
          <div className="flex justify-center my-4">
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-l-lg"
              onClick={() => setPage(page - 1)}
              disabled={page === 0}
            >
              Previous
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white"
              disabled
            >
              Page {page + 1}
            </button>
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-r-lg"
              onClick={() => setPage(page + 1)}
              disabled={filteredResults.length < resultsPerPage}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </CSSTransition>
    </>
  );
};

export default HomeSearch;
