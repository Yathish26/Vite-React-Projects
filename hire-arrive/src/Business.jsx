import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Business() {
    const [details, setDetails] = useState(null); // Changed to null for loading state
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('https://hire-arrive-server.onrender.com/api/auth/user', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setDetails(response.data); // Set user data from the response
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };
        fetchUserData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-[80vh] bg-gray-900 text-white flex justify-center items-center p-6">
                <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-8">
                    {/* Shimmer Effect */}
                    <div className="animate-pulse space-y-4">
                        <div className="flex items-center mb-8">
                            <div className="w-24 h-24 rounded-full bg-gray-700 flex-shrink-0"></div>
                            <div className="ml-6">
                                <div className="h-6 bg-gray-700 rounded w-48 mb-2"></div>
                                <div className="h-4 bg-gray-600 rounded w-32"></div>
                            </div>
                        </div>
                        <div className="space-y-4">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="flex items-center justify-between">
                                    <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                                    <div className="h-4 bg-gray-600 rounded w-1/3"></div>
                                </div>
                            ))}
                            <div className="mt-8">
                                <div className="h-6 bg-gray-700 rounded w-48 mb-2"></div>
                                <div className="h-4 bg-gray-600 rounded w-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-[80vh] bg-gray-900 text-white flex justify-center items-center p-6">
            <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-lg p-8">
                {/* Header Section */}
                <div className="flex items-center mb-8">
                    <div className="w-24 h-24 rounded-full bg-purple-500 flex-shrink-0 flex items-center justify-center">
                        <span className="text-4xl font-semibold text-gray-100">B</span>
                    </div>
                    <div className="ml-6">
                        <h1 className="text-3xl font-bold text-purple-500">{details.businessName}</h1>
                        <p className="text-gray-400">{details.email}</p>
                    </div>
                </div>

                {/* Details Section */}
                <div className="space-y-4">
                    {details.location && (
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 font-semibold">Service Location:</span>
                            <span className="text-gray-400">{details.location}</span>
                        </div>
                    )}
                    {details.streetAddress && (
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 font-semibold">Street Address:</span>
                            <span className="text-gray-400">{details.streetAddress}</span>
                        </div>
                    )}
                    {details.city && (
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 font-semibold">City:</span>
                            <span className="text-gray-400">{details.city}</span>
                        </div>
                    )}
                    {details.state && (
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 font-semibold">State/Province:</span>
                            <span className="text-gray-400">{details.state}</span>
                        </div>
                    )}
                    {details.zipCode && (
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 font-semibold">Zip/Postal Code:</span>
                            <span className="text-gray-400">{details.zipCode}</span>
                        </div>
                    )}
                    {details.phoneNumber && (
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 font-semibold">Phone:</span>
                            <span className="text-gray-400">{details.phoneNumber}</span>
                        </div>
                    )}
                    {details.inplaceShop && (
                        <div className="flex items-center justify-between">
                            <span className="text-gray-300 font-semibold">In-Place Shop:</span>
                            <span className="text-gray-400">{details.inplaceShop}</span>
                        </div>
                    )}
                </div>

                {/* About Section */}
                {details.description && (
                    <div className="mt-8">
                        <h2 className="text-2xl font-semibold text-purple-500 mb-4">About the Business</h2>
                        <p className="text-gray-300 leading-relaxed">
                            {details.description}
                        </p>
                    </div>
                )}

                {/* Footer/Action Buttons */}
                <div className="mt-8 flex justify-end space-x-4">
                    <Link to={'/listing'}>
                        <button className="px-4 py-2 bg-purple-500 text-white rounded-lg shadow hover:bg-purple-600 focus:ring-4 focus:ring-purple-300">
                            Edit Profile
                        </button>
                    </Link>
                    <button className="px-4 py-2 bg-gray-700 text-white rounded-lg shadow hover:bg-gray-600 focus:ring-4 focus:ring-gray-400">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
}
