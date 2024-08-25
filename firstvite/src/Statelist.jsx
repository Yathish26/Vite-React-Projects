import React, { useState } from 'react'

export default function Statelist() {

    let [region,setRegion] = useState([])
    let countrystatelist = {
        India :['Mangalore','Bangalore','Chennai','Mumbai','Pune','Delhi','Punjab'],
        'United States' : ['Los Angeles','Denver','Texas','New York','Wyoming']
    }

    const handleCountryChange = (e) =>{
        let selectedCountry = e.target.value
        setRegion(countrystatelist[selectedCountry])
    }
  return (
    <>
    <h1>Country and the State List</h1>
    <select onChange={handleCountryChange} >
        <option value="" disabled>Country</option>
        {Object.keys(countrystatelist).map((cntry,index)=>{
            return(
                <option id={index} value={cntry}>{cntry}</option>
            )
        })}
    </select>
    <select >
        <option value="" disabled>State/Province</option>
        {region.map((reg,index)=>{
            return(
                <option key={index} value={reg}>{reg}</option>
            )
        })}
    </select>
    </>
  )
}
