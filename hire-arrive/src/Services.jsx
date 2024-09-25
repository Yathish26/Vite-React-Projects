import React, { useEffect } from 'react';

export default function Services() {
    const services = [
        "Business Registration",
        "Consulting Services",
        "Website Development",
        "Digital Marketing",
        "Brand Design",
        "Customer Support",
        "IT Solutions"
        // Add more services here as needed
    ];

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    return (
        <div className="bg-gray-900 text-white min-h-screen py-8 px-4">
            <div className="container mx-auto">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        Explore the wide range of services we offer to help you grow and succeed. Our team is dedicated to providing top-notch solutions tailored to your needs.
                    </p>
                </section>

                {/* Services List */}
                <section>
                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4"
                            >
                                <div className="flex-shrink-0">
                                    <svg
                                        className="w-8 h-8 text-purple-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M3 10h6v11H3zm7 0h6v11h-6zm7 0h6v11h-6z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-semibold">{service}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
