import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import PortfolioDetailPage from '../pages/PortfolioDetailPage';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/project/:id' element={<PortfolioDetailPage />} />
    </Routes>
  );
};

export default Router;
