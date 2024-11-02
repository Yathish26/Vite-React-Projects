import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import LoadingSpinner from '../smallcomponents/Loading';
import services from '../Editable Tool/categories';

export default function CategoryUI() {
    const [constructors, setConstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMoreData, setHasMoreData] = useState(true); // Track if there’s more data to load
    const [searchTerm, setSearchTerm] = useState("");
    const itemsPerPage = 10;
    const url = useLocation();
    const currentCategory = url.pathname.split('/')[1];
    const alias = Object.values(services).find(serv => serv.location === `/${currentCategory}`)?.alias;
    const apikey = import.meta.env.VITE_SECURE_KEY;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const cacheKey = `${alias}-${currentPage}`;
            const cachedData = localStorage.getItem(cacheKey);

            if (cachedData) {
                setConstructors(prev => [...prev, ...JSON.parse(cachedData)]);
                setLoading(false);
                return;
            }

            try {
                const start = (currentPage - 1) * itemsPerPage;
                const end = start + itemsPerPage;
                const response = await fetch(`https://hire-arrive-server.onrender.com/${apikey}/data?Category=${alias}&Entries=${start}-${end}`);
                const data = await response.json();

                if (Array.isArray(data) && data.length > 0) {
                    localStorage.setItem(cacheKey, JSON.stringify(data));
                    setConstructors((prevConstructors) => [...prevConstructors, ...data]);
                } else {
                    setHasMoreData(false);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
                setHasMoreData(false);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [alias, currentPage]);

    const handleNextPage = () => {
        if (hasMoreData) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const createSlug = (name, id) => {
        return `${name.toLowerCase().replace(/\s+/g, '-')}*${id}`;
    };

    const filteredConstructors = constructors.filter((constructor) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            constructor.Name.toLowerCase().includes(lowerCaseSearchTerm) ||
            constructor.Address.toLowerCase().includes(lowerCaseSearchTerm) ||
            constructor.Location.toLowerCase().includes(lowerCaseSearchTerm) ||
            constructor.Category.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });

    if (loading && constructors.length === 0) {
        return <LoadingSpinner />;
    }

    return (
        <div className="min-h-screen font-spartan text-xl bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">{alias}</h1>

            <div className="flex justify-center items-center relative mb-10">
                <input
                    type="text"
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value.trimStart())}
                    className="p-3 w-full md:w-1/2 text-black rounded-3xl pr-10"
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
                {filteredConstructors.map((constructor, index) => (
                    <Link to={`/${currentCategory}/${createSlug(constructor.Name, constructor._id)}`} key={index} className="w-full">
                        <div
                            className="bg-gray-800 p-6 border-2 hover:border-black border-purple-700 rounded-xl shadow-lg hover:bg-purple-700 transition duration-300"
                        >
                            <h2 className="text-2xl font-semibold mb-2">{constructor.Name}</h2>
                            <div className='flex items-center'>
                                <img className="w-4 h-4 mr-2" src="/logos/address.svg" alt="Address:" />
                                <p className="text-gray-300">{constructor.Address}</p>
                            </div>
                            <div className="mt-2 h-fit flex justify-center gap-1 w-fit px-2 py-1 items-center  border border-green-500 text-green-500 rounded-full text-sm">
                                <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45ZM12.0011 13.46C10.2611 13.46 8.85107 12.05 8.85107 10.31C8.85107 8.57 10.2611 7.16 12.0011 7.16C13.7411 7.16 15.1511 8.57 15.1511 10.31C15.1511 12.05 13.7411 13.46 12.0011 13.46Z" fill="#3F9C6E"></path></g></svg>
                                <p className='font-semibold text-base'>{constructor.Location}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="flex justify-center items-center mt-8">
                <button
                    onClick={handleNextPage}
                    disabled={!hasMoreData || loading}
                    className={`px-4 py-2 mx-1 bg-gray-600 rounded ${!hasMoreData ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-500'}`}
                >
                    {loading ? ('Loading...') : "Load More"}
                </button>
            </div>
        </div>
    );
} 
