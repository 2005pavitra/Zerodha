import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  
import HomePage from './landing_page/home/HomePage'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

  <BrowserRouter>
      <App />
    </BrowserRouter>
    
  </React.StrictMode>,
)
