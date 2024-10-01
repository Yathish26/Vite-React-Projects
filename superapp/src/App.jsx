import Header from './Header'
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate } from 'react-router-dom'
import Weather from './Weather'
import Home from './Home'
import Todolist from './Todolist'
import More from './More'
import Profile from './Profile'
import { useEffect } from 'react'
import Journey from './Journey'
import PhotoEditor from './PhotoEditor'
import Passwordgenerator from './Passwordgenerator'
import Applications from './Applications'
import Parallaxt from './Parallax'
import Games from './Games'
import Snake from './Games/Snake'

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'Axios';
  }, []);

  const appPropMap = {
    '/weather': '/ Weather',
    '/todolist': '/ Todo List',
    '/more': '/ About',
    '/profile': '/ Profile',
    '/photoeditor':'/ Photo Editor',
    '/passwordgenerator':'/ Password Generator',
    '/apps':'/ Applications',
    '/games':'/ Games',
    '/apps/weightconverter':'/ Weight Converter',
    '/apps/currencyconverter':'/ Currency Converter',
    '/apps/instagram-post-generator':'/ Insta Generator',
    '/apps/tweet-generator':'/ Tweet Generator',
    '/apps/text-to-speech':'/ Text <-> Speech',
    '/apps/text-case-converter':'/ Text Case Converter',
    '/apps/qr-generator':'/ QR Generator',
  };

  const appProp = appPropMap[location.pathname] || '';


  return (
    <>
      <Header title="Axios" app={appProp} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<Weather />} />
        <Route path='/todolist' element={<Todolist />} />
        <Route path='/more' element={<More />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/journey' element={<Journey />} />
        <Route path='/parallax' element={<Parallaxt/>}/>
        <Route path='/photoeditor' element={<PhotoEditor/>}/>
        <Route path='/passwordgenerator' element={<Passwordgenerator/>}/>
        {/* <Route path='/apps' element={<Applications/>}/> */}
        <Route path='/apps' element={<Navigate to="/apps/instagram-post-generator"/>}/>
        <Route path='/apps/currencyconverter' element={<Applications/>}/>
        <Route path='/apps/weightconverter' element={<Applications/>}/> 
        <Route path='/apps/instagram-post-generator' element={<Applications/>}/> 
        <Route path='/apps/text-to-speech' element={<Applications/>}/>
        <Route path='/apps/tweet-generator' element={<Applications/>}/>
        <Route path='/apps/text-case-converter' element={<Applications/>}/>
        <Route path='/apps/qr-generator' element={<Applications/>}/>
        <Route path='/apps/gambling' element={<Applications/>}/>
        <Route path='/games' element={<Games/>}/>
        <Route path='/games/snake-xenzia' element={<Snake/>}/>
      </Routes>
    </>
  )
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
