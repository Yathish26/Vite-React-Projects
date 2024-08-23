import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {

    let[register,setRegister] = useState('Register');
    let [bgcolor,setBgcolor] = useState('')

    const buttonChange = ()=>{
        setRegister('Pending')
        setBgcolor('red')
        setTimeout(()=>{
            setRegister('Register')
            setBgcolor('')
        },1000)
    }

    return (
        <>
            <div className="loginform">

                <input
                    type="text"
                    placeholder='Full Name'
                    className="input-field"
                />
                <input
                    type="email"
                    placeholder='Email Address'
                    className="input-field"
                />
                <input
                    type="text"
                    placeholder='Username'
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder='Password'
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder='Confirm Password'
                    className="input-field"
                />

                <button onClick={buttonChange} style={{backgroundColor:`${bgcolor}`}} className="login-button">{register}</button>

                <p className="login-footer">
                    Already have an account ? <Link to='/login'>Login</Link>
                </p>
            </div>
        </>
    )
}
