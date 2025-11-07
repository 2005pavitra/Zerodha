import React from "react";

function Awards() {
  const awards = [
    {
      title: "Best Retail Broker",
      desc: "Awarded by NSE for excellence in retail trading services.",
      year: "2023",
    },
    {
      title: "Most Trusted Broker",
      desc: "Recognized by ET Now for exceptional customer satisfaction.",
      year: "2022",
    },
    {
      title: "Top Innovation in Fintech",
      desc: "Honored by Startup India for AI-based trading analytics.",
      year: "2024",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Our Achievements & Recognition 🏆
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-white to-blue-50 hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">
                {award.title}
              </h3>
              <p className="text-gray-600 mb-3">{award.desc}</p>
              <span className="text-sm text-gray-500 font-medium">
                {award.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
