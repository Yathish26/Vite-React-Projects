import React from 'react';
import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <div className="flex items-start justify-center min-h-screen bg-gray-800">
            <div className="flex items-center flex-col">
                <img className='w-1/3 h-1/3 mo:w-3/4 mo:h-3/4' src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404"/>
                <h1 className="text-6xl font-bold text-purple-700 mb-4">404</h1>
                <p className="text-xl text-gray-300 mb-8">Oops! Page Not Found</p>
                <p className="text-gray-400 mo:mx-8 text-center">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <Link to={'/'}>
                    <div className="mt-6 inline-block px-4 py-2 text-white bg-purple-700 hover:bg-purple-600 rounded">
                        Go to Home
                    </div>
                </Link>

            </div>
        </div>
    );
}
