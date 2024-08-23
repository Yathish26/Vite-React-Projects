import React, { useState } from 'react'

export default function Formfour() {

    let [country,setCountry] = useState();
    let [state,setstate] = useState([]);
    let [cities,setCities] = useState([]);

    let countryList = {
        India:['Karnataka','Maharashtra','Tamil Nadu','Uttar Pradesh'],
        'United States':['California','Texas','Wyoming']
    }
    let citylist = {
        Karnataka:['Bangalore','Mangalore','Hubli'],
        'Tamil Nadu':['Chennai','Madras','Kanyakumari'],
        Maharashtra:['Mumbai','Thane','Nashik'],
        'Uttar Pradesh' : ['Lucknow','Noida'],
        California: ['Los Angeles','San Francisco'],
        Texas:['Texas','Missi'],
        Wyoming:['Wyo','Lal']
    }

    const handleChange = (e)=>{
        const sts = e.target.value;
        setCountry(sts);
        setstate(countryList[sts]||[])
        setCities([]);
        
    }

    const handleStateChange = (e)=>{
        const citychange = e.target.value;
        setCities(citylist[citychange])
    }
    
  return (
    <>
    <h1>This is the Form four tryin</h1>
    <select name="country" id="country" value={country} onChange={handleChange} >
        <option value="">Country</option>
        {Object.keys(countryList).map((c,index)=>{
            return(
                <option key={index} value={c}>{c}</option>
            )
        })}
    </select>
    <select name="state" id="state" onChange={handleStateChange}>
        <option value="">State</option>
    {state.map((s,index)=>{
        return (
            <option key={index} value={s}>{s}</option>
        )
    })}
    </select>
    <select name="city" id="city">
        <option value="">City</option>
    {cities.map((ct,index)=>{
        return(
            <option key={index} value={ct}>{ct}</option>
        )
    })}
    </select>
    <button>Submit</button>
    </>
  )
}
