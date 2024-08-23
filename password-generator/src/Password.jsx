import React, { useState } from 'react'

export default function Password() {

    let UC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let LC = 'abcdefghijklmnopqrstuvwxyz';
    let NC = '0123456789';
    let SC = '`!@#$%^&*()_+-=[]{}|;:.,><*';



    let [numlen, setNumlen] = useState('10')
    let [uppercase, setUppercase] = useState(false)
    let [lowercase, setLowercase] = useState(false)
    let [number, setNumber] = useState(false)
    let [symbol, setsymbol] = useState(false)
    let [display,setDisplay] = useState('');
    let [copy,setcopy] = useState('Copy')

    const handleClick = () => {
        let charset = ''
        let finalPass = ''
        if (uppercase || lowercase || number || symbol) {
           if(uppercase)charset+=UC;
           if(lowercase)charset+=LC;
           if(number)charset+=NC;
           if(symbol)charset+=SC;
        } else {
            alert('Please Tick any one to Proceed')
        }
        for(let i=0; i<numlen; i++){
            finalPass+=charset.charAt(Math.floor(Math.random()*charset.length))
            setDisplay(finalPass)
        }
    }

    const copyData = ()=>{
        navigator.clipboard.writeText(display)
        setcopy('Copied');
        setTimeout(() => {
            setcopy('Copy')
        }, 1000);
    }

    return (
        <>
            <h1>Password generator app</h1>
            <input type="text" value={display} readOnly />
            <button onClick={copyData}>{copy}</button>
            <p>Password Length</p>
            <input type="number" value={numlen} onChange={(e) => setNumlen(e.target.value)} min={10} max={30} />
            <p>Include Upper Case</p>
            <input type="checkbox" checked={uppercase} onChange={() => setUppercase(!uppercase)} />
            <p>Include Lower Case</p>
            <input type="checkbox" checked={lowercase} onChange={() => setLowercase(!lowercase)} />
            <p>Include Numbers</p>
            <input type="checkbox" checked={number} onChange={() => setNumber(!number)} />
            <p>Include Symbols</p>
            <input type="checkbox" checked={symbol} onChange={() => setsymbol(!symbol)} /><br />
            <button onClick={handleClick}>Generate</button>
        </>
    )
}
