import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  
  let [loginbutton,setLoginbutton] = useState('Login');
  let [bgcolor,setBgcolor] = useState('')

  const buttonChange = ()=>{
    setLoginbutton('Pending')
    setBgcolor('red')
    setTimeout(()=>{
      setLoginbutton('Login')
      setBgcolor('')
    },1000)
  }

  return (
    <>
      <div className="loginform">
        <input type="email" maxLength={50}  placeholder='Email ID' />
        <input type="password" placeholder='Password' />
        <button onClick={buttonChange} style={{backgroundColor:`${bgcolor}`}}>{loginbutton}</button>
        <p>Not Registered ? <Link to='/register'>Create an Account</Link></p>
      </div>
    </>
  )
}
