const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const authRoutes = require('./route/auth');
const userRoutes = require('./route/user');
const workoutRoutes = require('./route/workout');
const progressRoutes = require('./route/progress');
const nutritionLogRoutes = require('./route/NutritionLog');


dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);      
app.use('/api/workouts', workoutRoutes);
app.use('/api/progress', progressRoutes); 
app.use('/api/nutrition', nutritionLogRoutes);


app.get('/', (req, res) => {
  res.send('FitSync API is running...');
});

// Connect to DB and sync tables, then start server
sequelize.authenticate()
  .then(() => {
    console.log('Database connected successfully.');
    return sequelize.sync({ force: false }); 
  })
  .then(() => {
    console.log('Tables synced');
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch(err => {
    console.error('DB connection error:', err);
  });
