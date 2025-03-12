import React from 'react';
import CategoryPage from '../../components/CategoryPage';

export const businessArticles = [
  {
    id: 7,
    title: "Business Leadership in Digital Age",
    excerpt: "How modern leaders are adapting to digital transformation.",
    author: "Startup Echoes",
    date: "Feb 15, 2024",
    imageUrl: "/images/business1.jpg",
    category: "Business",
    content: [
      {
        type: 'introduction',
        text: `In today's rapidly evolving digital landscape, business leadership requires a new set of skills and perspectives. This article explores how modern leaders are adapting to digital transformation and leading their organizations into the future.`
      },
      {
        type: 'subheading',
        text: '1. Digital Transformation Leadership'
      },
      {
        type: 'paragraph',
        text: `Modern business leaders must understand and embrace digital technologies while guiding their organizations through transformative change.`
      },
      {
        type: 'bulletPoints',
        title: 'Key Leadership Skills in Digital Age:',
        points: [
          'Digital literacy and technological awareness',
          'Change management expertise',
          'Data-driven decision making',
          'Agile leadership approach'
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Sustainable Business Practices",
    excerpt: "Implementing eco-friendly strategies in modern business.",
    author: "Startup Echoes",
    date: "Feb 14, 2024",
    imageUrl: "/images/business2.jpg",
    category: "Business"
  },
  {
    id: 9,
    title: "Global Business Expansion Strategies",
    excerpt: "Key considerations for taking your business international.",
    author: "Startup Echoes",
    date: "Feb 13, 2024",
    imageUrl: "/images/business3.jpg",
    category: "Business"
  },
  {
    id: 10,
    title: "Remote Work Revolution",
    excerpt: "How businesses are adapting to the new normal of remote work.",
    author: "Startup Echoes",
    date: "Feb 12, 2024",
    imageUrl: "/images/business4.jpg",
    category: "Business"
  },
  {
    id: 11,
    title: "Digital Marketing Mastery",
    excerpt: "Effective strategies for online business growth and customer engagement.",
    author: "Startup Echoes",
    date: "Feb 11, 2024",
    imageUrl: "/images/business5.jpg",
    category: "Business"
  },
  {
    id: 12,
    title: "Supply Chain Innovation",
    excerpt: "Modern solutions for supply chain management and optimization.",
    author: "Startup Echoes",
    date: "Feb 10, 2024",
    imageUrl: "/images/business6.jpg",
    category: "Business"
  }
];

const BusinessPage = () => {
  return (
    <CategoryPage
      title="Business Insights"
      description="Stay informed about the latest business trends, management strategies, and corporate innovations. Get expert insights on running and growing successful businesses."
      articles={businessArticles}
    />
  );
};

export default BusinessPage; 