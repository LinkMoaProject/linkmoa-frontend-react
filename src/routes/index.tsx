// src/routes/index.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Reissue from '../pages/Reissue';
import MainPage from '../pages/MainPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reissue" element={<Reissue />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
