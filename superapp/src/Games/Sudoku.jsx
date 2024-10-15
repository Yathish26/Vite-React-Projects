import React, { useEffect, useState } from 'react';

// Utility functions for generating the Sudoku puzzle
const generateEmptyGrid = () => {
  return Array.from({ length: 9 }, () => Array(9).fill(0));
};

const fillDiagonalBoxes = (grid) => {
  for (let i = 0; i < 9; i += 3) {
    fillBox(grid, i, i);
  }
};

const fillBox = (grid, row, col) => {
  let usedNumbers = new Set();
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let num;
      do {
        num = Math.floor(Math.random() * 9) + 1;
      } while (usedNumbers.has(num));
      usedNumbers.add(num);
      grid[row + i][col + j] = num;
    }
  }
};

const fillGrid = (grid) => {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col] === 0) {
        for (let num = 1; num <= 9; num++) {
          if (isSafe(grid, row, col, num)) {
            grid[row][col] = num;
            if (fillGrid(grid)) {
              return true;
            }
            grid[row][col] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
};

const isSafe = (grid, row, col, num) => {
  for (let x = 0; x < 9; x++) {
    if (grid[row][x] === num || grid[x][col] === num) {
      return false;
    }
  }
  const startRow = row - (row % 3);
  const startCol = col - (col % 3);
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (grid[startRow + i][startCol + j] === num) {
        return false;
      }
    }
  }
  return true;
};

const createSudokuPuzzle = () => {
  const grid = generateEmptyGrid();
  fillDiagonalBoxes(grid);
  fillGrid(grid);
  return grid;
};

const removeNumbers = (grid, count = 40) => {
  while (count > 0) {
    const row = Math.floor(Math.random() * 9);
    const col = Math.floor(Math.random() * 9);
    if (grid[row][col] !== 0) {
      grid[row][col] = 0;
      count--;
    }
  }
  return grid;
};

export default function Sudoku() {
  const [sudokuGrid, setSudokuGrid] = useState([]);
  const [userInput, setUserInput] = useState(Array(9).fill(Array(9).fill('')));
  const [message, setMessage] = useState('');

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newGrid = createSudokuPuzzle();
    const puzzle = removeNumbers(newGrid.map((row) => [...row]));
    setSudokuGrid(puzzle);
    setUserInput(Array(9).fill(Array(9).fill('')));
    setMessage('');
  };

  const handleInputChange = (row, col, value) => {
    if (!/^[1-9]$/.test(value) && value !== '') return;
    const updatedInput = userInput.map((r, i) =>
      i === row ? r.map((c, j) => (j === col ? value : c)) : r
    );
    setUserInput(updatedInput);
  };

  const checkSolution = () => {
    const isCorrect = userInput.every((row, i) =>
      row.every((num, j) => num === sudokuGrid[i][j] || sudokuGrid[i][j] === 0)
    );
    setMessage(isCorrect ? 'Congratulations! You completed the puzzle!' : 'Incorrect solution, try again.');
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-2xl font-bold mb-6">Sudoku Game</h1>
      <div className="grid grid-cols-9 gap-1 mb-6">
        {sudokuGrid.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              value={userInput[rowIndex][colIndex] || (cell !== 0 ? cell : '')}
              onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
              disabled={cell !== 0}
              maxLength={1}
              className={`w-10 h-10 text-center border border-gray-300 rounded-md text-xl focus:outline-none ${
                cell !== 0 ? 'bg-gray-200' : 'bg-white'
              }`}
            />
          ))
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={checkSolution}
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
        >
          Submit
        </button>
        <button
          onClick={startNewGame}
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded hover:bg-green-600"
        >
          New Game
        </button>
      </div>
      {message && <p className="text-lg mt-4">{message}</p>}
    </div>
  );
}
