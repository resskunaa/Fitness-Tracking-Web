const express = require('express');
const router = express.Router();
const authGuard = require('../middleware/authGuard');
const Workout = require('../models/workout');

// Add a workout
router.post('/', authGuard, async (req, res) => {
  const userId = req.user.id;
  const { date, workoutDetails } = req.body;

  try {
    const workout = await Workout.create({ userId, date, workoutDetails });
    res.status(201).json(workout);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add workout', error: err.message });
  }
});

module.exports = router;
