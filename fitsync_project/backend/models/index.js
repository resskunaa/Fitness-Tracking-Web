const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const User = require('./user');
const Workout = require('./workout');
const Progress = require('./progress');
const NutritionLog = require('./NutritionLog');

User.hasMany(Workout, { foreignKey: 'userId' });
Workout.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Progress, { foreignKey: 'userId' });
Progress.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(NutritionLog, { foreignKey: 'userId' });
NutritionLog.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Workout,
  Progress,
  NutritionLog,
};
