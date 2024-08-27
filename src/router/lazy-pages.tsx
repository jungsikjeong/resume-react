import { lazy } from 'react';

export const LazyHomePage = lazy(() => import('../pages/home/home'));
export const LazyProfilePage = lazy(() => import('../pages/profile/profile'));
export const LazyProjectPage = lazy(() => import('../pages/project/project'));
export const LazyProjectsPage = lazy(
  () => import('../pages/projects/projects')
);
export const LazyIntroDetailPage = lazy(
  () => import('../pages/intro-detail/intro-detail')
);
