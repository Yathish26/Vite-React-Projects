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
import Construction from './Categories/Construction';

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
        <Route path='/register' element={<Register/>}/>
        <Route path='/user' element={<UserProfile/>}/>
        <Route path='/user/editprofile' element={<EditProfile/>}/>
        <Route path='/construction' element={<Construction/>}/>
        <Route path='/electrical' element={<Construction/>}/>
        <Route path='/plumbing' element={<Construction/>}/>
        <Route path='/painting' element={<Construction/>}/>
        <Route path='/carpenter' element={<Construction/>}/>
        <Route path='/mechanical' element={<Construction/>}/>
        <Route path='/welding' element={<Construction/>}/>
        <Route path='/pestcontrol' element={<Construction/>}/>
        <Route path='/security' element={<Construction/>}/>
        <Route path='/energy' element={<Construction/>}/>
        <Route path='/event' element={<Construction/>}/>
        <Route path='/transport' element={<Construction/>}/>
      </Routes>
      {!login && <Footer />} {/* Conditionally render Footer */}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
