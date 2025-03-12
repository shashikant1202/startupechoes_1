import React from "react";
import { FaArrowRight } from "react-icons/fa";
import heroImage from "../../../assets/hero_section.svg";

const Hero = () => {
  return (
    <section className="bg-light-gray dark:bg-gray-900 relative px-5 pb-5 lg:px-5 lg:pb-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6 px-3">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-dark-hard bg-dark-hard lg:4xl xl:5xl">
            StartupEchoes: <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">
              Echoing Success from Startups to Giants
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-800 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
            Dives deep into the highs and lows of business, uncovering success stories and cautionary tales to inspire and inform today's entrepreneurs.
          </p>

          <div className="space-y-4 sm:space-x-4 lg:mt-6 xl:mt-10">
            <a
              href="/about"
              className="inline-block bg-red-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="/contact"
              className="inline-block bg-transparent border-2 border-red-500 text-red-500 font-semibold px-6 py-3 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
            >
              Contact Us <FaArrowRight className="inline ml-2" />
            </a>
          </div>

          {/* New Single Button Instead of Search Bar */}
          <div className="mt-8 space-y-4 lg:space-y-6">
            <button
              className="w-full lg:w-3/4 bg-red-500 text-white px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300"
            >
              Explore Our Articles
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pl-9">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-lg h-auto object-cover dark:filter dark:brightness-90"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
