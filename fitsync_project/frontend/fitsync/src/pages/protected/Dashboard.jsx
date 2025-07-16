import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';

const Dashboard = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);

  const token = localStorage.getItem('token');
  let username = 'User';

  if (token) {
    try {
      const decoded = jwtDecode(token);
      username = decoded.name || 'User';
    } catch (err) {
      console.error('Token decoding failed:', err);
    }
  }

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchDashboard = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error('Failed to fetch dashboard data');
        }

        const data = await res.json();
        setDashboardData(data);
      } catch (err) {
        console.error(err);
        toast.error('Failed to load dashboard data');
      }
    };

    fetchDashboard();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    navigate('/login');
  };

  if (!dashboardData) return <div className="text-white text-center pt-20">Loading your dashboard...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white px-6 py-10 pt-20">
      <div className="max-w-6xl mx-auto space-y-10">

        <div className="flex justify-between items-center flex-wrap gap-4">
          <div>
            <h1 className="text-4xl font-bold text-red-500 mb-1">Welcome back, {username}! 💪</h1>
            <p className="text-lg text-gray-300">Your fitness journey continues today.</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg shadow-lg transition"
          >
            Logout
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <button onClick={() => navigate('/add-workout')} className="bg-zinc-700
           hover:bg-zinc-600 text-white px-4 py-2 rounded-md shadow">➕ Add Workout</button>
          <button onClick={() => navigate('/add-progress')} className="bg-zinc-700
           hover:bg-zinc-600 text-white px-4 py-2 rounded-md shadow">📈 Update Progress</button>
          <button onClick={() => navigate('/add-nutrition')} className="bg-zinc-700
           hover:bg-zinc-600 text-white px-4 py-2 rounded-md shadow">🍽️ Log Nutrition</button>
        </div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-800 rounded-xl p-6 shadow-md border border-zinc-700">
            <h2 className="text-xl font-semibold text-red-400 mb-2">Workout Plan</h2>
            <p className="text-gray-300">You have <strong>{dashboardData.workoutsToday}</strong> workouts scheduled today.</p>
          </div>

          <div className="bg-zinc-800 rounded-xl p-6 shadow-md border border-zinc-700">
            <h2 className="text-xl font-semibold text-red-400 mb-2">Progress</h2>
            <p className="text-gray-300">You've completed <strong>{dashboardData.progress}%</strong> of your weekly goal.</p>
          </div>

          <div className="bg-zinc-800 rounded-xl p-6 shadow-md border border-zinc-700">
            <h2 className="text-xl font-semibold text-red-400 mb-2">Nutrition</h2>
            <p className="text-gray-300">
              {dashboardData.nutritionLogged
                ? "✅ You've logged your meals today."
                : "⚠️ Don't forget to log your meals today."}
            </p>
          </div>
        </div>
        <div className="h-64"></div>
      </div>
    </div>
  );
};
export default Dashboard;
