import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [api,setApi] = useState([])

    // useEffect(()=>{
    //     axios.get('http://localhost:5000/')
    //     .then(res=>setApi(res.data))
    // },[])

    useEffect(()=>{
        fetch('http://localhost:5000/')
        .then(res=>res.json())
        .then(data=>setApi(data))
    },[])
  return (
    <>
    <h1>Vegetables Price</h1>
    {api.map((vegetable,id)=>{
        return(
            <p key={id}>{vegetable.Name} : {vegetable.Price}rs /kg</p>
        )
        
    })}
    </>
  )
}
