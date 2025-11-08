import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-50 border-t text-gray-600 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-600">About</a></li>
            <li><a href="#" className="hover:text-indigo-600">Products</a></li>
            <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
            <li><a href="#" className="hover:text-indigo-600">Referral programme</a></li>
            <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
            <li><a href="#" className="hover:text-indigo-600">Press & media</a></li>
            <li><a href="#" className="hover:text-indigo-600">Zerodha.tech</a></li>
            <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-600">Support portal</a></li>
            <li><a href="#" className="hover:text-indigo-600">Z-Connect blog</a></li>
            <li><a href="#" className="hover:text-indigo-600">List of charges</a></li>
            <li><a href="#" className="hover:text-indigo-600">Downloads & resources</a></li>
            <li><a href="#" className="hover:text-indigo-600">Market overview</a></li>
            <li><a href="#" className="hover:text-indigo-600">How to file a complaint</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Account</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-indigo-600">Open an account</a></li>
            <li><a href="#" className="hover:text-indigo-600">Fund transfer</a></li>
            <li><a href="#" className="hover:text-indigo-600">Login</a></li>
          </ul>
        </div>

        {/* Column 4 - Social */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect</h3>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-500 hover:text-indigo-600"><FaTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-indigo-600"><FaFacebookF /></a>
            <a href="#" className="text-gray-500 hover:text-indigo-600"><FaInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-indigo-600"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-500 hover:text-indigo-600"><FaYoutube /></a>
          </div>
          <p className="text-gray-500">
            © 2025 Zerodha Clone<br />
            All rights reserved.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t mx-6"></div>

      {/* Disclaimer Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 text-gray-500 text-xs leading-relaxed space-y-4">
        <p>
          Zerodha Clone is a simulated project inspired by the design and structure of Zerodha.
          This platform is created solely for educational and development purposes and does not represent
          actual trading or financial services.
        </p>
        <p>
          Trading in the stock market involves risks. Always conduct your own research or consult a financial advisor
          before making investment decisions.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
