import React, { useState } from 'react'

export default function Countrylist() {
    let Countrylist = {
        India:['Mumbai','Bangalore','Chennai','Delhi','Mangalore'],
        USA:['Denver','Texas','Dallas','Chicago'],
        Canada:['Ottawa','Toronto','Alberta']
    }

    const [country,setCountry] = useState('')
    const [city,setCity] = useState('')

  return (
    <>
    <h1>Country List</h1>
    <select value={country} onChange={(e)=>setCountry(e.target.value)}>
        <option>Select Country</option>
        {Object.keys(Countrylist).map((country,id)=>(
            <option key={id} value={country}>{country}</option>
        ))}
    </select>
    <select value={city} onChange={(e)=>setCity(e.target.value)}>
        <option>Select City</option>
        {country && Countrylist[country].map((cit,id)=>(
            <option key={id} value={cit}>{cit}</option>
        ))} 
    </select>
    </>
  )
}
