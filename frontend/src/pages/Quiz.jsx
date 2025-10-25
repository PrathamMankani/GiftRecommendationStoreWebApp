import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGift } from '../context/GiftContext';
import axios from 'axios';

const Quiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizData, setQuizData] = useState({
    relationship: '',
    ageRange: '',
    interests: [],
    budget: ''
  });
  const [quizOptions, setQuizOptions] = useState({
    relationships: ['Partner', 'Friend', 'Family', 'Colleague', 'Child', 'Parent'],
    ageRanges: ['Under 18', '18-25', '26-35', '36-50', '51-65', 'Over 65'],
    interests: [
      'Tech', 'Fashion', 'Sports', 'Music', 'Art', 'Cooking', 
      'Reading', 'Gaming', 'Fitness', 'Travel', 'Photography', 'Gardening'
    ],
    budgets: ['Under ₹1,000', '₹1,000-₹2,500', '₹2,500-₹5,000', '₹5,000-₹10,000', 'Over ₹10,000']
  });
  const [loading, setLoading] = useState(false);
  const { getRecommendations } = useGift();
  const navigate = useNavigate();

  // Quiz options are now hardcoded for better reliability

  const steps = [
    {
      title: "Who is this gift for?",
      description: "Tell us about your relationship with the recipient",
      field: "relationship",
      options: quizOptions.relationships
    },
    {
      title: "What's their age range?",
      description: "This helps us suggest age-appropriate gifts",
      field: "ageRange",
      options: quizOptions.ageRanges
    },
    {
      title: "What are their interests?",
      description: "Select all that apply (you can choose multiple)",
      field: "interests",
      options: quizOptions.interests,
      multiple: true
    },
    {
      title: "What's your budget?",
      description: "Choose a price range that works for you",
      field: "budget",
      options: quizOptions.budgets
    }
  ];

  const handleOptionSelect = (option) => {
    const { field, multiple } = steps[currentStep];
    
    if (multiple) {
      setQuizData(prev => ({
        ...prev,
        [field]: prev[field].includes(option)
          ? prev[field].filter(item => item !== option)
          : [...prev[field], option]
      }));
    } else {
      setQuizData(prev => ({
        ...prev,
        [field]: option
      }));
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await getRecommendations(quizData);
      navigate('/recommendations');
    } catch (error) {
      console.error('Error getting recommendations:', error);
    } finally {
      setLoading(false);
    }
  };

  const isStepValid = () => {
    const { field, multiple } = steps[currentStep];
    const value = quizData[field];
    return multiple ? value.length > 0 : value !== '';
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Step {currentStep + 1} of {steps.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Quiz Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {steps[currentStep].title}
            </h1>
            <p className="text-gray-600">
              {steps[currentStep].description}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {steps[currentStep].options.map((option, index) => {
              const isSelected = steps[currentStep].multiple
                ? quizData[steps[currentStep].field].includes(option)
                : quizData[steps[currentStep].field] === option;

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                    isSelected
                      ? 'border-primary-500 bg-primary-50 text-primary-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{option}</span>
                    {isSelected && (
                      <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Interests Display */}
          {steps[currentStep].multiple && quizData[steps[currentStep].field].length > 0 && (
            <div className="mb-6">
              <p className="text-sm text-gray-600 mb-2">Selected interests:</p>
              <div className="flex flex-wrap gap-2">
                {quizData[steps[currentStep].field].map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-2 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={!isStepValid() || loading}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
            >
              {loading ? (
                <>
                  <div className="loading-spinner w-4 h-4"></div>
                  <span>Finding Gifts...</span>
                </>
              ) : currentStep === steps.length - 1 ? (
                'Get Recommendations'
              ) : (
                'Next'
              )}
            </button>
          </div>
        </div>

        {/* Quiz Tips */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-600 mt-0.5 mr-3" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-blue-800">Pro Tip</h3>
              <p className="text-sm text-blue-700 mt-1">
                Be as specific as possible about their interests. The more details you provide, 
                the better our recommendations will be!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
