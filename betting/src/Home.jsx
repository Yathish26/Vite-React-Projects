import React from 'react';

export default function Home() {
  const sports = {
    'Football': '/sports/football.svg',
    'Basketball': '/sports/basketball.svg',
    'Tennis': '/sports/tennis.svg',
    'Rugby': '/sports/rugby.svg',
    'Cricket': '/sports/cricket.svg',
    'Golf': '/sports/golf.svg',
    'Volleyball': '/sports/volleyball.svg',
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <div className="container mx-auto py-10 px-6">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-green-500 mb-4">Welcome to Playwin Bet</h1>
          <p className="text-xl text-gray-300">Your trusted online sports betting platform</p>
        </section>

        {/* Categories Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Bet on Your Favorite Sports</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 gap-6 md:gap-8">
            {Object.entries(sports).map(([sport, icon]) => (
              <div key={sport} className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300">
                <div className="flex items-center justify-center mb-4">
                  <img src={icon} alt={sport} className="h-16 w-16" />
                </div>
                <h3 className="text-xl font-semibold text-green-400 text-center">{sport}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Betting Panel */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-green-400 mb-8">Live Betting Panel</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-green-300 mb-6">Football: Manchester United vs. Chelsea</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-xl text-green-300 mb-4">Bookie Rates</h4>
                <ul className="space-y-4">
                  <li className="text-gray-400">Manchester United: <span className="text-green-500 font-bold">2.5</span></li>
                  <li className="text-gray-400">Draw: <span className="text-green-500 font-bold">3.0</span></li>
                  <li className="text-gray-400">Chelsea: <span className="text-green-500 font-bold">2.8</span></li>
                </ul>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-xl text-green-300 mb-4">Your Bet</h4>
                <form>
                  <label className="block text-gray-400 mb-2">Select Team</label>
                  <select className="w-full bg-gray-900 text-white p-2 rounded mb-4">
                    <option>Manchester United</option>
                    <option>Draw</option>
                    <option>Chelsea</option>
                  </select>
                  <label className="block text-gray-400 mb-2">Bet Amount</label>
                  <input
                    type="number"
                    className="w-full bg-gray-900 text-white p-2 rounded mb-4"
                    placeholder="Enter amount"
                  />
                  <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-300">
                    Place Bet
                  </button>
                </form>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h4 className="font-bold text-xl text-green-300 mb-4">Potential Winnings</h4>
                <p className="text-gray-400">Based on your selected bet, your potential winnings will be calculated automatically.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
