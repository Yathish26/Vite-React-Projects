import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import services from '../Editable Tool/categories';
import LoadingSpinner from '../smallcomponents/Loading';

export default function CategoryUI() {
    const [constructors, setConstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMoreData, setHasMoreData] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [noResults, setNoResults] = useState(false);
    const [address, setAddress] = useState("");
    const itemsPerPage = 10;
    const location = useLocation();
    const currentCategory = location.pathname.split('/')[1];
    const alias = Object.values(services).find(serv => serv.location === `/${currentCategory}`)?.alias;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setNoResults(false);

            const start = (currentPage - 1) * itemsPerPage;
            const end = start + itemsPerPage;
            let url = `https://hire-arrive-server.onrender.com/maxim26/data?Category=${alias}&Entries=${start}-${end}`;

            if (searchTerm) url += `&Name=${searchTerm}`;
            if (address) url += `&Address=${address}`;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                if (currentPage === 1) {
                    setConstructors(data);
                } else {
                    setConstructors(prev => [...prev, ...data]);
                }

                if (data.length < itemsPerPage) {
                    setHasMoreData(false);
                } else {
                    setHasMoreData(true);
                }
                setNoResults(data.length === 0);
            } catch (error) {
                setNoResults(true);
                console.error = () => {};
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [alias, currentPage, searchTerm, address]);

    useEffect(() => {
        setConstructors([]);
        setCurrentPage(1);
        setHasMoreData(true);
    }, [searchTerm, address]);

    const handleNextPage = () => {
        if (hasMoreData && !loading) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const createSlug = (name, id) => `${name.toLowerCase().replace(/\s+/g, '-')}*${id}`;

    return (
        <div className="min-h-screen font-spartan text-xl bg-gray-900 text-white p-8">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">{alias}</h1>

            <div className="flex justify-center mo:flex-col items-center gap-4 relative mb-10">
                <input
                    type="text"
                    placeholder="Search ..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value.trimStart())}
                    className="p-3 w-full md:w-1/4 text-black rounded-3xl pr-10"
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value.trimStart())}
                    className="p-3 w-full md:w-1/4 text-black rounded-3xl pr-10"
                />
            </div>

            {noResults ? (
                <div className="flex justify-center items-center"> 
                    <div className="flex flex-col w-60 items-center mt-4 p-4 bg-gray-800 border border-gray-600 rounded-md shadow-md">
                        <svg
                            className="w-10 h-10 mb-2 text-yellow-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                        </svg>
                        <p className="text-lg font-semibold text-gray-300">No results found.</p>
                        <p className="text-sm text-gray-500">Please try a different search.</p>
                    </div>
                </div>
            ):

            (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {constructors.map((constructor, index) => (
                    <Link to={`/${currentCategory}/${createSlug(constructor.Name, constructor._id)}`} key={index} className="w-full">
                        <div className="bg-gray-800 p-6 border-2 hover:border-black border-purple-700 rounded-xl shadow-lg hover:bg-purple-700 transition duration-300">
                            <h2 className="text-2xl font-semibold mb-2">{constructor.Name}</h2>
                            <div className='flex items-center'>
                                <img className="w-4 h-4 mr-2" src="/logos/address.svg" alt="Address:" />
                                <p className="text-gray-300">{constructor.Address}</p>
                            </div>
                            <div className="mt-2 h-fit flex justify-center gap-1 w-fit px-2 py-1 items-center border border-green-500 text-green-500 rounded-full text-sm">
                                <svg className='w-4 h-4' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M20.6211 8.45C19.5711 3.83 15.5411 1.75 12.0011 1.75C12.0011 1.75 12.0011 1.75 11.9911 1.75C8.46107 1.75 4.42107 3.82 3.37107 8.44C2.20107 13.6 5.36107 17.97 8.22107 20.72C9.28107 21.74 10.6411 22.25 12.0011 22.25C13.3611 22.25 14.7211 21.74 15.7711 20.72C18.6311 17.97 21.7911 13.61 20.6211 8.45ZM12.0011 13.46C10.2611 13.46 8.85107 12.05 8.85107 10.31C8.85107 8.57 10.2611 7.16 12.0011 7.16C13.7411 7.16 15.1511 8.57 15.1511 10.31C15.1511 12.05 13.7411 13.46 12.0011 13.46Z" fill="#3F9C6E"></path></g></svg>
                                <p className='font-semibold text-base'>{constructor.Location}</p>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>)}

            {!noResults && !loading &&
            (<div className="flex justify-center items-center mt-8">
                <button
                    onClick={handleNextPage}
                    disabled={!hasMoreData || loading}
                    className={`px-4 py-2 mx-1 bg-gray-600 rounded ${!hasMoreData ? 'cursor-not-allowed opacity-50' : 'hover:bg-purple-500'}`}
                >
                    Load More
                </button>
            </div>)}
            {loading ? <LoadingSpinner /> : null}
        </div>
    );
}
