import React from 'react';
import CategoryPage from '../../components/CategoryPage';
import images from '../../constants/images';

export const startupsArticles = [
  {
    id: 1,
    title: "How to Turn Your Startup Idea into a Successful Business",
    excerpt: "A comprehensive guide to transforming your business idea into reality, from validation to scaling.",
    author: "Startup Echoes",
    date: "Feb 15, 2024",
    imageUrl: images.startups.post1,
    category: "Startups"
  },
  {
    id: 2,
    title: "Funding Your Startup: Exploring Investment Options",
    excerpt: "Discusses bootstrapping, angel investors, venture capital, crowdfunding, and grants.",
    author: "Startup Echoes",
    date: "Feb 14, 2024",
    imageUrl: images.startups.post2,
    category: "Startups"
  },
  {
    id: 3,
    title: "Common Startup Mistakes and How to Avoid Them",
    excerpt: "Highlights pitfalls like poor market research, lack of funding, and weak team dynamics.",
    author: "Startup Echoes",
    date: "Feb 13, 2024",
    imageUrl: images.startups.post3,
    category: "Startups"
  },
  {
    id: 4,
    title: "Growth Hacking Strategies for Startups",
    excerpt: "Shares cost-effective marketing and growth strategies used by successful startups.",
    author: "Startup Echoes",
    date: "Feb 12, 2024",
    imageUrl: images.startups.post4,
    category: "Startups"
  },
  {
    id: 5,
    title: "How to Build a Strong Startup Team and Culture",
    excerpt: "Explores hiring, leadership, and fostering a positive work environment.",
    author: "Startup Echoes",
    date: "Feb 11, 2024",
    imageUrl: images.startups.post5,
    category: "Startups"
  },
  {
    id: 6,
    title: "The Role of AI and Technology in Modern Startups",
    excerpt: "Explains how startups can leverage AI, automation, and emerging technologies for scalability",
    author: "Startup Echoes",
    date: "Feb 10, 2024",
    imageUrl: images.startups.post6,
    category: "Startups"
  }
];

const StartupsPage = () => {
  return (
    <CategoryPage
      title="Startup Insights"
      description="Stay informed about the latest trends, strategies, and success stories in the startup ecosystem. Get expert advice on launching and growing your startup."
      articles={startupsArticles}
    />
  );
};

export default StartupsPage; 