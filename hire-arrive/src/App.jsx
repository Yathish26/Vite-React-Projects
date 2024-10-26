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
        <Route path='/home-services' element={<CategoryUI />} />
        <Route path='/gym' element={<CategoryUI />} />
        <Route path='/health-wellness' element={<CategoryUI />} />
        <Route path='/contractors' element={<CategoryUI />} />
        <Route path='/auto-mechanics' element={<CategoryUI />} />
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
        <Route path='/bridal-makeup' element={<CategoryUI />} />
        <Route path='/skincare' element={<CategoryUI />} />
        <Route path='/doctors' element={<CategoryUI />} />
        <Route path='*' element={<Error404 />} />
        {/* New Updated Links */}
        // ---------------------Home Services----------------
        <Route path='/cleaning' element={<CategoryUI />} />
        <Route path='/pest-control' element={<CategoryUI />} />
        <Route path='/plumbing' element={<CategoryUI />} />
        <Route path='/electrical-services' element={<CategoryUI />} />
        <Route path='/home-repairs-maintenance' element={<CategoryUI />} />
        <Route path='/landscaping-gardening' element={<CategoryUI />} />
        <Route path='/moving-relocation' element={<CategoryUI />} />
        <Route path='/painting-wall-repair' element={<CategoryUI />} />
        <Route path='/carpentry' element={<CategoryUI />} />
        <Route path='/appliance-installation' element={<CategoryUI />} />

        // ---------------------Health & Wellness----------------
        <Route path='/personal-training' element={<CategoryUI />} />
        <Route path='/nutrition-diet-counseling' element={<CategoryUI />} />
        <Route path='/mental-health-counseling' element={<CategoryUI />} />
        <Route path='/massage-therapy' element={<CategoryUI />} />
        <Route path='/physiotherapy' element={<CategoryUI />} />
        <Route path='/yoga-meditation' element={<CategoryUI />} />
        <Route path='/chiropractic-care' element={<CategoryUI />} />
        <Route path='/spa-relaxation-services' element={<CategoryUI />} />
        <Route path='/acupuncture' element={<CategoryUI />} />
        <Route path='/dermatology' element={<CategoryUI />} />

        // ---------------------Automotive Services----------------
        <Route path='/car-wash-detailing' element={<CategoryUI />} />
        <Route path='/oil-change-maintenance' element={<CategoryUI />} />
        <Route path='/vehicle-repair-service' element={<CategoryUI />} />
        <Route path='/tire-repair-replacement' element={<CategoryUI />} />
        <Route path='/battery-replacement' element={<CategoryUI />} />
        <Route path='/auto-glass-repair' element={<CategoryUI />} />
        <Route path='/roadside-assistance' element={<CategoryUI />} />
        <Route path='/vehicle-inspection' element={<CategoryUI />} />
        <Route path='/auto-painting-wrapping' element={<CategoryUI />} />
        <Route path='/towing-services' element={<CategoryUI />} />

        // ---------------------Professional Services----------------
        <Route path='/legal-consulting' element={<CategoryUI />} />
        <Route path='/financial-planning' element={<CategoryUI />} />
        <Route path='/tax-preparation-accounting' element={<CategoryUI />} />
        <Route path='/business-consulting' element={<CategoryUI />} />
        <Route path='/insurance-services' element={<CategoryUI />} />
        <Route path='/real-estate-agents' element={<CategoryUI />} />
        <Route path='/translation-services' element={<CategoryUI />} />
        <Route path='/marketing-advertising' element={<CategoryUI />} />
        <Route path='/human-resources-consulting' element={<CategoryUI />} />
        <Route path='/project-management' element={<CategoryUI />} />

        // ---------------------Education----------------
        <Route path='/tutoring-homework-help' element={<CategoryUI />} />
        <Route path='/language-classes' element={<CategoryUI />} />
        <Route path='/music-dance-classes' element={<CategoryUI />} />
        <Route path='/test-preparation' element={<CategoryUI />} />
        <Route path='/online-courses-certifications' element={<CategoryUI />} />
        <Route path='/art-craft-classes' element={<CategoryUI />} />
        <Route path='/skill-development' element={<CategoryUI />} />
        <Route path='/computer-coding-classes' element={<CategoryUI />} />
        <Route path='/cooking-classes' element={<CategoryUI />} />
        <Route path='/sports-fitness-training' element={<CategoryUI />} />

        // ---------------------Events & Entertainment----------------
        <Route path='/event-planning' element={<CategoryUI />} />
        <Route path='/photography-videography' element={<CategoryUI />} />
        <Route path='/dj-services' element={<CategoryUI />} />
        <Route path='/catering-services' element={<CategoryUI />} />
        <Route path='/party-rentals' element={<CategoryUI />} />
        <Route path='/live-performers-bands' element={<CategoryUI />} />
        <Route path='/decor-balloon-services' element={<CategoryUI />} />
        <Route path='/florists' element={<CategoryUI />} />
        <Route path='/wedding-planners' element={<CategoryUI />} />
        <Route path='/audio-visual-equipment-rental' element={<CategoryUI />} />

        // ---------------------Personal Services----------------
        <Route path='/personal-chef' element={<CategoryUI />} />
        <Route path='/errand-running' element={<CategoryUI />} />
        <Route path='/pet-grooming-boarding' element={<CategoryUI />} />
        <Route path='/personal-shoppers' element={<CategoryUI />} />
        <Route path='/life-coaching' element={<CategoryUI />} />
        <Route path='/fitness-coaching' element={<CategoryUI />} />
        <Route path='/babysitting-nanny-services' element={<CategoryUI />} />
        <Route path='/tailoring-alterations' element={<CategoryUI />} />
        <Route path='/laundry-dry-cleaning' element={<CategoryUI />} />
        <Route path='/house-sitting' element={<CategoryUI />} />

        // ---------------------Technology Repair----------------
        <Route path='/smartphone-tablet-repair' element={<CategoryUI />} />
        <Route path='/computer-laptop-repair' element={<CategoryUI />} />
        <Route path='/data-recovery-services' element={<CategoryUI />} />
        <Route path='/tv-repair' element={<CategoryUI />} />
        <Route path='/home-networking' element={<CategoryUI />} />
        <Route path='/game-console-repair' element={<CategoryUI />} />
        <Route path='/printer-scanner-repair' element={<CategoryUI />} />
        <Route path='/security-system-installation' element={<CategoryUI />} />
        <Route path='/smart-home-setup' element={<CategoryUI />} />
        <Route path='/software-troubleshooting' element={<CategoryUI />} />

        // ---------------------Home & Interior----------------
        <Route path='/interior-design' element={<CategoryUI />} />
        <Route path='/home-staging' element={<CategoryUI />} />
        <Route path='/custom-furniture-carpentry' element={<CategoryUI />} />
        <Route path='/flooring-installation' element={<CategoryUI />} />
        <Route path='/hvac-installation-repair' element={<CategoryUI />} />
        <Route path='/window-treatment-blinds' element={<CategoryUI />} />
        <Route path='/lighting-electrical-fixtures' element={<CategoryUI />} />
        <Route path='/closet-organization' element={<CategoryUI />} />
        <Route path='/kitchen-bath-remodeling' element={<CategoryUI />} />
        <Route path='/upholstery-services' element={<CategoryUI />} />

        // ---------------------Delivery Services----------------
        <Route path='/food-delivery' element={<CategoryUI />} />
        <Route path='/grocery-delivery' element={<CategoryUI />} />
        <Route path='/package-courier-delivery' element={<CategoryUI />} />
        <Route path='/flower-delivery' element={<CategoryUI />} />
        <Route path='/document-delivery' element={<CategoryUI />} />
        <Route path='/furniture-appliance-delivery' element={<CategoryUI />} />
        <Route path='/laundry-pickup-delivery' element={<CategoryUI />} />
        <Route path='/prescription-delivery' element={<CategoryUI />} />
        <Route path='/meal-kit-delivery' element={<CategoryUI />} />
        <Route path='/gift-special-occasion-delivery' element={<CategoryUI />} />
        <Route path="/:category/:slug" element={<Detailpage />} />


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
