import './App.css';
import { useLocation, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import Home from './Home';
import Header from './Header';
import Aboutus from './Aboutus';
import Joinus from './Joinus';
import Services from './Services';
import Contact from './Contact';
import RegisterService from './RegisterService';
import Blog from './Blog';
import BlogCreate from './BlogCreate';
import BlogRead from './BlogRead';

function App() {
  return (
    <>
      <Router>
        <MainComponent />
      </Router>
    </>
  );
}

function MainComponent() {
  let location = useLocation();
  let login = location.pathname === '/login';
  let register = location.pathname === '/register';
  let home = location.pathname === '/'
  let aboutus = location.pathname === '/aboutus'
  let joinus = location.pathname === '/joinus'
  let services = location.pathname.startsWith('/services')
  let blog = location.pathname.startsWith('/blogs')
  let contactus = location.pathname === '/contact'

  return (
    <>
      <Header maintitle={login ? 'Login' : register ? 'Register' : home ? 'Hire Arrive' : aboutus ? 'About': joinus ? 'Join Us': services ? 'Services': blog ? 'Blogs': contactus ? 'Contact Us': 'Other'} />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Home />} />
        <Route path='/joinus' element={<Joinus />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/services/register' element={<RegisterService />}/>
        <Route path='/blogs' element={<Blog/>}/>
        <Route path='/blogs/create' element={<BlogCreate/>}/>
        <Route path='/blogs/read/:slug' element={<BlogRead/>} />
        <Route path='/contact' element={<Contact />}/>
        <Route path='/aboutus' element={<Aboutus />}/>
      </Routes>
      {!contactus &&
      <Footer footertitle={login? 'Enter the Cosmos': register ?'Who got Zombie Inspiration' : 'Hire Arrive Built By Anonymous'} />
      }
      
    </>
  );
}

export default App;
