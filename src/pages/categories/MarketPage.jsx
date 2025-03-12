import React from 'react';
import CategoryPage from '../../components/CategoryPage';

export const marketArticles = [
  {
    id: 19,
    title: "Market Analysis: Tech Sector",
    excerpt: "In-depth analysis of current tech market trends.",
    author: "Startup Echoes",
    date: "Feb 15, 2024",
    imageUrl: "/images/market1.jpg",
    category: "Market",
    content: [
      {
        type: 'introduction',
        text: `The technology sector continues to drive market innovation and growth. This analysis explores current trends, opportunities, and challenges in the tech market.`
      },
      {
        type: 'subheading',
        text: '1. Tech Market Overview'
      },
      {
        type: 'paragraph',
        text: `The technology sector remains one of the most dynamic and influential segments of the global market.`
      },
      {
        type: 'bulletPoints',
        title: 'Key Market Trends:',
        points: [
          'AI and Machine Learning adoption',
          'Cloud computing growth',
          'Cybersecurity demands',
          'Digital transformation acceleration'
        ]
      }
    ]
  },
  {
    id: 20,
    title: "Emerging Markets Outlook",
    excerpt: "Opportunities and challenges in developing markets.",
    author: "Startup Echoes",
    date: "Feb 14, 2024",
    imageUrl: "/images/market2.jpg",
    category: "Market"
  },
  {
    id: 21,
    title: "Stock Market Strategies",
    excerpt: "Expert insights on investment strategies for 2024.",
    author: "Startup Echoes",
    date: "Feb 13, 2024",
    imageUrl: "/images/market3.jpg",
    category: "Market"
  },
  {
    id: 22,
    title: "ESG Investment Trends",
    excerpt: "The rise of sustainable and responsible investing.",
    author: "Startup Echoes",
    date: "Feb 12, 2024",
    imageUrl: "/images/market4.jpg",
    category: "Market"
  },
  {
    id: 23,
    title: "Real Estate Market Analysis",
    excerpt: "Current trends and future predictions in property markets.",
    author: "Startup Echoes",
    date: "Feb 11, 2024",
    imageUrl: "/images/market5.jpg",
    category: "Market"
  },
  {
    id: 24,
    title: "Commodity Markets Update",
    excerpt: "Latest developments in global commodity trading.",
    author: "Startup Echoes",
    date: "Feb 10, 2024",
    imageUrl: "/images/market6.jpg",
    category: "Market"
  }
];

const MarketPage = () => {
  return (
    <CategoryPage
      title="Market Insights"
      description="Stay ahead with the latest market trends, analysis, and investment opportunities. Get expert insights on stock markets, commodities, and investment strategies."
      articles={marketArticles}
    />
  );
};

export default MarketPage; 