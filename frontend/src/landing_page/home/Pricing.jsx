import React from "react";

function Pricing() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Simple, Transparent Pricing</h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        No hidden fees, no surprises. Trade with full transparency and unbeatable pricing.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-8">
        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Equity Delivery</h3>
          <p className="text-4xl font-bold mb-2">₹0</p>
          <p className="text-gray-500">No brokerage charges</p>
        </div>

        <div className="p-8 border rounded-2xl shadow-sm hover:shadow-md transition duration-300">
          <h3 className="text-xl font-semibold text-indigo-600 mb-4">Intraday & F&O</h3>
          <p className="text-4xl font-bold mb-2">₹20</p>
          <p className="text-gray-500">Per executed order</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
