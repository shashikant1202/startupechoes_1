// Create a new file to store all articles
import { startupsArticles } from '../pages/categories/StartupsPage';
import { businessArticles } from '../pages/categories/BusinessPage';
import { economicArticles } from '../pages/categories/EconomicPage';
import { marketArticles } from '../pages/categories/MarketPage';

// Combine all articles into one array, filtering out undefined values
export const allArticles = [
  ...(startupsArticles || []),
  ...(businessArticles || []),
  ...(economicArticles || []),
  ...(marketArticles || [])
].filter(Boolean);

// Function to get random articles with error handling
export const getRandomArticles = (count) => {
  if (!allArticles.length) return [];
  const shuffled = [...allArticles].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}; 