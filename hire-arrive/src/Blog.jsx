import React, { useEffect } from 'react';

export default function Blog() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="bg-gray-900 text-white min-h-screen py-8 px-4">
            <div className="container mx-auto">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                    <p className="text-lg max-w-3xl mx-auto">
                        Stay updated with our latest news, articles, and insights. Explore our blog to find information on various topics that matter to you.
                    </p>
                </section>

                {/* Blog Posts */}
                <section>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {/* Example Blog Post */}
                        <article className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Blog Post Title 1</h2>
                            <p className="text-gray-400 mb-4">
                                A brief introduction to the content of the blog post. This summary should entice readers to click and read more.
                            </p>
                            <a href="#" className="text-purple-400 hover:underline">Read More</a>
                        </article>

                        <article className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Blog Post Title 2</h2>
                            <p className="text-gray-400 mb-4">
                                A brief introduction to the content of the blog post. This summary should entice readers to click and read more.
                            </p>
                            <a href="#" className="text-purple-400 hover:underline">Read More</a>
                        </article>

                        <article className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4">Blog Post Title 3</h2>
                            <p className="text-gray-400 mb-4">
                                A brief introduction to the content of the blog post. This summary should entice readers to click and read more.
                            </p>
                            <a href="#" className="text-purple-400 hover:underline">Read More</a>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    );
}
