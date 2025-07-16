const express = require('express');
const router = express.Router();
const authGuard = require('../middleware/authGuard');
const Progress = require('../models/progress');

// Add progress
router.post('/', authGuard, async (req, res) => {
  const userId = req.user.id;
  const { weekStartDate, progressPercentage } = req.body;

  try {
    const progress = await Progress.create({ userId, weekStartDate, progressPercentage });
    res.status(201).json(progress);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add progress', error: err.message });
  }
});

module.exports = router;
