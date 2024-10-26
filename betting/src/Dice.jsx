import React, { useState } from 'react';

export default function Dicegame() {
  const [balance, setBalance] = useState(1000); // Initial balance
  const [betAmount, setBetAmount] = useState('');
  const [guess, setGuess] = useState('');
  const [diceNumber, setDiceNumber] = useState(null);
  const [message, setMessage] = useState('');

  const rollDice = () => {
    // Random number between 1 and 6
    const randomDice = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomDice);

    // Ensure valid bet and guess
    const bet = parseInt(betAmount);
    const guessedNumber = parseInt(guess);
    if (bet <= 0 || bet > balance || isNaN(bet)) {
      setMessage('Invalid bet amount');
      return;
    }
    if (guessedNumber < 1 || guessedNumber > 6 || isNaN(guessedNumber)) {
      setMessage('Guess a number between 1 and 6');
      return;
    }

    // Check if guessed number matches the dice roll
    if (guessedNumber === randomDice) {
      const newBalance = balance + bet * 2;
      setMessage(`You guessed right! You win $${bet * 2}`);
      setBalance(newBalance);
    } else {
      const newBalance = balance - bet;
      setMessage(`Wrong guess! The dice rolled ${randomDice}. You lose $${bet}`);
      setBalance(newBalance);
    }

    // Clear bet and guess inputs
    setBetAmount('');
    setGuess('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-green-500 mb-6">Dice Game</h1>

      {/* Display Balance */}
      <div className="mb-4 text-xl font-semibold">
        Balance: <span className="text-green-500">${balance}</span>
      </div>

      {/* Input for Bet Amount */}
      <div className="mb-4">
        <label className="text-lg">Bet Amount: </label>
        <input
          type="number"
          value={betAmount}
          onChange={(e) => setBetAmount(e.target.value)}
          className="bg-gray-800 text-white border-2 border-green-500 rounded-md p-2 ml-2 focus:outline-none focus:ring focus:border-green-400"
          placeholder="Enter bet amount"
        />
      </div>

      {/* Input for Guessing the Dice Number */}
      <div className="mb-4">
        <label className="text-lg">Guess the Dice (1-6): </label>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="bg-gray-800 text-white border-2 border-green-500 rounded-md p-2 ml-2 focus:outline-none focus:ring focus:border-green-400"
          placeholder="Enter your guess (1-6)"
        />
      </div>

      {/* Spin Dice Button */}
      <button
        onClick={rollDice}
        className="bg-green-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
      >
        Spin Dice
      </button>

      {/* Display Dice Result */}
      {diceNumber !== null && (
        <div className="mt-6 text-xl">
          Dice rolled: <span className="text-green-500">{diceNumber}</span>
        </div>
      )}

      {/* Display message */}
      {message && (
        <div className="mt-4 text-lg font-semibold text-green-500">{message}</div>
      )}
    </div>
  );
}
