import React, { useState } from 'react'

export default function Passwordgenerator() {
    let [uppercase, setUppercase] = useState(false);
    let [lowercase, setLowercase] = useState(false);
    let [numbers, setNumbers] = useState(false);
    let [symbols, setSymbols] = useState(false);
    let [pass, setPass] = useState('')
    let [length, setLength] = useState(10);
    let [copy, setCopy] = useState('Copy');

    let UC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LC = 'abcdefghijklmnopqrstuvwxyz';
    let NUMS = '0123456789';
    let SYMS = '!@#$%^&*()_+';

    const generatePass = () => {
        let rdata = ''
        let finaldata = ''
        if (uppercase === false && lowercase === false && numbers === false && symbols === false) {
            alert('Please select atleast one option')
        } else {
            if (uppercase) rdata += UC
            if (lowercase) rdata += LC
            if (numbers) rdata += NUMS
            if (symbols) rdata += SYMS
            for (let i = 0; i < length; i++) {
                finaldata += rdata[Math.floor(Math.random() * rdata.length)]
            }
            setPass(finaldata)
        }
    }

    const Copies = () => {
        navigator.clipboard.writeText(pass)
        setCopy('Copied')
        setTimeout(() => setCopy('Copy'), 1000)
    }

    return (
        <>
            <div className="mo:items-start min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center p-4">
                <div className="mt-12 bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Password Generator</h1>
                    <div className="flex items-center mb-4">
                        <input
                            className="border border-gray-300 rounded-l-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={pass}
                            type="text"
                            readOnly
                        />
                        <button
                            className="border border-gray-300 bg-gray-200 rounded-r-md p-2 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
                            onClick={Copies}
                        >
                            {copy}
                        </button>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Password Length</label>
                        <input
                            className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={length}
                            onChange={(e) => setLength(e.target.value)}
                            type="range"
                            min={10}
                            max={30}
                        />
                        <div className="text-gray-700 text-sm mt-2">Length: {length}</div>
                    </div>

                    <div className="space-y-3 mb-4">
                        <div className="flex items-center space-x-2">
                            <input
                                id="uppercase-checkbox"
                                className="appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-purple-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 cursor-pointer"
                                type="checkbox"
                                checked={uppercase}
                                onChange={() => setUppercase(!uppercase)}
                            />
                            <label htmlFor="uppercase-checkbox" className="text-gray-700 cursor-pointer select-none">Include Uppercase</label>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center space-x-2">
                                <input
                                    id="lowercase-checkbox"
                                    className="appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-purple-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 cursor-pointer"
                                    type="checkbox"
                                    checked={lowercase}
                                    onChange={() => setLowercase(!lowercase)}
                                />
                                <label htmlFor="lowercase-checkbox" className="text-gray-700 cursor-pointer select-none">Include Lowercase</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    id="numbers-checkbox"
                                    className="appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-purple-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 cursor-pointer"
                                    type="checkbox"
                                    checked={numbers}
                                    onChange={() => setNumbers(!numbers)}
                                />
                                <label htmlFor="numbers-checkbox" className="text-gray-700 cursor-pointer select-none">Include Numbers</label>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    id="symbols-checkbox"
                                    className="appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-purple-500 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-200 cursor-pointer"
                                    type="checkbox"
                                    checked={symbols}
                                    onChange={() => setSymbols(!symbols)}
                                />
                                <label htmlFor="symbols-checkbox" className="text-gray-700 cursor-pointer select-none">Include Symbols</label>
                            </div>
                        </div>
                    </div>
                    <button
                        className="w-full bg-gradient-to-r from-purple-600 to-red-500 text-white p-3 rounded-lg shadow-md hover:from-purple-700 hover:to-red-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        onClick={generatePass}
                    >
                        Generate
                    </button>
                </div>
            </div>
        </>
    )
}

