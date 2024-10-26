import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useLocation, Link } from 'react-router-dom';
import services from '../Editable Tool/categories';
import LoadingSpinner from '../smallcomponents/Loading';
import DB from '../Data/sheet';

export default function CategoryUI() {
    const [constructors, setConstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); // Search term state
    const itemsPerPage = 10;

    const url = useLocation();
    const currentCategory = url.pathname.split('/')[1];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const rowCategory = Object.values(services).find(serv => serv.location === `/${currentCategory}`)?.alias;

    useEffect(() => {
        const googleSheet = DB;
        fetch(googleSheet)
            .then((response) => response.text())
            .then((data) => {
                Papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        const filteredData = result.data.filter((row) => row.Category === rowCategory);
                        setConstructors(filteredData);
                        setLoading(false);
                    },
                });
            });
    }, [rowCategory]);

    const totalPages = Math.ceil(constructors.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const createSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

    // Filter constructors based on search term
    const filteredConstructors = constructors.filter((constructor) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            constructor.Name.toLowerCase().includes(lowerCaseSearchTerm) ||
            constructor.Address.toLowerCase().includes(lowerCaseSearchTerm) ||
            constructor.Location.toLowerCase().includes(lowerCaseSearchTerm) ||
            constructor.Category.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });


    const currentConstructors = filteredConstructors.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-screen bg-gray-700 text-white p-8">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">{rowCategory}</h1>

            {/* Search Input */}
            <div className="flex justify-center items-center relative mb-6">
                <input
                    type="text"
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value.trimStart())}
                    className="p-3 w-full md:w-1/2 text-black rounded-lg pr-10" // Adjusted padding-right
                />
                {searchTerm && (
                    <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-8 text-black"
                    >
                        ✕
                    </button>
                )}
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentConstructors.map((constructor, index) => (
                    <Link to={`/${rowCategory}/${createSlug(constructor.Name)}`} key={index} className="w-full">
                        <div
                            className="bg-gray-800 p-6 border-2 hover:border-black border-purple-700 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{constructor.Name}</h2>
                            <div className='flex items-center'>
                                <img className="w-4 h-4 mr-2" src="/logos/address.svg" alt="Address:" />
                                <p className="text-gray-300">{constructor.Address}</p>
                            </div>
                            <div className='flex items-center mt-2'>
                                <img className="w-4 h-4 mr-2" src="/logos/call.svg" alt="Contact:" />
                                <p className="text-gray-400">{constructor.Contact}</p>
                            </div>
                            <div className="mt-2 flex justify-center w-1/2 items-center py-1 border border-green-500 text-green-500 rounded-full text-sm">
                                <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45ZM12.0011 13.46C10.2611 13.46 8.85107 12.05 8.85107 10.31C8.85107 8.57 10.2611 7.16 12.0011 7.16C13.7411 7.16 15.1511 8.57 15.1511 10.31C15.1511 12.05 13.7411 13.46 12.0011 13.46Z" fill="#3F9C6E"></path> </g></svg>
                                <p className='font-semibold'>{constructor.Location}</p>
                            </div>
                        </div>
                    </Link>
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
