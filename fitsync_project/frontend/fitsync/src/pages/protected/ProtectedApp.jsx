import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const ProtectedApp = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      {/* Add more protected routes here */}
    </Routes>
  );
};

export default ProtectedApp;
