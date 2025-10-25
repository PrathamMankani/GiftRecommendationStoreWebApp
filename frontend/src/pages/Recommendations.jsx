import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useGift } from '../context/GiftContext';
import GiftCard from '../components/GiftCard';

const Recommendations = () => {
  const { recommendations, quizData, loading, error } = useGift();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Finding the perfect gifts for you...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">😞</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link to="/quiz" className="btn-primary">
            Try Again
          </Link>
        </div>
      </div>
    );
  }

  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-gray-400 text-6xl mb-4">🎁</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">No recommendations found</h2>
          <p className="text-gray-600 mb-6">
            We couldn't find any gifts matching your criteria. Try adjusting your preferences.
          </p>
          <Link to="/quiz" className="btn-primary">
            Retake Quiz
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Perfect Gifts for You! 🎁
          </h1>
          <p className="text-gray-600">
            Based on your quiz answers, we've found {recommendations.length} amazing gift options
          </p>
        </div>

        {/* Quiz Summary */}
        {quizData && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Preferences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <span className="text-sm text-gray-500">Relationship:</span>
                <p className="font-medium text-gray-900">{quizData.relationship}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Age Range:</span>
                <p className="font-medium text-gray-900">{quizData.ageRange}</p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Interests:</span>
                <p className="font-medium text-gray-900">
                  {quizData.interests.join(', ')}
                </p>
              </div>
              <div>
                <span className="text-sm text-gray-500">Budget:</span>
                <p className="font-medium text-gray-900">{quizData.budget}</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <Link
                to="/quiz"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                ← Retake Quiz
              </Link>
            </div>
          </div>
        )}

        {/* Recommendations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recommendations.map((gift) => (
            <GiftCard key={gift._id} gift={gift} />
          ))}
        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Don't see what you're looking for?
          </p>
          <div className="space-x-4">
            <Link to="/quiz" className="btn-outline">
              Try Different Preferences
            </Link>
            <Link to="/" className="btn-secondary">
              Browse All Gifts
            </Link>
          </div>
        </div>

        {/* Why These Recommendations */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Why These Recommendations?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Personalized Matching</h3>
              <p className="text-sm text-gray-600">
                Each gift is carefully selected based on the recipient's interests and your relationship.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⭐</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Quality Assured</h3>
              <p className="text-sm text-gray-600">
                All our recommendations are from trusted brands with excellent customer reviews.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💝</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Thoughtful Selection</h3>
              <p className="text-sm text-gray-600">
                We consider the emotional impact and meaning behind each gift recommendation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendations;
