const express = require('express');
const router = express.Router();
const authGuard = require('../middleware/authGuard');

const Workout = require('../models/workout');
const Progress = require('../models/progress');
const NutritionLog = require('../models/NutritionLog');

router.get('/dashboard', authGuard, async (req, res) => {
  try {
    const userId = req.user.id;

    const workoutsToday = await Workout.count({
      where: {
        userId,
        date: new Date().toISOString().split('T')[0], 
      },
    });

    const latestProgress = await Progress.findOne({
      where: { userId },
      order: [['weekStartDate', 'DESC']],
    });

    const nutritionLogged = (await NutritionLog.count({
      where: {
        userId,
        date: new Date().toISOString().split('T')[0],
      },
    })) > 0;

    res.json({
      workoutsToday,
      progress: latestProgress ? latestProgress.progressPercentage : 0,
      nutritionLogged,
    });
  } catch (error) {
    console.error('Dashboard route error:', error);
    res.status(500).json({ message: 'Server error fetching dashboard data' });
  }
});

module.exports = router;
