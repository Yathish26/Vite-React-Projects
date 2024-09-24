import React from 'react';

export default function AboutUs() {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-8 px-4">
            <div className="container mx-auto">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">About Us</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        Welcome to our company! We are dedicated to providing exceptional service and quality. Our team is committed to exceeding your expectations and delivering outstanding results.
                    </p>
                </section>

                {/* Our Mission */}
                <section className="mb-12">
                    <h2 className="text-3xl text-center font-semibold mb-6">Our Mission</h2>
                    <p className="text-lg max-w-2xl mx-auto">
                        Our mission is to revolutionize the industry with innovative solutions and exceptional service. We strive to be leaders in our field and create lasting impacts through our work.
                    </p>
                </section>

                {/* Our Team */}
                <section className="mb-12">
                    <h2 className="text-3xl text-center font-semibold mb-6">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <img src="/creator_images/yathish.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full object-cover mx-auto mb-4"/>
                            <h3 className="text-xl text-center font-semibold mb-2">Yathish Acharya</h3>
                            <p className="text-gray-400 text-center">Building</p>
                            <p className="mt-4">Yathish is Building Hire Arrive Adding New Features and making it upto date from Bugs</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <img src="/creator_images/justin.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full object-cover mx-auto mb-4"/>
                            <h3 className="text-xl text-center font-semibold mb-2">Justin D'souza</h3>
                            <p className="text-center text-gray-400">Marketing</p>
                            <p className="mt-4">Justin Leads the Marketing of Hire Arrive getting us more reach and customers and elightening the sales</p>
                        </div>
                    </div>
                </section>

                {/* Our Values */}
                <section className="mb-12">
                    <h2 className="text-3xl font-semibold mb-6">Our Values</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2">Integrity</h3>
                            <p className="text-gray-400">We uphold the highest standards of integrity in all of our actions and decisions.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2">Innovation</h3>
                            <p className="text-gray-400">We embrace creativity and innovation to deliver cutting-edge solutions to our clients.</p>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2">Excellence</h3>
                            <p className="text-gray-400">We are committed to providing exceptional service and quality in everything we do.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
