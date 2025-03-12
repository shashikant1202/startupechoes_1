import React from 'react';
import { Link } from 'react-router-dom';
import { MdVerified } from "react-icons/md";
import images from '../constants/images';

const ArticleCard = ({ 
  id,
  title, 
  excerpt, 
  author,
  date,
  imageUrl, 
  category,
  className
}) => {
  const getArticleUrl = (category, id) => `/article/${category.toLowerCase()}-${id}`;

  return (
    <Link to={getArticleUrl(category, id)} className="block h-[400px] transform transition-all duration-300 hover:-translate-y-1">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
        {/* Image Container - Fixed Height */}
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container - Fixed Height with Padding */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Category Badge */}
          <span className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-3">
            {category}
          </span>

          {/* Title - Max 2 Lines */}
          <h3 className="font-bold text-xl text-red-500 dark:text-red-500 mb-2 overflow-hidden text-ellipsis display-webkit-box [-webkit-line-clamp:2] [-webkit-box-orient:vertical] h-[56px] hover:text-red-600 transition-colors duration-300">
            {title}
          </h3>

          {/* Excerpt - Max 2 Lines */}
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 overflow-hidden text-ellipsis display-webkit-box [-webkit-line-clamp:2] [-webkit-box-orient:vertical] h-[40px]">
            {excerpt}
          </p>

          {/* Author Info - Fixed at Bottom */}
          <div className="mt-auto flex items-center">
            <img 
              src={images.AuthorImage}
              alt={author}
              className="w-8 h-8 rounded-full mr-2 border border-red-500"
            />
            <div>
              <div className="flex items-center">
                <p className="text-gray-900 dark:text-white font-semibold text-sm truncate max-w-[120px]">
                  {author}
                </p>
                <MdVerified className="w-4 h-4 text-blue-500 ml-1" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 text-xs">
                {date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
