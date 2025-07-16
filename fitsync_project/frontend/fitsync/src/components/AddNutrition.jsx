import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const mealSuggestions = {
  Breakfast: 'Oatmeal, scrambled eggs, fruit',
  Lunch: 'Chicken, brown rice, veggies',
  Dinner: 'Rice, Dal, steamed broccoli',
  Snack: 'yogurt, nuts, Beaten Rice',
};

const AddNutrition = () => {
  const [date, setDate] = useState('');
  const [mealType, setMealType] = useState('Breakfast');
  const [mealDetails, setMealDetails] = useState('');
  const [calories, setCalories] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/nutrition`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ date, mealType, mealDetails, calories: Number(calories) }),
      });

      if (!res.ok) throw new Error('Failed to add nutrition log');

      toast.success('Nutrition log added!');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error('Could not add nutrition log');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center pt-20 px-6">
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg w-full max-w-md space-y-4 shadow-lg border border-zinc-700">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Log Nutrition</h2>

        <label className="block text-sm text-gray-300">Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required
          className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white" />

        <label className="block text-sm text-gray-300">Meal Type:</label>
        <select value={mealType} onChange={(e) => setMealType(e.target.value)} className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white">
          {Object.keys(mealSuggestions).map((meal) => (
            <option key={meal} value={meal}>{meal}</option>
          ))}
        </select>

        <label className="block text-sm text-gray-300">Meal Details:</label>
        <textarea
          value={mealDetails}
          onChange={(e) => setMealDetails(e.target.value)}
          placeholder={`E.g. ${mealSuggestions[mealType]}`}
          className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white"
          rows={4}
        />

        <label className="block text-sm text-gray-300">Calories (optional):</label>
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white"
          placeholder="e.g. 500"
        />

        <button type="submit" className="bg-red-600 hover:bg-red-700 w-full py-2 rounded mt-2">
          Save Nutrition Log
        </button>
      </form>
    </div>
  );
};

export default AddNutrition;
