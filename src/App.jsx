import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import ComplaintForm from './pages/ComplaintForm';
import './App.css';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/file-complaint" element={<ComplaintForm />} />
      </Routes>
    </Router>
  );
}

export default App;