import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find the Perfect Gift for Anyone 🎁
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100">
            Our AI-powered recommendation engine helps you discover thoughtful gifts 
            based on personality, interests, and relationships.
          </p>
          <Link
            to="/quiz"
            className="inline-block bg-white text-primary-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Take the Gift Quiz
          </Link>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Take the Quiz</h3>
              <p className="text-gray-600">
                Answer a few simple questions about the recipient's age, interests, and your relationship.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Recommendations</h3>
              <p className="text-gray-600">
                Our smart algorithm analyzes your answers to suggest the perfect gifts.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Choose & Gift</h3>
              <p className="text-gray-600">
                Browse recommendations, add to cart, and make someone's day special!
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find the Perfect Gift?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of happy customers who found their ideal gifts with us.
          </p>
          <Link
            to="/quiz"
            className="inline-block bg-white text-primary-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            Start Your Gift Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
