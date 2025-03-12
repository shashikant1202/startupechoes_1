import React from 'react'
import Header from './Header';
import Footer from './Footer';

const MainLayout = ({children}) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout
