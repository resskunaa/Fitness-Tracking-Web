const express = require('express');
const router = express.Router();
const authGuard = require('../middleware/authGuard');
const NutritionLog = require('../models/NutritionLog');

// Add a new nutrition log
router.post('/', authGuard, async (req, res) => {
  const userId = req.user.id;
  const { date, mealType, mealDetails, calories } = req.body;

  try {
    const nutritionLog = await NutritionLog.create({
      userId,
      date,
      mealType,
      mealDetails,
      calories,
    });
    res.status(201).json(nutritionLog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to add nutrition log', error: err.message });
  }
});

router.get('/', authGuard, async (req, res) => {
  const userId = req.user.id;

  try {
    const logs = await NutritionLog.findAll({
      where: { userId },
      order: [['date', 'DESC']],
    });
    res.json(logs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to get nutrition logs', error: err.message });
  }
});


module.exports = router;
