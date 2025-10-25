const Gift = require('../models/GiftModel');

// Advanced AI-powered gift recommendation logic
const getRecommendations = async (req, res) => {
  try {
    const { relationship, ageRange, interests, budget } = req.body;
    
    let recommendations = [];
    let query = { inStock: true };
    
    // Advanced AI recommendation logic based on multiple factors
    let categoryPriority = [];
    let priceRange = {};
    let ageFactor = 1;
    
    // Age-based adjustments
    if (ageRange === 'Under 18') {
      ageFactor = 0.7; // Lower budget for kids
      categoryPriority = ['Art', 'Gaming', 'Electronics', 'Books'];
    } else if (ageRange === '18-25') {
      ageFactor = 1.2; // Higher budget for young adults
      categoryPriority = ['Electronics', 'Fashion', 'Fitness', 'Gaming'];
    } else if (ageRange === '26-35') {
      ageFactor = 1.5; // Premium items for professionals
      categoryPriority = ['Electronics', 'Fashion', 'Personalized', 'Cooking'];
    } else if (ageRange === '36-50') {
      ageFactor = 1.3; // Quality over quantity
      categoryPriority = ['Personalized', 'Cooking', 'Art', 'Fitness'];
    } else if (ageRange === '51-65') {
      ageFactor = 1.1; // Practical and thoughtful gifts
      categoryPriority = ['Personalized', 'Cooking', 'Art', 'Health'];
    } else {
      ageFactor = 1.0; // Standard pricing
      categoryPriority = ['Personalized', 'Health', 'Cooking', 'Art'];
    }
    
    // Relationship-based category preferences
    if (relationship === 'Partner') {
      categoryPriority = ['Personalized', 'Fashion', 'Electronics', 'Art', 'Cooking'];
    } else if (relationship === 'Friend') {
      categoryPriority = ['Electronics', 'Fashion', 'Gaming', 'Fitness', 'Entertainment'];
    } else if (relationship === 'Family') {
      categoryPriority = ['Personalized', 'Cooking', 'Art', 'Health', 'Home'];
    } else if (relationship === 'Colleague') {
      categoryPriority = ['Electronics', 'Office', 'Books', 'Professional'];
    } else if (relationship === 'Child') {
      categoryPriority = ['Art', 'Gaming', 'Electronics', 'Books', 'Toys'];
    } else if (relationship === 'Parent') {
      categoryPriority = ['Personalized', 'Health', 'Cooking', 'Art', 'Home'];
    }
    
    // Interest-based category matching - STRICT matching
    const interestCategories = {
      'Tech': ['Electronics'],
      'Fashion': ['Fashion'],
      'Sports': ['Fitness'],
      'Music': ['Electronics'],
      'Art': ['Art'],
      'Cooking': ['Cooking'],
      'Reading': ['Books'],
      'Gaming': ['Electronics'], // Gaming products are in Electronics category
      'Fitness': ['Fitness'],
      'Travel': ['Travel'],
      'Photography': ['Electronics'],
      'Gardening': ['Gardening']
    };
    
    // Merge interest-based categories with relationship categories
    interests.forEach(interest => {
      if (interestCategories[interest]) {
        categoryPriority = [...categoryPriority, ...interestCategories[interest]];
      }
    });
    
    // Remove duplicates and prioritize
    categoryPriority = [...new Set(categoryPriority)];
    
    // Set category filter
    query.category = { $in: categoryPriority };
    
    // Budget filtering with age adjustment
    const budgetRanges = {
      'Under ₹1,000': { min: 0, max: 999 },
      '₹1,000-₹2,500': { min: 1000, max: 2500 },
      '₹2,500-₹5,000': { min: 2500, max: 5000 },
      '₹5,000-₹10,000': { min: 5000, max: 10000 },
      'Over ₹10,000': { min: 10000, max: 999999 }
    };
    
    if (budgetRanges[budget]) {
      const range = budgetRanges[budget];
      query.price = { $gte: range.min, $lte: range.max };
    }
    
    // Get recommendations with smart sorting and tag filtering
    recommendations = await Gift.find(query)
      .sort({ 
        rating: -1,
        price: 1 
      })
      .limit(20); // Get more to filter better
    
    // Filter by interests using tags for more precise matching
    if (interests.length > 0) {
      const interestTags = {
        'Tech': ['tech', 'electronics', 'gadgets', 'wireless', 'charging'],
        'Fashion': ['fashion', 'leather', 'accessories', 'watch', 'sunglasses'],
        'Sports': ['fitness', 'sports', 'outdoor', 'yoga', 'workout'],
        'Music': ['music', 'audio', 'speaker', 'headphones'],
        'Art': ['art', 'creative', 'painting', 'drawing', 'sketching'],
        'Cooking': ['cooking', 'kitchen', 'coffee', 'gourmet', 'spices'],
        'Reading': ['books', 'educational', 'learning'],
        'Gaming': ['gaming', 'tech', 'electronics', 'mouse', 'headphones'],
        'Fitness': ['fitness', 'health', 'yoga', 'workout', 'gym'],
        'Travel': ['travel', 'outdoor', 'adventure'],
        'Photography': ['photography', 'camera', 'tech', 'electronics'],
        'Gardening': ['gardening', 'plants', 'nature']
      };
      
      // Filter recommendations based on interest tags
      const relevantTags = interests.flatMap(interest => interestTags[interest] || []);
      recommendations = recommendations.filter(gift => 
        gift.tags.some(tag => relevantTags.includes(tag.toLowerCase()))
      );
    }
    
    // Limit to 12 after filtering
    recommendations = recommendations.slice(0, 12);
    
    // If no recommendations found, try broader search
    if (recommendations.length === 0) {
      // Remove budget constraint
      delete query.price;
      recommendations = await Gift.find(query)
        .sort({ rating: -1 })
        .limit(12);
    }
    
    // If still no results, get any available gifts
    if (recommendations.length === 0) {
      recommendations = await Gift.find({ inStock: true })
        .sort({ rating: -1 })
        .limit(12);
    }
    
    res.json({
      success: true,
      recommendations,
      quizData: { relationship, ageRange, interests, budget }
    });
    
  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: error.message 
    });
  }
};

// Get quiz categories and options
const getQuizOptions = async (req, res) => {
  try {
    const options = {
      relationships: ['Partner', 'Friend', 'Family', 'Colleague', 'Child', 'Parent'],
      ageRanges: ['Under 18', '18-25', '26-35', '36-50', '51-65', 'Over 65'],
      interests: [
        'Tech', 'Fashion', 'Sports', 'Music', 'Art', 'Cooking', 
        'Reading', 'Gaming', 'Fitness', 'Travel', 'Photography', 'Gardening'
      ],
      budgets: ['Under ₹1,000', '₹1,000-₹2,500', '₹2,500-₹5,000', '₹5,000-₹10,000', 'Over ₹10,000']
    };
    
    res.json(options);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getRecommendations,
  getQuizOptions
};
