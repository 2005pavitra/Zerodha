import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from "react-router-dom";
import  './index.css'
import HomePage from "./landing_page/home/HomePage";
import Navbar from "./landing_page/home/Navbar";
import About from "./landing_page/about/AboutPages";
import Pricing from './landing_page/home/Pricing';
import Product from './landing_page/products/ProductPages';
import Support from './landing_page/support/SupportPage';
import Signup from './landing_page/signup/Signup';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';




function App() {
  

  return (
    <>
     <Navbar />
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="product" element={<Product/>} />
      <Route path="support" element={<Support/>} />
      <Route path="signup" element={<Signup/>} />

      <Route path="*" element={<NotFound/>} />
      
     </Routes> 
     <Footer />       
    </>
  )
}

export default App
