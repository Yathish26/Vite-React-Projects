import React, { useEffect, useState } from 'react'
import styles from './Allservices.module.css'

export default function Allservices() {
  let [services, setServices] = useState([]);

  useEffect(()=>{
    const fetchServices = async()=>{
      try{
        const response = await fetch('http://127.0.0.1:8000/api/registerservice')
        if(response.ok){
          const data = await response.json()
          setServices(data);
        } else {
          console.log('Failed to Fetch Services')
        }
      } catch (error){
        console.log('Error',error);
      }
    };

    fetchServices();
  },[])
  return (
    <>
      <div className={styles.servicesContainer}>
        <h1>All Services</h1>
        <ul className={styles.servicesList}>
          {services.map((service, index) => (
            <li key={index} className={styles.serviceItem}>
              <h2>{service.full_name}</h2>
              <p>Mobile Number: {service.mobile_number}</p>
              <p>Work Category: {service.work_category}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
