import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useLocation } from 'react-router-dom';
import services from '../categories';
import LoadingSpinner from '../smallcomponents/Loading';

export default function CategoryUI() {
    const [constructors, setConstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page

    const url = useLocation();
    const currentCategory = url.pathname.split('/')[1];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // Get category based on current URL path
    const rowCategory = Object.values(services).find(serv => serv.location === `/${currentCategory}`)?.alias;

    useEffect(() => {
        const googleSheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTePvkgiIXq5cAyKL-3MrVsf_MhRoYZxHWAnhFjTqT6WZyrNMVg0r9ITNNIDxUELdwKbEtAps058fHW/pub?output=csv';
        fetch(googleSheet)
            .then((response) => response.text())
            .then((data) => {
                Papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        // Filter by the dynamic category
                        const filteredData = result.data.filter((row) => row.Category === rowCategory);
                        setConstructors(filteredData);
                        setLoading(false);
                    },
                });
            });
    }, [rowCategory]);

    // Calculate the total number of pages
    const totalPages = Math.ceil(constructors.length / itemsPerPage);

    // Get the constructors for the current page
    const currentConstructors = constructors.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // Pagination handler
    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    if (loading) {
        return <LoadingSpinner />; // Show spinner while loading
    }

    return (
        <div className="min-h-screen bg-gray-700 text-white p-8">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">{rowCategory} Listings</h1>

            {/* Display results */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentConstructors.map((constructor, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 border-2 hover:border-black border-purple-700 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{constructor.Name}</h2>
                        <div className='flex items-center'>
                            <img className="w-4 h-4 mr-2" src="/logos/address.svg" alt="Address:" />
                            <p className="text-gray-300">{constructor.Address}</p>
                        </div>
                        <div className='flex items-center mt-2'>
                            <img className="w-4 h-4 mr-2" src="/logos/call.svg" alt="Address:" />
                            <p className="text-gray-400 ">{constructor.Contact}</p>
                        </div>

                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 mx-1 bg-gray-600 rounded ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-500'}`}
                >
                    Previous
                </button>
                <span className="px-4 py-2 mx-1">{`Page ${currentPage} of ${totalPages}`}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 mx-1 bg-gray-600 rounded ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-500'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}
