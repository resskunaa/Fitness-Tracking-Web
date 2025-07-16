import React, { useEffect, useState } from 'react';

const History = () => {
  const [workouts, setWorkouts] = useState([]);
  const [progressList, setProgressList] = useState([]);
  const [nutritionList, setNutritionList] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const workoutRes = await fetch(`${import.meta.env.VITE_API_URL}/api/workouts`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const progressRes = await fetch(`${import.meta.env.VITE_API_URL}/api/progress`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        const nutritionRes = await fetch(`${import.meta.env.VITE_API_URL}/api/nutrition`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        const workoutsData = await workoutRes.json();
        const progressData = await progressRes.json();
        const nutritionData = await nutritionRes.json();

        setWorkouts(workoutsData);
        setProgressList(progressData);
        setNutritionList(nutritionData);
      } catch (err) {
        console.error('Error fetching history:', err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-6 text-white bg-zinc-900 min-h-screen space-y-12">
      {/* Workout History */}
      <section>
        <h2 className="text-2xl font-bold text-red-500 mb-10">Workout History</h2>
        {workouts.length === 0 ? (
          <p>No workouts found.</p>
        ) : (
          workouts.map((workout, index) => (
            <div key={index} className="border-b border-zinc-700 py-3">
              <p><strong>Date:</strong> {workout.date}</p>
              <p><strong>Type:</strong> {workout.workoutType}</p>
              <p><strong>Duration:</strong> {workout.duration} mins</p>
              <p><strong>Description:</strong> {workout.description}</p>
            </div>
          ))
        )}
      </section>

      {/* Progress History */}
      <section>
        <h2 className="text-2xl font-bold text-red-500 mb-4">Progress History</h2>
        {progressList.length === 0 ? (
          <p>No progress entries found.</p>
        ) : (
          progressList.map((progress, index) => (
            <div key={index} className="border-b border-zinc-700 py-3">
              <p><strong>Date:</strong> {progress.date}</p>
              <p><strong>Weight:</strong> {progress.weight} kg</p>
              <p><strong>Notes:</strong> {progress.notes || 'N/A'}</p>
            </div>
          ))
        )}
      </section>

      {/* Nutrition History */}
      <section>
        <h2 className="text-2xl font-bold text-red-500 mb-4">Nutrition History</h2>
        {nutritionList.length === 0 ? (
          <p>No nutrition logs available.</p>
        ) : (
          nutritionList.map((log, index) => (
            <div key={index} className="border-b border-zinc-700 py-3">
              <p><strong>Date:</strong> {log.date}</p>
              <p><strong>Meal Type:</strong> {log.mealType}</p>
              <p><strong>Meal Details:</strong> {log.mealDetails}</p>
              <p><strong>Calories:</strong> {log.calories || 'N/A'} kcal</p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

export default History;
