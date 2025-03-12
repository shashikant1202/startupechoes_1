import React from 'react';

const CTA = () => {
  return (
    <>
      {/* SVG Wave */}
      <svg
        className="w-full h-auto max-h-80 -mb-1"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          className="fill-[#0D2436] dark:fill-gray-800"
        />
      </svg>

      {/* CTA Section */}
      <section className="relative bg-[#0D2436] dark:bg-gray-800 px-5 py-10 flex items-center justify-center">
        <div className="container mx-auto flex flex-col items-center space-y-8">
          {/* Heading */}
          <h2 className="text-white font-roboto font-bold text-2xl md:text-3xl lg:text-4xl text-center max-w-lg">
            Get our latest articles delivered to your inbox
          </h2>

          {/* Email Form */}
          <div className="w-full max-w-md space-y-3">
            <input
              type="email"
              className="px-4 py-3 rounded-lg w-full placeholder:text-gray-400 text-gray-900 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-500 transition-all duration-300"
              placeholder="Your Email"
            />
            <button
              className="px-4 py-3 rounded-lg w-full bg-red-500 text-white font-bold hover:bg-red-600 transition"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
