import React from 'react';
import MainLayout from '../../components/MainLayout';
import Hero from "./container/Hero";
import FeaturedArticles from "./container/FeaturedArticles";
import Articles from "./container/Articles";
import CTA from "./container/CTA";

const Homepage = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturedArticles />
      <Articles />
      <CTA />
    </MainLayout>
  );
};

export default Homepage;
