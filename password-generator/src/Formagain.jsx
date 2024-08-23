import React, { useState } from 'react'

export default function Formagain() {

    let [countries,setCountries] = useState('')
    let [cities,setcities] = useState([])

    const listOfCountries = {
        India:['Mangalore','Bangalore','Chennai','Hyderabad','Pondicherry'],
        USA : ['Detroit','Chicago','Los Angeles','New York'],
        UK : ['London','Liverpool','Manchester']
    }

    const handleChange = (e)=>{
        const selectedc = e.target.value
        setCountries(selectedc);
        setcities(listOfCountries[selectedc])
    }

  return (
    <>
    <h1>Form Again</h1>
    <select name="country" id="country-list" value={countries} onChange={handleChange} >
        <option value="">Country</option>
    {Object.keys(listOfCountries).map((country,index)=>{
        return (
            <option key={index} value={country}>{country}</option>
        )
    })}
    </select>
    <select name="cities" id="cities-list">
        <option value="">City</option>
    {cities.map((city,index)=>{
        return(
            <option key={index} value={city}>{city}</option>
        )
    })}
    </select>
    </>
  );
}
