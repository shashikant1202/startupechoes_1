import React from 'react';
import ArticleCard from '../../../components/ArticleCard';
import { MdArrowForward } from 'react-icons/md';
import { startupsArticles } from '../../../pages/categories/StartupsPage';
import { Link } from 'react-router-dom';

const Articles = () => {
  return (
    <section className="container mx-auto px-5 py-4 lg:px-5 lg:py-6">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-red-500 mb-4">
          Latest Startup Articles
        </h2>
        <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
          Essential insights for startup founders and entrepreneurs
        </p>
      </div>

      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {startupsArticles.map((article) => (
          <ArticleCard 
            key={article.id}
            id={article.id}
            title={article.title}
            excerpt={article.excerpt}
            author={article.author}
            date={article.date}
            imageUrl={article.imageUrl}
            category={article.category}
            showReadMore={true}
          />
        ))}
      </div>

      {/* View All Articles button */}
      <div className="flex justify-center mt-8">
        <Link 
          to="/all-articles"
          className="flex items-center gap-2 px-6 py-3 border-2 border-red-500 text-black dark:text-white font-semibold rounded-lg shadow-md hover:bg-red-500 hover:text-white dark:hover:text-white transition-all duration-200"
        >
          View All Articles
          <MdArrowForward className="w-5 h-5 font-bold" />
        </Link>
      </div>
    </section>
  );
};

export default Articles;
