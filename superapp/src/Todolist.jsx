import React, { useState } from 'react';

export default function Todolist() {
  let [tasks, setTasks] = useState([]);
  let [newTasks, setNewTasks] = useState('');

  function handleInputChange(event) {
    setNewTasks(event.target.value);
  }

  function addTasks() {
    if (newTasks.trim() !== '') {
      setTasks([...tasks, newTasks]);
      setNewTasks('');
    }
  }

  function deleteTasks(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = 
      [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = 
      [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center p-4">
      <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">To Do List</h1>
        <div className="flex items-center mb-6">
          <input 
            value={newTasks} 
            onChange={handleInputChange} 
            className="flex-grow bg-gray-800 bg-opacity-50 text-white placeholder-gray-400 rounded-l-lg py-3 px-4 outline-none focus:ring-2 focus:ring-indigo-500" 
            type="text" 
            placeholder="Enter a task" 
          />
          <button 
            onClick={addTasks} 
            className="bg-yellow-400 text-white rounded-r-lg px-6 py-3 hover:bg-yellow-500 transition-colors duration-300"
          >
            <img src="icons/add.svg" alt="Add" className="w-5 h-5" />
          </button>
        </div>
        <ul className="space-y-4">
          {tasks.map((task, index) => (
            <li 
              className="flex justify-between items-center bg-gray-800 bg-opacity-50 text-white p-4 rounded-lg shadow-md"
              key={index}
            >
              {task}
              <div className="flex gap-2">
                <button 
                  onClick={() => deleteTasks(index)} 
                  className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  <img src="icons/delete.svg" alt="Delete" className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => moveTaskUp(index)} 
                  className="bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                >
                  <img src="icons/up.svg" alt="Up" className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => moveTaskDown(index)} 
                  className="bg-yellow-500 text-white p-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                >
                  <img src="icons/down.svg" alt="Down" className="w-5 h-5" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
