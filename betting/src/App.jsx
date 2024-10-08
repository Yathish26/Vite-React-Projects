import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'
import Sports from './Sports'


function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sports' element={<Sports />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App

