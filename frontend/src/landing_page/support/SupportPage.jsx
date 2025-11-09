import React from "react";
import { FaSearch, FaQuestionCircle, FaUser, FaWallet, FaChartLine, FaFileAlt } from "react-icons/fa";

function SupportPage() {
  const topics = [
    {
      icon: <FaUser className="text-indigo-600 text-3xl mb-3" />,
      title: "Account Opening",
      desc: "Everything you need to know about opening, managing, or closing your account.",
    },
    {
      icon: <FaWallet className="text-indigo-600 text-3xl mb-3" />,
      title: "Funds & Withdrawals",
      desc: "Guides for adding, transferring, or withdrawing funds securely.",
    },
    {
      icon: <FaChartLine className="text-indigo-600 text-3xl mb-3" />,
      title: "Trading & Orders",
      desc: "Learn how to place trades, manage positions, and use advanced order types.",
    },
    {
      icon: <FaFileAlt className="text-indigo-600 text-3xl mb-3" />,
      title: "Reports & Console",
      desc: "Get detailed insights and reports about your portfolio and trades.",
    },
    {
      icon: <FaQuestionCircle className="text-indigo-600 text-3xl mb-3" />,
      title: "General Queries",
      desc: "Answers to frequently asked questions about Zerodha’s services.",
    },
  ];

  return (
    <section className="bg-white text-gray-700 py-24 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          How can we help you?
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Search for help articles, FAQs, or get in touch with our support team.
        </p>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto flex items-center bg-gray-100 rounded-full px-4 py-3 shadow-inner">
          <FaSearch className="text-gray-400 text-lg mr-3" />
          <input
            type="text"
            placeholder="Search for topics, issues, or keywords..."
            className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
          />
        </div>
      </div>

      {/* Support Topics Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {topics.map((topic, i) => (
          <div
            key={i}
            className="p-8 border rounded-2xl hover:shadow-md transition duration-300 text-center"
          >
            {topic.icon}
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {topic.title}
            </h3>
            <p className="text-gray-600">{topic.desc}</p>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto text-center mt-24">
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Still need help?
        </h3>
        <p className="text-gray-600 mb-6">
          Can’t find what you’re looking for? Contact our support team and we’ll
          get back to you as soon as possible.
        </p>
        <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full transition duration-300">
          Get in Touch
        </button>
      </div>
    </section>
  );
}

export default SupportPage;
