import React, { createContext, useContext, useReducer, useEffect } from 'react';
import axios from 'axios';

const GiftContext = createContext();

const initialState = {
  gifts: [],
  favorites: [],
  recommendations: [],
  quizData: null,
  loading: false,
  error: null
};

const giftReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SET_GIFTS':
      return { ...state, gifts: action.payload, loading: false };
    case 'SET_RECOMMENDATIONS':
      return { ...state, recommendations: action.payload, loading: false };
    case 'SET_QUIZ_DATA':
      return { ...state, quizData: action.payload };
    case 'ADD_TO_FAVORITES':
      const existingFavorite = state.favorites.find(item => item._id === action.payload._id);
      if (existingFavorite) {
        return state; // Already in favorites
      }
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case 'REMOVE_FROM_FAVORITES':
      return {
        ...state,
        favorites: state.favorites.filter(item => item._id !== action.payload)
      };
    case 'CLEAR_FAVORITES':
      return { ...state, favorites: [] };
    default:
      return state;
  }
};

export const GiftProvider = ({ children }) => {
  const [state, dispatch] = useReducer(giftReducer, initialState);

  // Fetch all gifts
  const fetchGifts = async () => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await axios.get('/api/gifts');
      dispatch({ type: 'SET_GIFTS', payload: response.data });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  // Get recommendations based on quiz
  const getRecommendations = async (quizData) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      const response = await axios.post('/api/quiz/recommend', quizData);
      dispatch({ type: 'SET_RECOMMENDATIONS', payload: response.data.recommendations });
      dispatch({ type: 'SET_QUIZ_DATA', payload: response.data.quizData });
    } catch (error) {
      dispatch({ type: 'SET_ERROR', payload: error.message });
    }
  };

  // Add item to favorites
  const addToFavorites = (gift) => {
    dispatch({ type: 'ADD_TO_FAVORITES', payload: gift });
  };

  // Remove item from favorites
  const removeFromFavorites = (giftId) => {
    dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: giftId });
  };

  // Clear favorites
  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  // Get favorites count
  const getFavoritesCount = () => {
    return state.favorites.length;
  };

  // Check if item is in favorites
  const isInFavorites = (giftId) => {
    return state.favorites.some(item => item._id === giftId);
  };

  useEffect(() => {
    fetchGifts();
  }, []);

  const value = {
    ...state,
    fetchGifts,
    getRecommendations,
    addToFavorites,
    removeFromFavorites,
    clearFavorites,
    getFavoritesCount,
    isInFavorites
  };

  return (
    <GiftContext.Provider value={value}>
      {children}
    </GiftContext.Provider>
  );
};

export const useGift = () => {
  const context = useContext(GiftContext);
  if (!context) {
    throw new Error('useGift must be used within a GiftProvider');
  }
  return context;
};
