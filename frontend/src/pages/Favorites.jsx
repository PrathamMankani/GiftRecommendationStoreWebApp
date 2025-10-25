import React from 'react';
import { Link } from 'react-router-dom';
import { useGift } from '../context/GiftContext';
import GiftCard from '../components/GiftCard';

const Favorites = () => {
  const { favorites, clearFavorites, getFavoritesCount } = useGift();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">💖</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No favorites yet</h2>
          <p className="text-gray-600 mb-6">
            Start exploring gifts and add them to your favorites!
          </p>
          <div className="space-x-4">
            <Link to="/quiz" className="btn-primary">
              Find Gifts
            </Link>
            <Link to="/" className="btn-outline">
              Browse All
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Your Favorite Gifts 💖
              </h1>
              <p className="text-gray-600">
                {getFavoritesCount()} items saved to your favorites
              </p>
            </div>
            <button
              onClick={clearFavorites}
              className="text-red-600 hover:text-red-700 font-medium"
            >
              Clear All
            </button>
          </div>
        </div>

        {/* Favorites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((gift) => (
            <GiftCard key={gift._id} gift={gift} />
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;
