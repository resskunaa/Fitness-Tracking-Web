import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProgress = () => {
  const [weekStartDate, setWeekStartDate] = useState('');
  const [progressPercentage, setProgressPercentage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/progress`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ weekStartDate, progressPercentage })
      });

      if (!res.ok) throw new Error('Failed to add progress');
      toast.success('Progress updated!');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      toast.error('Could not add progress');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex items-center justify-center pt-20 px-6">
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-8 rounded-lg w-full max-w-md space-y-4 shadow-lg border border-zinc-700">
        <h2 className="text-2xl font-semibold text-red-500 mb-4">Update Progress</h2>

        <label className="block text-sm text-gray-300">Week Start Date:</label>
        <input type="date" value={weekStartDate} onChange={(e) => setWeekStartDate(e.target.value)} required
          className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white" />

        <label className="block text-sm text-gray-300">Progress %:</label>
        <input type="number" value={progressPercentage} onChange={(e) => setProgressPercentage(e.target.value)} required
          className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white" min="0" max="100" />

        <button type="submit" className="bg-red-600 hover:bg-red-700 w-full py-2 rounded mt-2">
          Save Progress
        </button>
      </form>
    </div>
  );
};

export default AddProgress;
