const express = require('express');
const router = express.Router();
const {
  getRecommendations,
  getQuizOptions
} = require('../controllers/quizController');

// Get quiz options
router.get('/options', getQuizOptions);

// Get gift recommendations based on quiz
router.post('/recommend', getRecommendations);

module.exports = router;
