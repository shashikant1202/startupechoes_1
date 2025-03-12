import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowBack, MdVerified } from 'react-icons/md';
import images from '../constants/images';

const ArticleLayout = ({ 
  title, 
  excerpt, 
  category, 
  imageUrl, 
  content, 
  date 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-200">
      {/* Hero Section */}
      {/* Author Info */}
      {/* Article Content */}
      {/* ... Rest of the layout structure ... */}
    </div>
  );
};

export default ArticleLayout; 