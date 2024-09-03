import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/layout';
import { HomePage } from '../pages/home';
import { IntroDetailPage } from '../pages/intro-detail';
import { ProfilePage } from '../pages/profile';
import { ProjectPage } from '../pages/project';
import { ProjectsPage } from '../pages/projects';

interface RouterBase {
  path: string; // 페이지 경로
  label: string; // 사이드바에 표시할 페이지 이름
  element?: React.ReactNode; // 페이지 엘리먼트
  isLayout: boolean; // 공통 레이아웃 컴포넌트 필요 여부.
  isLayoutMaxWidth?: boolean; // 공통 레이아웃 컴포넌트의 max-width 필요여부
}

type RouterElement = RouterBase;

const routerData: RouterElement[] = [
  {
    label: '메인 페이지',
    path: '/',
    element: <HomePage />,
    isLayout: true,
  },

  {
    label: '인트로 상세 페이지',
    path: '/intro',
    element: <IntroDetailPage />,
    isLayout: true,
  },

  {
    label: '프로필 페이지',
    path: '/profile',
    element: <ProfilePage />,
    isLayout: true,
  },

  {
    label: '프로젝트 리스트 목록',
    path: '/projects',
    element: <ProjectsPage />,
    isLayout: true,
  },
  {
    label: '프로젝트 상세 페이지',
    path: '/project/:date/:id',
    element: <ProjectPage />,
    isLayout: true,
    isLayoutMaxWidth: false,
  },
];

export const router = createBrowserRouter(
  routerData.map((router) => {
    if (router.isLayout) {
      return {
        path: router.path,
        element: (
          <Layout isLayoutMaxWidth={router.isLayoutMaxWidth}>
            {router.element}
          </Layout>
        ),
      };
    }

    return {
      path: router.path,
      element: router.element,
    };
  })
);
