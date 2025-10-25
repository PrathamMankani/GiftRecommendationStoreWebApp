const express = require('express');
const router = express.Router();
const {
  getAllGifts,
  getGiftById,
  getGiftsByCategory,
  searchGifts,
  createGift,
  updateGift,
  deleteGift
} = require('../controllers/giftController');

// Public routes
router.get('/', getAllGifts);
router.get('/search', searchGifts);
router.get('/category/:category', getGiftsByCategory);
router.get('/:id', getGiftById);

// Admin routes (in a real app, these would be protected)
router.post('/', createGift);
router.put('/:id', updateGift);
router.delete('/:id', deleteGift);

module.exports = router;
