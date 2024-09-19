import React, { useState } from 'react';

export default function Text2speech() {
  const [text, setText] = useState('');

  const handleSpeech = () => {
    if (text) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    }
  };

  return (
    <div className="min-h-screen w-screen flex flex-col items-center mo:justify-start justify-center bg-gradient-to-r from-blue-900 to-blue-600 p-6">
      <div className="mo:mt-12 bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Text to Speech Converter</h1>
        
        <textarea
          className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-6"
          rows="6"
          placeholder="Type something here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <button
          className="w-full py-3 text-lg font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 ease-in-out"
          onClick={handleSpeech}
        >
          Convert to Speech
        </button>
      </div>
    </div>
  );
}
