import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { HomePage } from '../pages/home';
import { ProfilePage } from '../pages/profile';
import PortfolioDetailPage from '../pages/portfolio-detail';
import { ProjectsPage } from '../pages/projects';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/profile' element={<ProfilePage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/project/:id' element={<PortfolioDetailPage />} />
    </Routes>
  );
};

export default Router;
