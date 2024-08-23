import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Form } from './Form.jsx'
import Formagain from './Formagain.jsx'
import Formcube from './Formcube.jsx'
import Formfour from './Formfour.jsx'
import Password from './Password.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Form/>
    <Formagain/>
    <Formcube/>
    <Formfour/>
    <Password/>
  </StrictMode>,
)
