import React, { useState } from 'react';

export default function Gamble() {
    const [balance, setBalance] = useState(1000); // Starting balance
    const [betAmount, setBetAmount] = useState('');
    const [selectedColor, setSelectedColor] = useState(null);
    const [spinResult, setSpinResult] = useState(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [betmessage, setBetMessage] = useState('');

    const colors = ['red', 'blue', 'green', 'yellow'];

    // Function to handle the spin
    const handleSpin = () => {
        if (!betAmount || !selectedColor || betAmount <= 0) {
            setBetMessage('Please enter a valid bet amount and select a color.');
            return;
        }
        if (betAmount > balance) {
            setBetMessage('Insufficient balance!');
            return;
        }

        setIsSpinning(true);

        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        setTimeout(() => {
            setSpinResult(randomColor);
            if (randomColor === selectedColor) {
                setBetMessage('You won!');
                setTimeout(() => {
                    setBetMessage('');
                },1000);
                setBalance(balance + betAmount * 2);
            } else {
                setBetMessage('You lost!');
                setTimeout(() => {
                    setBetMessage('');
                },1000)
                setBalance(balance - betAmount);
            }
            setIsSpinning(false);
        }, 2000); // Simulates spinning time
    };

    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-4xl font-bold mb-4">Gamble Spin</h1>

            {/* Balance Display */}
            <div className="text-xl mb-4">
                Balance: <span className="font-bold">${balance}</span>
            </div>

            {/* Spin Wheel */}
            <div className={`w-64 h-64 rounded-full mt-8 flex items-center justify-center ${isSpinning ? 'animate-spin' : ''} ${spinResult && `bg-${spinResult}-500`}`}  >
                <h2 className="text-2xl font-bold">{spinResult ? spinResult : 'Spin'}</h2>
            </div>

            {/* Bet Controls */}
            <div className="mt-8">
                <p>{betmessage}</p>
                <input
                    type="number"
                    placeholder="Enter bet amount"
                    value={betAmount}
                    onChange={(e) => setBetAmount((e.target.value))}
                    className="p-2 rounded-md text-black w-48 mb-4"
                />

                <div className="mb-4">
                    <h3 className="text-lg mb-2">Select Color:</h3>
                    <div className="flex space-x-4">
                        {colors.map((color) => (
                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-12 h-12 rounded-full bg-${color}-500 border-4 ${selectedColor === color ? 'border-white' : 'border-transparent'}`}
                            ></button>
                        ))}
                    </div>
                </div>

                <button
                    onClick={handleSpin}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-bold"
                    disabled={isSpinning}
                >
                    {isSpinning ? 'Spinning...' : 'Spin'}
                </button>
            </div>
        </div>
    );
}
