import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import Login from './Login';
import Register from './Register';
import UserProfile from './UserProfile';
import EditProfile from './EditProfile';
import CategoryUI from './Categories/CategoryUI';
import { GoogleOAuthProvider } from '@react-oauth/google';

function MainApp() {
  const url = useLocation();
  const login = url.pathname === '/login' || url.pathname === '/register';



  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/about' element={<Aboutus />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/services' element={<Services />} />
        <Route path='/terms-of-service' element={<TermsofService />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/user' element={<UserProfile />} />
        <Route path='/user/editprofile' element={<EditProfile />} />
        <Route path='/construction' element={<CategoryUI />} />
        <Route path='/electrical' element={<CategoryUI />} />
        <Route path='/plumbing' element={<CategoryUI />} />
        <Route path='/painting' element={<CategoryUI />} />
        <Route path='/carpenter' element={<CategoryUI />} />
        <Route path='/mechanical' element={<CategoryUI />} />
        <Route path='/welding' element={<CategoryUI />} />
        <Route path='/pestcontrol' element={<CategoryUI />} />
        <Route path='/security' element={<CategoryUI />} />
        <Route path='/energy' element={<CategoryUI />} />
        <Route path='/event' element={<CategoryUI />} />
        <Route path='/transport' element={<CategoryUI />} />
        <Route path='/interiordesigners' element={<CategoryUI />} />
        <Route path='/ac-repair' element={<CategoryUI />} />
        <Route path='/carpenters' element={<CategoryUI />} />
        <Route path='/cleaning' element={<CategoryUI />} />
        <Route path='/home-renovation' element={<CategoryUI />} />
        <Route path='/counselors' element={<CategoryUI />} />
        <Route path='/dentists' element={<CategoryUI />} />
        <Route path='/dieticians' element={<CategoryUI />} />
        <Route path='/doctors' element={<CategoryUI />} />
        <Route path='/massage-therapists' element={<CategoryUI />} />
        <Route path='/nursing' element={<CategoryUI />} />
        <Route path='/personal-trainer' element={<CategoryUI />} />
        <Route path='/physiotherapists' element={<CategoryUI />} />
        <Route path='/psychologists' element={<CategoryUI />} />
        <Route path='/spa-services' element={<CategoryUI />} />
        <Route path='/yoga-instructors' element={<CategoryUI />} />
        <Route path='/car-repair' element={<CategoryUI />} />
        <Route path='/bike-repair' element={<CategoryUI />} />
        <Route path='/car-wash' element={<CategoryUI />} />
        <Route path='/towing' element={<CategoryUI />} />
        <Route path='/driving-schools' element={<CategoryUI />} />
        <Route path='/vehicle-rental' element={<CategoryUI />} />
        <Route path='/tyre-battery' element={<CategoryUI />} />
        <Route path='/auto-mechanics' element={<CategoryUI />} />
        <Route path='/roadside-assistance' element={<CategoryUI />} />
      </Routes>
      {!login && <Footer />} {/* Conditionally render Footer */}
    </>
  );
}

function App() {
  const clientId = '515733859331-52g64ecis313qso8ejdtbjhlcbohnfg2.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <MainApp />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
