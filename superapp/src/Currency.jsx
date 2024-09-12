import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Currency() {
  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [currencyData, setCurrencyData] = useState({});
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [lastUpdated, setLastUpdated] = useState('Today');

  useEffect(() => {
    axios
      .get('https://api.currencyapi.com/v3/latest?apikey=cur_live_1qHOS9mVQ0ri4XuUAaoCXXzSidCN2vxhWeRkBxdi')
      .then((response) => {
        setCurrencyData(response.data.data);
        setLastUpdated(response.data.meta.last_updated_at);
      })
      .catch((error) => {
        console.error('Error fetching currency data:', error);
      });
  }, []);

  useEffect(() => {
    if (currencyData[fromCurrency] && currencyData[toCurrency]) {
      const rateFrom = currencyData[fromCurrency].value;
      const rateTo = currencyData[toCurrency].value;
      setConvertedAmount((amount * rateTo) / rateFrom);
    }
  }, [amount, fromCurrency, toCurrency, currencyData]);

  function convertTimestampToLocalTime(timestamp) {
    const date = new Date(timestamp);
    const formattedDateTime = date.toLocaleString('en-US', {
      hour12: false,
      dateStyle: 'medium',
      timeStyle: 'short',
    });
    return formattedDateTime;
  }

  const localTime = convertTimestampToLocalTime(lastUpdated);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-screen bg-gradient-to-r from-blue-500 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Currency Converter</h1>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
            placeholder="Enter amount"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="fromCurrency">
            From
          </label>
          <select
            id="fromCurrency"
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          >
            {Object.keys(currencyData).map((currency, key) => (
              <option key={key} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-gray-600 font-semibold mb-2" htmlFor="toCurrency">
            To
          </label>
          <select
            id="toCurrency"
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-200"
          >
            {Object.keys(currencyData).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <p className="text-center text-gray-500 text-sm">Updated on {localTime}</p>

        {convertedAmount !== null && (
          <div className="mt-6 text-center">
            <p className="text-xl">
              {amount} {fromCurrency} ={' '}
              <span className="font-bold text-purple-700">
                {convertedAmount.toFixed(2)} {toCurrency}
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
