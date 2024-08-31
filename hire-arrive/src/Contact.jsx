import React from 'react';

export default function Contact() {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-8 px-4">
            <div className="container mx-auto">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        We’d love to hear from you! Whether you have questions, feedback, or just want to get in touch, feel free to reach out to us.
                    </p>
                </section>

                {/* Contact Information */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Address</h3>
                            <p className="text-gray-400">1234 Your Street, Your City, Your Country</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
                            <p className="text-gray-400">+123 456 7890</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Email Address</h3>
                            <p className="text-gray-400">
                                <a href="mailto:info@yourdomain.com" className="text-purple-400 hover:underline">info@yourdomain.com</a>
                            </p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Facebook</a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Twitter</a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">LinkedIn</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section>
                    <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
                    <form className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" rows="6" className="w-full p-3 bg-gray-700 text-white rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500" required></textarea>
                        </div>
                        <button type="submit" className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">Send Message</button>
                    </form>
                </section>
            </div>
        </div>
    );
}
