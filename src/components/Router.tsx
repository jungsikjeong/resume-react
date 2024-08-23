import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../pages/home/home'));
const ProfilePage = lazy(() => import('../pages/profile/profile'));
const ProjectPage = lazy(() => import('../pages/project/project'));
const ProjectsPage = lazy(() => import('../pages/projects/projects'));
const IntroDetailPage = lazy(
  () => import('../pages/intro-detail/intro-detail')
);

const Router = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/intro' element={<IntroDetailPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/project/:date/:id' element={<ProjectPage />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
