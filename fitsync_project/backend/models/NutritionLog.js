const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const NutritionLog = sequelize.define('NutritionLog', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  mealType: {
    type: DataTypes.ENUM('Breakfast', 'Lunch', 'Dinner', 'Snack'),
    allowNull: false,
  },
  mealDetails: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
});

module.exports = NutritionLog;

