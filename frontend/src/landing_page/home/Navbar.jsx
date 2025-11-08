import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
        <h1 className="text-2xl font-bold text-indigo-600">Zerodha+</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li>
            <Link to="/about" className="hover:text-indigo-600">
              About 
            </Link>
          </li>
          <li>
            <Link to= "/product" className="hover:text-indigo-600">
              Product
            </Link> 
          </li>
          <li>
            <Link to="/pricing" className="hover:text-indigo-600">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/support" className="hover:text-indigo-600">
              Support
            </Link>
          </li>

        </ul>

      

        {/* Signup Button */}
        <div className="hidden md:block">
          <Link to="/signup">
            <button className="px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-gray-700 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md text-center py-4 space-y-3">
          <Link to="/about" className="block hover:text-indigo-600">
            About
          </Link>   
          <Link to="/product" className="block hover:text-indigo-600">
            Product
          </Link> 
          <Link to="/pricing" className="block hover:text-indigo-600">
            Pricing
          </Link>
          <Link to="/support" className="block hover:text-indigo-600">
            Support
          </Link>
          <Link to="/signup" className="block">
            <button className="w-full px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold">
              Sign Up
            </button>
          </Link> 

        </div>  

      )}
    </nav>  

  );  
}

export default Navbar;
