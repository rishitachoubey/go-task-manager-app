import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TableView from './pages/TableView.jsx';
import Dashboard from './pages/Dashboard.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="/table" />} />
      <Route path="/table" element={<TableView />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<div>404 - Page Not Found</div>} />
    </Routes>
  </Router>
);

export default App;
