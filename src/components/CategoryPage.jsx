import React from 'react';
import ArticleCard from './ArticleCard';

const CategoryPage = ({ title, description, articles }) => {
  return (
    <div className="pt-16 bg-white dark:bg-gray-900">
      {/* Category Header */}
      <div className="container mx-auto px-5 py-4 text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4 hover:text-red-600 transition-colors duration-300">
          {title}
        </h1>
        <p className="text-xl text-gray-800 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-medium">
          {description}
        </p>
      </div>

      {/* Articles Grid */}
      <section className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <ArticleCard 
              key={article.id}
              id={article.id}
              title={article.title}
              excerpt={article.excerpt}
              author={article.author}
              date={article.date}
              imageUrl={article.imageUrl}
              category={article.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoryPage; 