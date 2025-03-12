import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/home/Homepage';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import StartupsPage from './pages/categories/StartupsPage';
import BusinessPage from './pages/categories/BusinessPage';
import EconomicPage from './pages/categories/EconomicPage';
import MarketPage from './pages/categories/MarketPage';
import ServicesPage from './pages/services/ServicesPage';
import Header from './components/Header';
import AllArticlesPage from './pages/AllArticlesPage';
import ArticlePage from './pages/articles/ArticlePage';
import ArticleTemplate from './pages/articles/ArticleTemplate';
import StartupArticleOne from './pages/articles/StartupArticleOne';
import StartupArticleTwo from './pages/articles/StartupArticleTwo';
import StartupArticleThree from './pages/articles/StartupArticleThree';
import StartupArticleFour from './pages/articles/StartupArticleFour';
import StartupArticleFive from './pages/articles/StartupArticleFive';
import StartupArticleSix from './pages/articles/StartupArticleSix';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/all-articles" element={<AllArticlesPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/startups" element={<StartupsPage />} />
            <Route path="/business" element={<BusinessPage />} />
            <Route path="/economic" element={<EconomicPage />} />
            <Route path="/market" element={<MarketPage />} />
            <Route path="/services" element={<ServicesPage />} />
            
            {/* Article Routes */}
            <Route path="/article/startups-1" element={<StartupArticleOne />} />
            <Route path="/article/startups-2" element={<StartupArticleTwo />} />
            <Route path="/article/startups-3" element={<StartupArticleThree />} />
            <Route path="/article/startups-4" element={<StartupArticleFour />} />
            <Route path="/article/startups-5" element={<StartupArticleFive />} />
            <Route path="/article/startups-6" element={<StartupArticleSix />} />

           {/* /* <Route path="/article/business-7" element={<BusinessArticleSeven />} />
            <Route path="/article/business-8" element={<StartupArticleTwo />} />
            <Route path="/article/startups-3" element={<StartupArticleThree />} />
            <Route path="/article/startups-4" element={<StartupArticleFour />} />
            <Route path="/article/startups-5" element={<StartupArticleFive />} />
            <Route path="/article/startups-6" element={<StartupArticleSix />} /> */}
            
            {/* Generic Article Routes */}
            <Route path="/article/startups-:id" element={<ArticlePage category="Startups" />} />
            <Route path="/article/business-:id" element={<ArticlePage category="Business" />} />
            <Route path="/article/economic-:id" element={<ArticlePage category="Economic" />} />
            <Route path="/article/market-:id" element={<ArticlePage category="Market" />} />
            <Route path="/article/:category-:id" element={<ArticleTemplate />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
