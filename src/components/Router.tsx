import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/home';
import PortfolioDetailPage from '../pages/portfolio-detail';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/project/:id' element={<PortfolioDetailPage />} />
    </Routes>
  );
};

export default Router;
