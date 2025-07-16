import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import Dashboard from './pages/protected/Dashboard'
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute'; 
import { Toaster } from 'react-hot-toast';
import AddWorkout from './components/Addworkout';
import AddProgress from './components/Addprogress';
import AddNutrition from './components/AddNutrition';
import History from './pages/History';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-workout" element={<AddWorkout />} />
        <Route path="/add-progress" element={<AddProgress />} />
        <Route path="/add-nutrition" element={<AddNutrition />} />
        <Route path="/dashboard/history" element={<History />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />
    </Router>
  );
}

export default App;
