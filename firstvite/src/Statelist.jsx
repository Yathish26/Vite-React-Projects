import React from 'react'
import { useState } from 'react'



export default function Statelist() {
    let countrylist = {
        India: ['Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Delhi'],
        USA: ['Los Angeles', 'San Francisco', 'Denver', 'Dallas', 'Texas'],
        Canada: ['Toronto', 'Vancouver', 'Calgary', 'Montreal', 'Ottawa'],
        UK: ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Liverpool'],
        Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide'],
        Germany: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt'],
        France: ['Paris', 'Marseille', 'Lyon', 'Toulouse', 'Nice']
    }

    const initialGames = ['Cricket','Badminton','Tennis','Football']

    const [country,setCountry] = useState('')
    const [city,setCity] = useState('')
    const [plays,setPlays] = useState(initialGames)

    const handleDelete = (id)=>{
        const updatedplay = plays.filter((_,index)=>index !== id)
        setPlays(updatedplay)
    }
    return (
        <>
            <h1>Address Form</h1>
            <select value={country} onChange={(e)=>setCountry(e.target.value)}>
                <option disabled>Select a Country</option>
                {Object.keys(countrylist).map((country,id)=>(
                    <option key={id} value={country}>{country}</option>
                ))}
            </select>
            <select value={city} onChange={(e)=>setCity(e.target.value)}>
                <option disabled>Select a City</option>
                {country && countrylist[country].map((city,id)=>(
                    <option key={id} value={city}>{city}</option>
                ))}
            </select>

            <h1>Deleting from the list</h1>
            <ul>
                {plays.map((game,id)=>(
                    <li key={id}>{game} <button onClick={()=>handleDelete(id)}>Delete</button></li>
                ))}
            </ul>

        </>
    )
}
