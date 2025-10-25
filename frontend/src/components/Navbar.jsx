import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useGift } from '../context/GiftContext';

const Navbar = () => {
  const { getFavoritesCount } = useGift();
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-2xl">🎁</div>
            <span className="text-xl font-bold text-primary-600">GiftRecommender</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/quiz" 
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              Find Gifts
            </Link>
          </div>

          {/* Favorites Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate('/favorites')}
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {getFavoritesCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getFavoritesCount()}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-700 hover:text-primary-600">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
