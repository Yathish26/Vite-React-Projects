import React, { useState, useEffect } from 'react';

export default function Weather() {
  const [city, setCity] = useState('');
  const [wdetails, setWdetails] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [weatherChange, setWeatherChange] = useState('clearsky')

  // In Weather Mapping Left is Description and Right is SVG file name 

  useEffect(() => {
    if (wdetails) {
      const weatherMapping = {
        // Thunderstorm
        'thunderstorm with light rain':'thunderstorm',
        'thunderstorm with rain':'thunderstorm',
        'thunderstorm with heavy rain':'thunderstorm',
        'light thunderstorm':'thunderstorm',
        'thunderstorm':'thunderstorm',
        'heavy thunderstorm':'thunderstorm',
        'ragged thunderstorm':'thunderstorm',
        'thunderstorm with light drizzle':'thunderstorm',
        'thunderstorm with drizzle':'thunderstorm',
        'thunderstorm with heavy drizzle':'thunderstorm',
        // Drizzle
        'light intensity drizzle':'drizzle',
        'drizzle':'drizzle',
        'heavy intensity drizzle:':'drizzle',
        'light intensity drizzle rain':'drizzle',
        'drizzle rain':'drizzle',
        'heavy intensity drizzle rain':'drizzle',
        'shower rain and drizzle':'drizzle',
        'heavy shower rain and drizzle':'drizzle',
        'shower drizzle':'drizzle',
        // Rain
        'light rain':'rain',
        'moderate rain':'rain',
        'heavy intensity rain':'rain',
        'very heavy rain':'rain',
        'extreme rain':'rain',
        'freezing rain':'rain',
        'light intensity shower rain':'rain',
        'shower rain':'rain',
        'heavy intensity shower rain':'rain',
        'ragged shower rain':'rain',
        // Snow
        'light snow':'snow',
        'snow':'snow',
        'heavy snow':'snow',
        'sleet':'snow',
        'light shower sleet':'snow',
        'shower sleet':'snow',
        'light rain and snow':'snow',
        'rain and snow':'snow',
        'light shower snow':'snow',
        'shower snow':'snow',
        'heavy shower snow':'snow',
        // Atmosphere
        'mist':'haze',
        'smoke':'haze',
        'haze':'haze',
        'sand/dust whirls':'haze',
        'fog':'haze',
        'sand':'haze',
        'dust':'haze',
        'volcanic ash':'haze',
        'squalls':'haze',
        'tornado':'haze',
        // Clear
        'clear sky':'clear',
        // Clouds
        'few clouds':'clouds',
        'scattered clouds':'clouds',
        'broken clouds':'clouds',
        'overcast clouds':'clouds',
      };

      const description = wdetails.weather[0].description;

      setWeatherChange(weatherMapping[description] || 'clear');
    }
  }, [wdetails]);

  const getData = (event) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    if (city.trim() === '') {
      setLoading(false);
      setError('Please enter a city name');
      return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=751d66e130befad396405dc13796a57c&units=metric`)
      .then((res) => res.json())
      .then((finaldata) => {
        setLoading(false);
        if (finaldata.cod === '404') {
          setWdetails(null);
          setError('No City Found');
        } else {
          setWdetails(finaldata);
          setError(null);
        }
      })
      .catch((error) => {
        console.error('Error fetching the weather data:', error);
        setLoading(false);
        setWdetails(null);
        setError('Error fetching the data');
      });

    setCity('');
  };

  const getBackgroundStyle = () => {
    if (!wdetails) return 'bg-gradient-to-br from-blue-600 to-blue-900';

    const temp = wdetails.main.temp;
    if (temp <= 0) {
      return 'bg-gradient-to-br from-blue-800 to-blue-500';
    } else if (temp <= 15) {
      return 'bg-gradient-to-br from-teal-500 to-blue-400';
    } else if (temp <= 30) {
      return 'bg-gradient-to-br from-yellow-400 to-orange-500';
    } else {
      return 'bg-gradient-to-br from-red-500 to-red-700';
    }
  };

  return (
    <div className={`mo:justify-start flex flex-col items-center justify-center flex-1 ${getBackgroundStyle()} text-white`}>
      <img className='mb-5 mt-2' src="weather/clear.svg" alt="" />
      <div className='text-3xl font-bona'>Weather Report</div>
      <form onSubmit={getData} className="flex flex-col items-center bg-white p-6 m-4 rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border border-gray-300 p-4 rounded-lg w-full text-gray-900 focus:outline-none focus:border-blue-500"
          placeholder="Search Your Location"
        />
        <button
          type="submit"
          className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold p-3 rounded-lg w-full flex items-center justify-center transition-all duration-300 ease-in-out"
        >
          <img src="icons/search.svg" alt="Search" className="h-5 w-5 mr-2" />
          Search
        </button>
      </form>

      {loading ? (

        <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>

      ) : error ? (
        <div className="mt-8 text-red-500 text-xl font-semibold drop-shadow-md">{error}</div>
      ) : wdetails ? (
        <div className="mt-8 mb-5 bg-white bg-opacity-20 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center mb-6">
            {wdetails.name}, {wdetails.sys.country}
          </h2>

          {/* Highlighted Section */}
          <div className="flex flex-col items-center mb-6">
            <div className="flex items-center">
              <img src="tempicons/temp.svg" alt="Temperature" className="w-10 h-10 mr-2" />
              <p className="text-4xl font-semibold">{wdetails.main.temp}°C</p>
            </div>
            <div className="flex items-center mt-4">
              <img src={`weather/${weatherChange}.svg`} alt="Weather" className="w-10 h-10 mr-2" />
              <p className="text-xl capitalize">{wdetails.weather[0].description}</p>
            </div>
          </div>

          {/* Additional Weather Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center">
              <img src="tempicons/feelslike.svg" alt="Feels Like" className="w-5 h-5 mr-2" />
              <p>Feels Like: {wdetails.main.feels_like}°C</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/mintemp.svg" alt="Min Temperature" className="w-5 h-5 mr-2" />
              <p>Min Temperature: {wdetails.main.temp_min}°C</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/maxtemp.svg" alt="Max Temperature" className="w-5 h-5 mr-2" />
              <p>Max Temperature: {wdetails.main.temp_max}°C</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/pressure.svg" alt="Pressure" className="w-5 h-5 mr-2" />
              <p>Pressure: {wdetails.main.pressure} hPa</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/humidity.svg" alt="Humidity" className="w-5 h-5 mr-2" />
              <p>Humidity: {wdetails.main.humidity}%</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/sealevel.svg" alt="Sea Level" className="w-5 h-5 mr-2" />
              <p>Sea Level: {wdetails.main.sea_level} hPa</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/groundlevel.svg" alt="Ground Level" className="w-5 h-5 mr-2" />
              <p>Ground Level: {wdetails.main.grnd_level} hPa</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/visibility.svg" alt="Visibility" className="w-5 h-5 mr-2" />
              <p>Visibility: {wdetails.visibility} meters</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/windspeed.svg" alt="Wind Speed" className="w-5 h-5 mr-2" />
              <p>Wind Speed: {wdetails.wind.speed} m/s</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/windgusts.svg" alt="Wind Gust" className="w-5 h-5 mr-2" />
              <p>Wind Gust: {wdetails.wind.gust} m/s</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/winddirection.svg" alt="Wind Direction" className="w-5 h-5 mr-2" />
              <p>Wind Direction: {wdetails.wind.deg}°</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/cloudiness.svg" alt="Cloudiness" className="w-5 h-5 mr-2" />
              <p>Cloudiness: {wdetails.clouds.all}%</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/sunrise.svg" alt="Sunrise" className="w-5 h-5 mr-2" />
              <p>Sunrise: {new Date(wdetails.sys.sunrise * 1000).toLocaleTimeString()}</p>
            </div>
            <div className="flex items-center">
              <img src="tempicons/sunset.svg" alt="Sunset" className="w-5 h-5 mr-2" />
              <p>Sunset: {new Date(wdetails.sys.sunset * 1000).toLocaleTimeString()}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8 text-xl text-center">Please enter a city to search for weather details.</div>
      )}
    </div>
  );
}
