import React, { useState } from 'react'

export default function Formcube() {

    let [state,setstate] = useState('');
    let [city,setCity] = useState([]);

    let stateCities = {
        Karnataka: ['Bangalore', 'Mangalore', 'Dharwad', 'Hubli'],
        Maharashtra: ['Mumbai', 'Thane', 'Pune', 'Nasik', 'Aurangabad'],
        Delhi: ['New Delhi', 'Old Delhi']
    }

    const handleChange = (e)=>{
        const cts = e.target.value
        setstate(cts);
        setCity(stateCities[cts]||[])
    }

    return (
        <>
            <h1>Form Cube</h1>
            <select name="state" id="state-list" value={state} onChange={handleChange}>
                <option value="">State</option>
                {Object.keys(stateCities).map((state, index) => {
                    return (
                        <option value={state}>{state}</option>
                    )
                })}
            </select>

            <select name="cities" id="cities-list">
                <option value="">City</option>
            {city.map((c,index)=>{
                return (
                    <option key={index} value={c}>{c}</option>
                )
            })}
            </select>
        </>
    )
}
