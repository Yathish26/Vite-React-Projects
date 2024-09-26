import React, { useState, useRef, useEffect, useCallback } from 'react';

export default function Snake() {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [snake, setSnake] = useState([{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }]);
  const [food, setFood] = useState({});
  const [dx, setDx] = useState(1);
  const [dy, setDy] = useState(0);
  const [isGameActive, setIsGameActive] = useState(false);

  const gridSize = 20; // Each square in the grid is 20x20 pixels
  const canvasWidth = 400;
  const canvasHeight = 400;
  const rows = canvasHeight / gridSize;
  const columns = canvasWidth / gridSize;

  // Reset the game
  const resetGame = () => {
    setSnake([{ x: 5, y: 5 }, { x: 4, y: 5 }, { x: 3, y: 5 }]);
    setDx(1);
    setDy(0);
    setFood({ x: Math.floor(Math.random() * columns), y: Math.floor(Math.random() * rows) });
    setScore(0);
    setGameOver(false);
    setIsGameActive(true);
    gameLoop();
  };

  // Draw the snake on the canvas
  const drawSnake = useCallback((ctx) => {
    ctx.fillStyle = 'green';
    snake.forEach((part) => {
      ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
    });
  }, [snake]);

  // Draw the food on the canvas
  const drawFood = useCallback((ctx) => {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
  }, [food]);

  // Move the snake
  const moveSnake = () => {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };

    // Check for collisions with walls or self
    if (head.x < 0 || head.x >= columns || head.y < 0 || head.y >= rows || snake.some((part) => part.x === head.x && part.y === head.y)) {
      setGameOver(true);
      setIsGameActive(false);
      return;
    }

    setSnake((prevSnake) => {
      const newSnake = [head, ...prevSnake];

      if (head.x === food.x && head.y === food.y) {
        setScore((prevScore) => prevScore + 1);
        setFood({ x: Math.floor(Math.random() * columns), y: Math.floor(Math.random() * rows) });
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  };

  // Draw the game state
  const drawGame = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood(ctx);
    drawSnake(ctx);

    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText(`Score: ${score}`, 10, 20);

    if (gameOver) {
      ctx.fillStyle = 'white';
      ctx.font = '40px Arial';
      ctx.fillText('Game Over', canvas.width / 4, canvas.height / 2);
    }
  };

  // Main game loop
  const gameLoop = () => {
    if (isGameActive) {
      moveSnake();
      drawGame();
      setTimeout(gameLoop, 100); // Control game speed
    }
  };

  // Handle direction changes
  const changeDirection = (event) => {
    const keyPressed = event.key;
    if (keyPressed === 'ArrowUp' && dy === 0) {
      setDx(0);
      setDy(-1);
    }
    if (keyPressed === 'ArrowDown' && dy === 0) {
      setDx(0);
      setDy(1);
    }
    if (keyPressed === 'ArrowLeft' && dx === 0) {
      setDx(-1);
      setDy(0);
    }
    if (keyPressed === 'ArrowRight' && dx === 0) {
      setDx(1);
      setDy(0);
    }
  };

  useEffect(() => {
    // Start listening for direction changes
    document.addEventListener('keydown', changeDirection);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('keydown', changeDirection);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">Snake Game</h1>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ display: isGameActive || gameOver ? 'block' : 'none', border: '1px solid black' }}
      />
      <button
        onClick={resetGame}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600"
        style={{ display: isGameActive ? 'none' : 'block' }}
      >
        Play Game
      </button>
      {gameOver && (
        <button
          onClick={resetGame}
          className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
        >
          Play Again
        </button>
      )}
    </div>
  );
}