import React from 'react';
import { Link } from 'react-router-dom';
import { useGift } from '../context/GiftContext';

const GiftCard = ({ gift }) => {
  const { addToFavorites, removeFromFavorites, isInFavorites } = useGift();

  const handleToggleFavorite = (e) => {
    e.preventDefault();
    if (isInFavorites(gift._id)) {
      removeFromFavorites(gift._id);
    } else {
      addToFavorites(gift);
    }
  };

  return (
    <div className="card group">
      <Link to={`/product/${gift._id}`} className="block">
        <div className="aspect-w-1 aspect-h-1 bg-gray-200 overflow-hidden">
          <img
            src={gift.image}
            alt={gift.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {gift.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {gift.description}
          </p>
          <div className="flex items-center justify-between mb-3">
            <span className="text-2xl font-bold text-primary-600">
              ₹{gift.price.toLocaleString('en-IN')}
            </span>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(gift.rating) ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500 ml-1">({gift.rating})</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 mb-3">
            {gift.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-100 text-primary-600 text-xs rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
      <div className="p-4 pt-0 space-y-2">
        <a
          href={gift.platformLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full btn-primary flex items-center justify-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          <span>Buy Here</span>
        </a>
        <button
          onClick={handleToggleFavorite}
          className={`w-full flex items-center justify-center space-x-2 ${
            isInFavorites(gift._id) 
              ? 'bg-red-500 hover:bg-red-600 text-white' 
              : 'btn-outline'
          }`}
        >
          <svg 
            className="w-4 h-4" 
            fill={isInFavorites(gift._id) ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{isInFavorites(gift._id) ? 'Remove from Favorites' : 'Add to Favorites'}</span>
        </button>
      </div>
    </div>
  );
};

export default GiftCard;
