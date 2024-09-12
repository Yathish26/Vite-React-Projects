import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Sports() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=au&markets=h2h&apiKey=13b9302749086cca833ee7cbeaec500d')
        .then(res => {
            setData(res.data);
        })
        .catch(error => {
            console.log('Error fetching Data:', error);
        });
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Upcoming Sports Matches</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((sport) => (
                    <div key={sport.id} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-500">
                        <h3 className="text-xl font-semibold text-green-600 mb-2">{sport.sport_title}</h3>
                        <p className="text-gray-700">
                            <span className="font-medium">Match:</span> {sport.home_team} vs {sport.away_team}
                        </p>
                        <p className="text-gray-600 mb-4">
                            <span className="font-medium">Commence Time:</span> {new Date(sport.commence_time).toLocaleString()}
                        </p>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-2">Bookmakers</h4>
                            {sport.bookmakers.map((bookmaker) => (
                                <div key={bookmaker.key} className="mb-4">
                                    <h5 className="text-md font-medium text-green-700">{bookmaker.title}</h5>
                                    <p className="text-gray-600 mb-2">
                                        <span className="font-medium">Last Update:</span> {new Date(bookmaker.last_update).toLocaleString()}
                                    </p>
                                    <h6 className="text-md font-semibold text-gray-800">Markets</h6>
                                    {bookmaker.markets.map((market) => (
                                        <div key={market.key} className="pl-4">
                                            <h6 className="text-sm font-medium text-gray-700">Market: {market.key.toUpperCase()}</h6>
                                            {market.outcomes.map((outcome, index) => (
                                                <p key={index} className="text-gray-600">
                                                    <span className="font-medium">{outcome.name}:</span> {outcome.price}
                                                </p>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
