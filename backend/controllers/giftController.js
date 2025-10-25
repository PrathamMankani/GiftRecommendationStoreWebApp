const Gift = require('../models/GiftModel');

// Get all gifts
const getAllGifts = async (req, res) => {
  try {
    const gifts = await Gift.find({ inStock: true });
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get gift by ID
const getGiftById = async (req, res) => {
  try {
    const gift = await Gift.findById(req.params.id);
    if (!gift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.json(gift);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get gifts by category
const getGiftsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const gifts = await Gift.find({ category: category, inStock: true });
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Search gifts
const searchGifts = async (req, res) => {
  try {
    const { q } = req.query;
    const gifts = await Gift.find({
      $or: [
        { title: { $regex: q, $options: 'i' } },
        { description: { $regex: q, $options: 'i' } },
        { tags: { $in: [new RegExp(q, 'i')] } }
      ],
      inStock: true
    });
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new gift (Admin)
const createGift = async (req, res) => {
  try {
    const gift = new Gift(req.body);
    await gift.save();
    res.status(201).json(gift);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update gift (Admin)
const updateGift = async (req, res) => {
  try {
    const gift = await Gift.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!gift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.json(gift);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete gift (Admin)
const deleteGift = async (req, res) => {
  try {
    const gift = await Gift.findByIdAndDelete(req.params.id);
    if (!gift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.json({ message: 'Gift deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllGifts,
  getGiftById,
  getGiftsByCategory,
  searchGifts,
  createGift,
  updateGift,
  deleteGift
};
