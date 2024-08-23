import { useState } from "react";

export function Form() {
    const countryList = {
        India: ['Delhi', 'Mumbai', 'Bangalore'],
        USA: ['Los Angeles', 'New York', 'Las Vegas'],
        UK: ['London', 'Manchester', 'Liverpool'],
    };

    let [selectedCountry, setSelectedCountry] = useState('');
    let [cities, setCities] = useState([]);

    const handleChange = (event) => {
        const selectedCountry = event.target.value;
        setSelectedCountry(selectedCountry);
        setCities(countryList[selectedCountry] || []);
    };

    return (
        <>
            <h1>This is the Study of the Forms</h1>
            <select
                name="country"
                id="country-select"
                value={selectedCountry}
                onChange={handleChange}
            >
                <option value="">Country</option>
                {Object.keys(countryList).map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </select>
            <select name="city" id="city-select">
                <option value="">City</option>
                {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))}
            </select>
            <button>Submit</button>
        </>
    );
}
