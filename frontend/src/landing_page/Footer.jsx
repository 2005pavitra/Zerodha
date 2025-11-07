import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center sm:text-left">
        <div>
          <h3 className="text-white font-semibold mb-3">Zerodha Clone</h3>
          <p>Invest smarter with AI-powered insights and modern trading tools.</p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Education</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <p>Email: support@zerodhaclone.com</p>
          <p>© 2025 Zerodha Clone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
