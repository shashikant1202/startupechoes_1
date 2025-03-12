import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home/Home';
import AllArticlesPage from './pages/AllArticlesPage';
import StartupsPage from './pages/categories/StartupsPage';
import BusinessPage from './pages/categories/BusinessPage';
import EconomicPage from './pages/categories/EconomicPage';
import MarketPage from './pages/categories/MarketPage';
import ServicesPage from './pages/services/ServicesPage';
import ArticlePage from './pages/articles/ArticlePage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-articles" element={<AllArticlesPage />} />
            <Route path="/startups" element={<StartupsPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/economic" element={<EconomicPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Category-specific article routes */}
            <Route path="/article/startup-:id" element={<ArticlePage category="Startups" />} />
            <Route path="/article/business-:id" element={<ArticlePage category="Business" />} />
            <Route path="/article/economic-:id" element={<ArticlePage category="Economic" />} />
            <Route path="/article/market-:id" element={<ArticlePage category="Market" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 