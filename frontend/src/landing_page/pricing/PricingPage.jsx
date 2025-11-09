import React from "react";

function PricingPage() {
  return (
    <section className="bg-white text-gray-700 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Simple. Transparent. Affordable.
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We pioneered the concept of discount broking in India.  
          Now we’re the largest stock broker — by keeping our pricing simple and honest.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        {/* Card 1 */}
        <div className="border rounded-2xl p-8 hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Free equity delivery
          </h3>
          <p className="text-gray-600 mb-6">
            We don’t charge anything for equity delivery trades and direct mutual funds.
          </p>
          <p className="text-4xl font-bold text-indigo-600 mb-2">₹0</p>
          <p className="text-gray-500">per trade</p>
        </div>

        {/* Card 2 */}
        <div className="border rounded-2xl p-8 hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Intraday & F&O
          </h3>
          <p className="text-gray-600 mb-6">
            Flat brokerage across all segments — equity, F&O, currency, and commodity.
          </p>
          <p className="text-4xl font-bold text-indigo-600 mb-2">₹20</p>
          <p className="text-gray-500">per executed order</p>
        </div>

        {/* Card 3 */}
        <div className="border rounded-2xl p-8 hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Free account maintenance
          </h3>
          <p className="text-gray-600 mb-6">
            No AMC for your demat account in the first year.  
            Continue investing with zero hidden fees.
          </p>
          <p className="text-4xl font-bold text-indigo-600 mb-2">₹0</p>
          <p className="text-gray-500">first year AMC</p>
        </div>
      </div>

      {/* Note */}
      <div className="max-w-4xl mx-auto text-center mt-16">
        <p className="text-gray-500 text-sm leading-relaxed">
          *Call & trade and RMS square-off orders are charged at ₹50 + GST per order.  
          *All other statutory charges (STT, transaction charges, etc.) apply as per SEBI norms.
        </p>
      </div>

      {/* CTA */}
      <div className="max-w-6xl mx-auto text-center mt-20">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Open an account today. It’s completely free.
        </h3>
        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-semibold transition">
          Get started
        </button>
      </div>
    </section>
  );
}

export default PricingPage;
