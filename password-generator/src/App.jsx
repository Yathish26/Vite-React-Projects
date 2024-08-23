import { useState, useTransition } from 'react'
import './App.css'

function App() {
  let [capletter,setCapletter] = useState(false);
  let [lowerletter,setLowerletter] = useState(false);
  let [number,setNUmber] = useState(false);
  let [symbol,setSymbol] =useState(false)
  let [passlength,setPasslength] =useState(10);
  let [display,setDisplay] = useState('');
  let [copied,setCopied] = useState('Copy');
  let [alert,setAlert] = useState('');

  let CAP = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let LOW = 'abcefghijklmnopqrstuvwxyz'
  let NUM = '0123456789'
  let SYM = '`!@#$%^&*()_+-=[]{}|;:.,><*'
  
  let generate=()=>{
    let charset = ''
    let finalpass = ''
    if(capletter||lowerletter||number||symbol){
      if(capletter) charset+=CAP
      if(lowerletter) charset+=LOW
      if(number) charset+=NUM
      if(symbol) charset +=SYM
      for(let i=0;i<passlength;i++){
        finalpass+=charset.charAt(Math.floor(Math.random()*charset.length))
        setDisplay(finalpass);
      }
    }else{
      setAlert('Please Select Any One..!')
      setTimeout(()=>{
        setAlert('')
      },1000)
    }
  }

  let copy = ()=>{
    navigator.clipboard.writeText(display)
    setCopied('Copied')
    setTimeout(()=>{
      setCopied('Copy')
    },1000)
  }


  return (
    <>
    <h2>Password Generator App</h2>
    <input type="text" value={display} readOnly />
    <button onClick={copy} >{copied}</button>
    <p>Password Length</p>
    <input type="number" value={passlength} onChange={(e)=>setPasslength(e.target.value)} max={30} min={10}/>
    <p>Include Capital Letters</p>
    <input type="checkbox" checked={capletter} onChange={()=>setCapletter(!capletter)}  />
    <p>Include Lower Letters</p>
    <input type="checkbox" checked={lowerletter} onChange={()=>setLowerletter(!lowerletter)} />
    <p>Include Numbers Letters</p>
    <input type="checkbox" checked={number} onChange={()=>setNUmber(!number)}/>
    <p>Include Symbols Letters</p>
    <input type="checkbox" checked={symbol} onChange={()=>setSymbol(!symbol)}/><br />
    <button onClick={generate}>Generate</button>
    <p>{alert}</p>
    </>
  )
}

export default App
