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
        <Route path='/construction' element={<CategoryUI/>}/>
        <Route path='/electrical' element={<CategoryUI/>}/>
        <Route path='/plumbing' element={<CategoryUI/>}/>
        <Route path='/painting' element={<CategoryUI/>}/>
        <Route path='/carpenter' element={<CategoryUI/>}/>
        <Route path='/mechanical' element={<CategoryUI/>}/>
        <Route path='/welding' element={<CategoryUI/>}/>
        <Route path='/pestcontrol' element={<CategoryUI/>}/>
        <Route path='/security' element={<CategoryUI/>}/>
        <Route path='/energy' element={<CategoryUI/>}/>
        <Route path='/event' element={<CategoryUI/>}/>
        <Route path='/transport' element={<CategoryUI/>}/>
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
