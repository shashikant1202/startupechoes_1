import React from 'react';
import CategoryPage from '../../components/CategoryPage';

export const economicArticles = [
  {
    id: 13,
    title: "Global Economic Trends 2024",
    excerpt: "Analysis of major economic shifts and their impact on markets.",
    author: "Startup Echoes",
    date: "Feb 15, 2024",
    imageUrl: "/images/economic1.jpg",
    category: "Economic",
    content: [
      {
        type: 'introduction',
        text: `As we navigate through 2024, several key economic trends are shaping the global financial landscape. Understanding these trends is crucial for businesses and investors alike.`
      },
      {
        type: 'subheading',
        text: '1. Digital Economy Growth'
      },
      {
        type: 'paragraph',
        text: `The digital economy continues to expand rapidly, transforming traditional business models and creating new opportunities.`
      },
      {
        type: 'bulletPoints',
        title: 'Key Economic Trends:',
        points: [
          'Digital transformation acceleration',
          'Sustainable finance growth',
          'Emerging market developments',
          'Global trade patterns shift'
        ]
      }
    ]
  },
  {
    id: 14,
    title: "Digital Currency Evolution",
    excerpt: "How cryptocurrencies are reshaping the economic landscape.",
    author: "Startup Echoes",
    date: "Feb 14, 2024",
    imageUrl: "/images/economic2.jpg",
    category: "Economic"
  },
  {
    id: 15,
    title: "Inflation Impact Analysis",
    excerpt: "Understanding current inflation trends and their effects.",
    author: "Startup Echoes",
    date: "Feb 13, 2024",
    imageUrl: "/images/economic3.jpg",
    category: "Economic"
  },
  {
    id: 16,
    title: "Green Economy Transition",
    excerpt: "Economic implications of sustainable development and clean energy.",
    author: "Startup Echoes",
    date: "Feb 12, 2024",
    imageUrl: "/images/economic4.jpg",
    category: "Economic"
  },
  {
    id: 17,
    title: "Global Trade Dynamics",
    excerpt: "Analysis of international trade relationships and emerging patterns.",
    author: "Startup Echoes",
    date: "Feb 11, 2024",
    imageUrl: "/images/economic5.jpg",
    category: "Economic"
  },
  {
    id: 18,
    title: "Future of Banking",
    excerpt: "How fintech is transforming traditional banking systems.",
    author: "Startup Echoes",
    date: "Feb 10, 2024",
    imageUrl: "/images/economic6.jpg",
    category: "Economic"
  }
];

const EconomicPage = () => {
  return (
    <CategoryPage
      title="Economic Analysis"
      description="Deep dive into economic trends, policies, and their impact on global markets. Get expert analysis on monetary policy, fiscal trends, and economic indicators."
      articles={economicArticles}
    />
  );
};

export default EconomicPage; 