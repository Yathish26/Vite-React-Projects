import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useLocation } from 'react-router-dom';
import services from '../categories';
import LoadingSpinner from '../smallcomponents/Loading';

export default function CategoryUI() {
    const [constructors, setConstructors] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = useLocation();
    const currentCategory = url.pathname.split('/')[1];

    useEffect(()=>{
        window.scrollTo(0, 0)
      },[])

    // Get category based on current URL path
    const rowCategory = Object.values(services).find(serv => serv.location === `/${currentCategory}`)?.alias;

    useEffect(() => {
        const googleSheet = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-SIrG6BIe7bteDoL60lDX1jKgKHNUcLSv_ARXnX-5V_SRsbREQdCf3H3xmqoixS8FOM8MUjyOo44G/pub?output=csv';

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
    }, [rowCategory]);  // Added rowCategory as a dependency to rerun when it changes

    if (loading) {
        return <LoadingSpinner />; // Show spinner while loading
    }

    return (
        <div className="min-h-screen bg-gray-700 text-white p-8">
            <h1 className="text-4xl font-bold text-white mb-6 text-center">{rowCategory} Listings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {constructors.map((constructor, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
                    >
                        <h2 className="text-2xl font-semibold mb-2">{constructor.Name}</h2>
                        <p className="text-gray-300">{constructor.Address}</p>
                        <p className="text-gray-400 mt-2">Contact: {constructor.Contact}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
