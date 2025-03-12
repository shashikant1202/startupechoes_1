import React from 'react';
import ArticleCard from '../components/ArticleCard';
import { startupsArticles } from './categories/StartupsPage';
import { businessArticles } from './categories/BusinessPage';
import { economicArticles } from './categories/EconomicPage';
import { marketArticles } from './categories/MarketPage';

const AllArticlesPage = () => {
  // Combine all articles with their respective categories
  const allArticles = [
    ...startupsArticles.map(article => ({ ...article, category: 'Startups' })),
    ...businessArticles.map(article => ({ ...article, category: 'Business' })),
    ...economicArticles.map(article => ({ ...article, category: 'Economic' })),
    ...marketArticles.map(article => ({ ...article, category: 'Market' }))
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-red-500 mb-4">
            All Articles
          </h1>
          <div className="w-20 h-1 bg-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
            Explore our comprehensive collection of articles
          </p>
        </div>

        {/* Category Sections */}
        {['Startups', 'Business', 'Economic', 'Market'].map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 pl-4 border-l-4 border-red-500">
              {category} Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {allArticles
                .filter(article => article.category === category)
                .map((article, index) => (
                  <ArticleCard
                    key={`${category}-${index}`}
                    title={article.title}
                    excerpt={article.excerpt}
                    imageUrl={article.imageUrl}
                    category={article.category}
                  />
                ))}
            </div>
          </div>
        ))}

        {/* Articles Count */}
        <div className="text-center mt-12 pt-8 border-t dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-8 text-gray-600 dark:text-gray-400">
            <span>Total Articles: {allArticles.length}</span>
            <span>Startups: {allArticles.filter(a => a.category === 'Startups').length}</span>
            <span>Business: {allArticles.filter(a => a.category === 'Business').length}</span>
            <span>Economic: {allArticles.filter(a => a.category === 'Economic').length}</span>
            <span>Market: {allArticles.filter(a => a.category === 'Market').length}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllArticlesPage; 