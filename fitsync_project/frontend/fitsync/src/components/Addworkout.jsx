import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddWorkout = () => {
  const [date, setDate] = useState('');
  const [details, setDetails] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/workouts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ date, workoutDetails: details })
      });

      if (!res.ok) throw new Error('Failed to add workout');

      toast.success('Workout added!');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error('Could not add workout');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center pt-28 px-6">
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg w-full max-w-md space-y-4
       shadow-lg border border-zinc-700">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Add Workout</h2>

        <label className="block text-sm text-gray-300">Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required
          className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white" />

        <label className="block text-sm text-gray-300">Workout Details:</label>
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} required
          className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white" rows={4} />

        <button type="submit" className="bg-red-600 hover:bg-red-700 w-full py-2 rounded mt-2">
          Save Workout
        </button>
      </form>
    </div>
  );
};

export default AddWorkout;
