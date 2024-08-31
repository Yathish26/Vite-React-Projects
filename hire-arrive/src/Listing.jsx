import React, { useState } from 'react';

export default function Listing() {
    const [formData, setFormData] = useState({
        businessName: '',
        description: '',
        contactEmail: '',
        phoneNumber: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-3xl font-bold text-white mb-6">Register Your Business</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="businessName" className="block text-gray-300 font-semibold mb-2">Business Name</label>
                        <input
                            id="businessName"
                            name="businessName"
                            type="text"
                            value={formData.businessName}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
                            placeholder="Enter your business name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-gray-300 font-semibold mb-2">Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
                            rows="4"
                            placeholder="Describe your business"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contactEmail" className="block text-gray-300 font-semibold mb-2">Contact Email</label>
                        <input
                            id="contactEmail"
                            name="contactEmail"
                            type="email"
                            value={formData.contactEmail}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
                            placeholder="Enter your contact email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-gray-300 font-semibold mb-2">Phone Number</label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-700 rounded-lg bg-gray-900 text-white focus:border-purple-500 focus:outline-none"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
