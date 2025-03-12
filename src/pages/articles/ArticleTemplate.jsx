import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MainLayout from '../../components/MainLayout';
import { startupsArticles } from '../categories/StartupsPage';
import { businessArticles } from '../categories/BusinessPage';
import { economicArticles } from '../categories/EconomicPage';
import { marketArticles } from '../categories/MarketPage';
import { MdArrowBack, MdVerified, MdShare, MdBookmark } from 'react-icons/md';
import PostProfileImage from '../../assets/posts/profile_pic_1.svg';
import { articlesContent } from '../../data/articles';
import images from '../../constants/images';

const ArticleTemplate = ({ category }) => {
  const { id } = useParams();
  const articleId = `${category.toLowerCase()}-${id}`;
  const numericId = parseInt(id);

  const getCategoryArticles = (category) => {
    switch (category) {
      case 'Startups': return startupsArticles;
      case 'Business': return businessArticles;
      case 'Economic': return economicArticles;
      case 'Market': return marketArticles;
      default: return [];
    }
  };

  const article = getCategoryArticles(category).find(article => article.id === numericId);
  const content = articlesContent[articleId];

  if (!article) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Article not found</h2>
            <Link to="/" className="text-blue-500 hover:underline">Return to Home</Link>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent">
            <div className="container mx-auto h-full flex flex-col justify-end px-4 pb-12">
              <div className="max-w-4xl">
                <span className="inline-block bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                  {article.category}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {article.title}
                </h1>
                <p className="text-lg text-gray-200 mb-6">
                  {article.excerpt}
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
              to={`/${category.toLowerCase()}`}
              className="inline-flex items-center text-red-500 hover:text-red-600 mb-8 group transition-colors"
            >
              <MdArrowBack className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to {category}
            </Link>

            {/* Author Info with new logo */}
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-xl p-6 mb-12 shadow-lg">
              <div className="flex items-center">
                <img 
                  src={images.AuthorImage}
                  alt={article.author}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-red-500"
                />
                <div>
                  <div className="flex items-center">
                    <h3 className="font-bold text-red-500 mr-2">{article.author}</h3>
                    <MdVerified className="w-5 h-5 text-blue-500" />
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{article.date}</p>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none dark:prose-invert">
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
                      <section key={index}>
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
                  <div className="mt-12 bg-gray-50 dark:bg-gray-800 border-l-4 border-red-500 p-6 rounded">
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

            {/* Article Footer */}
            <footer className="mt-12 pt-8 border-t dark:border-gray-700">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 dark:text-gray-400">Category:</span>
                  <Link 
                    to={`/${category.toLowerCase()}`}
                    className="text-red-500 hover:text-red-600 font-medium"
                  >
                    {article.category}
                  </Link>
                </div>
                <div className="flex gap-4">
                  {/* Additional footer content */}
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ArticleTemplate; 