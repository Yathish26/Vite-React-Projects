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
import Error404 from './Error404';
import Submenu from './Submenu';
import Detailpage from './Categories/Detailpage';
import Business from './Business';
import DataBank from './Editable Tool/Bank';

function MainApp() {
  const url = useLocation();
  const login = url.pathname === '/login' || url.pathname === '/register';



  return (
    <>
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/listing' element={<Listing />} />
        <Route path='/business' element={<Business/>} />
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
        <Route path='/homeservices' element={<Submenu />} />
        <Route path='/healthwellness' element={<Submenu />} />
        <Route path='/automotive-services' element={<Submenu />} />
        <Route path='/professional-services' element={<Submenu />} />
        <Route path='/education' element={<Submenu />} />
        <Route path='/events-entertainment' element={<Submenu />} />
        <Route path='/personal-services' element={<Submenu />} />
        <Route path='/technology-repair' element={<Submenu />} />
        <Route path='/home-interior' element={<Submenu />} />
        <Route path='/delivery-services' element={<Submenu />} />
        <Route path='*' element={<Error404 />} />
        <Route path="/:category/:slug" element={<Detailpage />} />
        {DataBank().CategoryUILinks.map((link, index) => (
          <Route key={index} path={link} element={<CategoryUI />} />
        ))}


      </Routes>
      {!login && <Footer />} 
      </div>
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
