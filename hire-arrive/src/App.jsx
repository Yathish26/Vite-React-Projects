import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Listing from './Listing';
import Footer from './Footer';
import Aboutus from './Aboutus';
import Contact from './Contact';
import Blog from './Blog';
import Services from './Services';
import TermsofService from './TermsofService';
import PrivacyPolicy from './Privacypolicy';


function App() {

  
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/listing' element={<Listing/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/terms-of-service' element={<TermsofService/>}/>
        <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;

