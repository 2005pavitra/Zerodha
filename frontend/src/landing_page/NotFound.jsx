import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 mb-8 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link to="/">
        <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition">
          Go Back Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
