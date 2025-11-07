import React from "react";

function Stats() {
  const stats = [
    { number: "10+ Million", label: "Users Trust Us" },
    { number: "₹2L+ Cr", label: "Daily Trading Volume" },
    { number: "4.9★", label: "App Store Rating" },
  ];

  return (
    <section className="bg-blue-50 py-16">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 text-center gap-8">
        {stats.map((stat, i) => (
          <div key={i}>
            <h3 className="text-4xl font-bold text-indigo-600">{stat.number}</h3>
            <p className="text-gray-600 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
