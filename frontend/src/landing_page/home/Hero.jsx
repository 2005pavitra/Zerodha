import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-3xl">
        
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Invest in <span className="text-indigo-600">everything</span>
        </h1>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          The smart platform to invest in <span className="font-semibold">stocks, derivatives, mutual funds, ETFs, bonds</span>, and more — all in one place.
        </p>

        <Link to="/signup">
        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-md transition duration-300">
          Sign up for free
        </button>
        </Link>
      </div>
    </section>
  );
}

export default Hero;
