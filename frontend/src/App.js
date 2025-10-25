import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GiftProvider } from './context/GiftContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Recommendations from './pages/Recommendations';
import ProductDetails from './pages/ProductDetails';
import Favorites from './pages/Favorites';

function App() {
  return (
    <GiftProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/recommendations" element={<Recommendations />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GiftProvider>
  );
}

export default App;
