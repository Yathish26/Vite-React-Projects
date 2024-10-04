import React from 'react';

export default function Games() {
  const games = [
    { id: 1, title: 'Snake Xenzia', img: '/gameimages/snake.jpg' },
    { id: 2, title: 'Game Two', img: 'https://via.placeholder.com/150' },
    { id: 3, title: 'Game Three', img: 'https://via.placeholder.com/150' },
    { id: 4, title: 'Game Four', img: 'https://via.placeholder.com/150' },
    { id: 5, title: 'Game Five', img: 'https://via.placeholder.com/150' },
    { id: 6, title: 'Game Six', img: 'https://via.placeholder.com/150' },
    { id: 7, title: 'Game Seven', img: 'https://via.placeholder.com/150' },
    { id: 8, title: 'Game Eight', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 p-6 flex items-center justify-center">
      <div className=" bg-white/30 backdrop-blur-md" />
      <div className="relative z-10 container flex flex-col items-center mx-auto">
        <img className='w-48 h-48' src="/icons/gamehill.svg" alt="" />
        <h1 className="text-5xl font-bold  text-white my-10 drop-shadow-lg">Game Store</h1>
        <p className=' text-white'>(Currently Under Progress will update soon)</p>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {games.map((game) => (
            <div key={game.id} className="bg-white/70 shadow-lg rounded-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 backdrop-blur-md">
              <img
                src={game.img}
                alt={game.title}
                className="w-32 h-32 object-cover rounded-lg mb-4 shadow-md"
              />
              <h3 className="text-xl font-semibold mb-2 text-center text-gray-800">{game.title}</h3>
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">
                Play Now
              </button>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
