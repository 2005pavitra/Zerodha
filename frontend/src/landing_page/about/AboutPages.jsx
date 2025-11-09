import React from 'react'

function AboutPages() {
   return (
    <section className="bg-white text-gray-700 py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            We pioneered the discount broking model in India.
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Today, we are the largest stock broker in the country, 
            with over <span className="font-semibold text-indigo-600">10+ million clients</span> 
            who actively trade and invest in the stock market.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our journey started with a simple idea — to make trading and investing 
            accessible, transparent, and affordable for everyone. We built a 
            platform that removes barriers, simplifies investing, and helps 
            people grow their wealth confidently.
          </p>
          <p className="text-lg leading-relaxed">
            From a small startup to one of India’s most trusted names in fintech, 
            we’ve stayed committed to one thing: 
            <span className="font-semibold text-indigo-600"> empowering retail investors.</span>
          </p>
        </div>

        {/* Right: Image / Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://zerodha.com/static/images/about-us.png"
            alt="Zerodha Office"
            className="rounded-xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto mt-24 text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
          We’re on a mission to redefine how India invests — with education, 
          technology, and trust at the core of everything we do. We believe that 
          wealth creation should be simple, transparent, and open to all.
        </p>
      </div>
    </section>
  )
}

export default AboutPages