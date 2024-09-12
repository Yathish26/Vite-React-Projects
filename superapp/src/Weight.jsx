import React, { useEffect, useState } from 'react';

export default function Weight() {
    const [unit, setUnit] = useState('kg');
    const [weight, setWeight] = useState('');
    const [convertedWeight, setConvertedWeight] = useState('');
    const [targetUnit, setTargetUnit] = useState('g');

    const conversionRates = {
        mg: 1,
        cg: 10,
        dg: 100,
        g: 1000,
        kg: 1000000,
        lb: 453592.37,
        oz: 28349.5231,
        st: 6350293.18,
        t: 1000000000,
    };

    const convertWeight = () => {
        
        if (weight === '') {
            setConvertedWeight('');
            return;
        }

        const weightInMg = weight * conversionRates[unit]; 
        const converted = weightInMg / conversionRates[targetUnit];
        setConvertedWeight(converted.toFixed(2)); 
    };

    useEffect(()=>{
        convertWeight()
    },[unit, targetUnit, weight])

    return (
        <div className="flex items-center justify-center min-h-screen w-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Weight Converter</h1>

                <div className="flex flex-col mb-4">
                    <label className="text-gray-700 mb-2" htmlFor="unit">
                        Unit
                    </label>
                    <div className="flex justify-between">
                        <select
                            id="unit"
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            className="w-fit px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {Object.keys(conversionRates).map((key) => (
                                <option key={key} value={key}>
                                    {key.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        <input
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            className="w-24 py-2 px-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="number"
                            placeholder="Amount"
                        />
                    </div>
                </div>

                <div className="flex flex-col mb-4">
                    <label className="text-gray-700 mb-2" htmlFor="targetUnit">
                        Convert Into
                    </label>
                    <div className="flex justify-between">
                        <select
                            id="targetUnit"
                            value={targetUnit}
                            onChange={(e)=> setTargetUnit(e.target.value)}
                            className="w-fit px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            {Object.keys(conversionRates).map((key) => (
                                <option key={key} value={key}>
                                    {key.toUpperCase()}
                                </option>
                            ))}
                        </select>
                        <input
                            value={convertedWeight}
                            readOnly
                            className="w-24 py-2 px-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Result"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
