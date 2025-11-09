import React from "react";

function ProductPages() {
  const products = [
    {
      name: "Kite",
      description:
        "Our ultra-fast flagship trading platform with advanced charts, elegant UI, and powerful features to trade seamlessly across devices.",
      img: "https://zerodha.com/static/images/products-kite.png",
      link: "#",
    },
    {
      name: "Console",
      description:
        "The central dashboard for your Zerodha account. View your portfolio, track performance, manage funds, and access reports in one place.",
      img: "https://zerodha.com/static/images/products-console.png",
      link: "#",
    },
    {
      name: "Coin",
      description:
        "Invest in direct mutual funds without paying commissions. Save more and earn more through the Coin platform.",
      img: "https://zerodha.com/static/images/products-coin.png",
      link: "#",
    },
    {
      name: "Varsity",
      description:
        "An open, free, and structured collection of stock market and investing lessons designed to educate and empower retail investors.",
      img: "https://zerodha.com/static/images/products-varsity.png",
      link: "#",
    },
    {
      name: "Trading APIs",
      description:
        "Build your own trading platforms, integrate with market data, and automate strategies using Zerodha’s robust APIs.",
      img: "https://zerodha.com/static/images/products-api.png",
      link: "#",
    },
  ];

  return (
    <section className="bg-white text-gray-700 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Powerful yet simple tools built for traders and investors of all levels.  
          Experience seamless trading and investing across web and mobile.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition duration-300 p-6 flex flex-col items-center text-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="h-40 object-contain mb-6"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <a
              href={product.link}
              className="text-indigo-600 font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductPages;
