import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdVerified } from 'react-icons/md';
import images from '../../constants/images';
import { articlesContent } from '../../data/articles';

const StartupArticleTwo = () => {
  const content = articlesContent['startups-2'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src={images.startups.post2}
          alt="Funding Your Startup: Exploring Investment Options"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
          <div className="container mx-auto h-full flex flex-col justify-end px-4 pb-12">
            <div className="max-w-4xl">
              <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                Startups
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-red-500 mb-4 hover:text-red-600 transition-colors duration-300">
                Funding Your Startup: Exploring Investment Options
              </h1>
              <p className="text-lg text-gray-200 mb-6">
                Discusses bootstrapping, angel investors, venture capital, crowdfunding, and grants.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Navigation */}
          <Link 
            to="/startups"
            className="inline-flex items-center text-red-500 hover:text-red-600 mb-8 group transition-colors"
          >
            <MdArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Startups
          </Link>

          {/* Author Info */}
          <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-6 mb-12 shadow-lg">
            <div className="flex items-center">
              <img 
                src={images.AuthorImage}
                alt="Startup Echoes"
                className="w-14 h-14 rounded-full mr-4 border-2 border-red-500"
              />
              <div>
                <div className="flex items-center">
                  <h3 className="font-bold text-red-500 mr-2">Startup Echoes</h3>
                  <MdVerified className="w-5 h-5 text-blue-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-400">Feb 14, 2024</p>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none dark:prose-invert bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            {content ? (
              <>
                {/* Introduction */}
                <div className="mb-12">
                  <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
                    {content.introduction}
                  </p>
                </div>

                {/* Main Content Sections */}
                <div className="space-y-12">
                  {content.sections.map((section, index) => (
                    <section key={index} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6">
                      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                        {section.title}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 mb-6">
                        {section.content}
                      </p>
                      {section.bullets && (
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                          {section.bullets.map((bullet, i) => (
                            <li key={i}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>

                {/* Conclusion */}
                <div className="mt-12 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-6 rounded-lg">
                  <p className="italic text-gray-700 dark:text-gray-300">
                    {content.conclusion}
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  This article is coming soon...
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupArticleTwo; 