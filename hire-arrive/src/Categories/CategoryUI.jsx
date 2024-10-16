import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { useLocation } from 'react-router-dom';
import services from '../categories';

export default function CategoryUI() {
    const [constructors, setConstructors] = useState([]);
    const url = useLocation();
    const currentCategory = url.pathname.split('/')[1];

    // Get category based on current URL path
    const rowCategory = Object.values(services).find(serv => serv.location === `/${currentCategory}`)?.alias;

    useEffect(() => {
        fetch('/data/Categories Data - Data.csv')
            .then((response) => response.text())
            .then((data) => {
                Papa.parse(data, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (result) => {
                        // Filter by the dynamic category
                        const filteredData = result.data.filter((row) => row.Category === rowCategory);
                        setConstructors(filteredData);
                    },
                });
            });
    }, [rowCategory]);  // Added rowCategory as a dependency to rerun when it changes

    return (
        <div className="min-h-screen bg-gray-700 text-white p-8">
            <h1 className="text-4xl font-bold text-purple-700 mb-6 text-center">{rowCategory} Listings</h1>
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
