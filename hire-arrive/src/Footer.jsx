import React from 'react';
import { Link } from 'react-router-dom';
import Contact from './Editable Tool/contact';

export default function Footer() {
    return (
        <footer className="bg-gray-900 font-spartan text-lg text-white py-8 mo:h-[35rem]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        {/* <p className="mb-2">Address: 1234 Your Street, City, Country</p>
                        <p className="mb-2">Phone: +123 456 7890</p> */}
                        <p className="mb-4">Email: <a href={`mailto:${Contact.email}`} className="text-purple-400 hover:underline">{Contact.email}</a></p>
                        <div className="flex space-x-4">
                            <a href={Contact.Instagram} className="text-purple-400 hover:underline">Instagram</a>
                            <a href={Contact.Linkedin} className="text-purple-400 hover:underline">LinkedIn</a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Navigation</h3>
                        <ul>
                            <li className="mb-2"><Link to="/" className="text-purple-400 hover:underline">Home</Link></li>
                            <li className="mb-2"><Link to="/about" className="text-purple-400 hover:underline">About Us</Link></li>
                            <li className="mb-2"><Link to="/services" className="text-purple-400 hover:underline">Services</Link></li>
                            <li className="mb-2"><Link to="/contact" className="text-purple-400 hover:underline">Contact</Link></li>
                            <li className="mb-2"><Link to="/blog" className="text-purple-400 hover:underline">Blog</Link></li>
                        </ul>
                    </div>

                    {/* Legal Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Legal</h3>
                        <ul>
                            <li className="mb-2"><Link to="/privacy-policy" className="text-purple-400 hover:underline">Privacy Policy</Link></li>
                            <li className="mb-2"><Link to="/terms-of-service" className="text-purple-400 hover:underline">Terms of Service</Link></li>
                            <li className="mb-4">© 2024 Hire Arrive</li>
                        </ul>
                    </div>
                </div>

                
            </div>
        </footer>
    );
}
