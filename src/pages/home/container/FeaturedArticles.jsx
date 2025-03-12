import React from 'react';
import { Link } from 'react-router-dom';
import ArticleCard from '../../../components/ArticleCard';
import images from '../../../constants/images';  // Import images from constants
import PostProfileImage from '../../../assets/posts/profile_pic_1.svg';  // Updated import path
import { FaBookmark, FaShare, FaComment } from 'react-icons/fa';
// Add these imports for article data
import { startupsArticles } from '../../../pages/categories/StartupsPage';
import { businessArticles } from '../../../pages/categories/BusinessPage';
import { economicArticles } from '../../../pages/categories/EconomicPage';
import { marketArticles } from '../../../pages/categories/MarketPage';

const FeaturedArticles = () => {
  // Get actual article counts
  const categoryInfo = [
    { 
      name: 'Startups', 
      icon: '🚀', 
      count: startupsArticles.length,  // This will show actual count from StartupsPage
      color: 'red-500' 
    },
    { 
      name: 'Business', 
      icon: '💼', 
      count: businessArticles.length,  // This will show actual count from BusinessPage
      color: 'blue-500' 
    },
    { 
      name: 'Economics', 
      icon: '📈', 
      count: economicArticles.length,  // This will show actual count from EconomicPage
      color: 'green-500' 
    },
    { 
      name: 'Market', 
      icon: '🌐', 
      count: marketArticles.length,    // This will show actual count from MarketPage
      color: 'purple-500' 
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-500 mb-4">
            Featured Articles
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {/* Main Featured Article - Simplified */}
            <Link to="/services" className="block group">
              <div className="relative h-full overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <img 
                  src={images.PostImage}
                  alt="Main Featured Article"
                  className="w-full h-[750px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 p-6">
                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                      Empowering Your Business with Expert Services
                    </h3>

                    {/* Call to Action */}
                    <span className="inline-flex items-center text-white group-hover:text-red-500 transition-colors">
                      Explore Services 
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Side Featured Content */}
          <div className="space-y-6">
            {/* Top Stories Section - Updated */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-red-500 mb-4 flex items-center">
                <span className="mr-2">📈</span> Trending Now
              </h3>
              <div className="space-y-4">
                {[1, 2, 3].map((index) => (
                  <Link 
                    key={index}
                    to={`/article/${index}`}
                    className="flex items-start gap-4 group"
                  >
                    <span className="text-2xl font-bold text-gray-300 group-hover:text-red-500 transition-colors">
                      0{index}
                    </span>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 group-hover:text-red-500 transition-colors">
                        {index === 1 && "AI Revolution in Business"}
                        {index === 2 && "Future of Startups 2024"}
                        {index === 3 && "Digital Marketing Trends"}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Stay Updated!</h3>
              <p className="text-white/90 text-sm mb-4">
                Get the latest insights delivered to your inbox weekly.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-white/20 placeholder-white/70 text-white border border-white/30 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-2 bg-white text-red-500 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Quick Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-red-500 mb-4">
                Popular Categories
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {categoryInfo.map((category) => (
                  <Link
                    key={category.name}
                    to={`/category/${category.name.toLowerCase()}`}
                    className="flex items-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-red-50 dark:hover:bg-gray-700/80 group transition-colors"
                  >
                    <span className="text-xl">{category.icon}</span>
                    <div>
                      <h4 className="font-medium text-gray-800 dark:text-gray-200 group-hover:text-red-500 transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {category.count} articles
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles; 