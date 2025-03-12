import React, { useState } from "react";
import { FaLinkedin, FaWhatsapp, FaArrowRight } from "react-icons/fa";
import heroImage from "../../../assets/hero_section.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showContactMenu, setShowContactMenu] = useState(false);

  return (
    <section className="relative px-1 pt-0 pb-15 lg:py-0 lg:pb-15 bg-light-gray dark:bg-gray-900">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Left Section: Heading, Description, and Buttons */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-5xl sm:text-5xl lg:text-7xl font-extrabold text-dark-hard dark:text-white leading-tight">
            StartupEchoes:
            <br />
            <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-500">
              Echoing Success from Startups to Giants
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-gray-800 dark:text-gray-300 max-w-md mx-auto lg:mx-0">
            Dives deep into the highs and lows of business, uncovering success stories and cautionary tales to inspire and inform today's entrepreneurs.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <Link
              to="/about"
              className="inline-block bg-red-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300"
            >
              Get Started
            </Link>
            <div className="relative">
              <button
                onClick={() => setShowContactMenu(!showContactMenu)}
                className="inline-block bg-transparent border-2 border-red-500 text-red-500 font-semibold px-6 py-3 rounded-full hover:bg-red-500 hover:text-white transition-all duration-300"
              >
                Contact Us
              </button>
              {showContactMenu && (
                <div className="absolute mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50">
                  <a
                    href="https://www.linkedin.com/company/startupechoes/posts/?feedView=all"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FaLinkedin className="w-5 h-5 text-[#0A66C2]" />
                    <span>LinkedIn Page</span>
                  </a>
                  <a
                    href="https://whatsapp.com/channel/0029VapxJYZDjiOgCZgaRn3O"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                    <span>WhatsApp Channel</span>
                  </a>
                </div>
              )}
            </div>
          </div>
          
          {/* Full-Width Action Button */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <Link
              to="/services"
              className="w-full lg:w-3/4 text-center bg-red-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-red-600 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>

          {/* Popular Tags Section */}
          <div className="text-center lg:text-left mt-6">
            <span className="text-lg font-semibold text-red-500 dark:text-gray-300">Popular Topics:</span>
            <div className="flex flex-wrap gap-3 mt-2 justify-center lg:justify-start">
              <Link
                to="/startups"
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                #Startups
              </Link>
              <Link
                to="/business"
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                #Business
              </Link>
              <Link
                to="/economic"
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                #Economics
              </Link>
              <Link
                to="/market"
                className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-all"
              >
                #Market
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section: Hero Image */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full max-w-lg h-auto object-contain transition-all duration-300 dark:brightness-[0.85] dark:contrast-[1.1] dark:saturate-[0.95] brightness-[1.05] contrast-[1] saturate-[1.05]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
