import React from "react";

function OpenAccount() {
  return (
    <section className="py-20 text-center bg-white">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Open Your Account Now</h2>
      <p className="text-gray-600 mb-8">
        Join millions of investors and start your journey towards financial freedom.
      </p>
      <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-md transition duration-300">
        Open Account
      </button>
    </section>
  );
}

export default OpenAccount;
