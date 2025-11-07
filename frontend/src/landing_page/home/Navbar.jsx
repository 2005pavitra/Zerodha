import React, { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600">Zerodha+</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          <li><a href="#about" className="hover:text-indigo-600 transition">About</a></li>
          <li><a href="#product" className="hover:text-indigo-600 transition">Product</a></li>
          <li><a href="#pricing" className="hover:text-indigo-600 transition">Pricing</a></li>
          <li><a href="#support" className="hover:text-indigo-600 transition">Support</a></li>
        </ul>

        {/* Signup Button */}
        <button className="hidden md:inline px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition">
          Sign Up
        </button>

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
          <a href="#about" className="block text-gray-700 hover:text-indigo-600">About</a>
          <a href="#product" className="block text-gray-700 hover:text-indigo-600">Product</a>
          <a href="#pricing" className="block text-gray-700 hover:text-indigo-600">Pricing</a>
          <a href="#support" className="block text-gray-700 hover:text-indigo-600">Support</a>
          <button className="mt-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
