import { ReactNode, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { menuState } from '../atoms/menu';

import Header from './common/header';
import ScrollProgressBar from './common/scroll-progress-bar';
import TopMoveButton from './top-move-button';
import Footer from './common/footer';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import UseCurrentPage from '../hook/use-current-page';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  overflow: hidden;
`;

const Wrapper = styled(motion.div)<{ $iscurrentpage: boolean }>`
  position: relative;
  max-width: ${({ $iscurrentpage }) => ($iscurrentpage ? '100%' : '1280px')};
  margin: 0 auto;

  @media (max-width: 1460px) {
    padding-top: 10rem;
  }
  @media (max-width: 767px) {
    padding-top: 5rem;
  }
`;

const Layout = ({ children }: LayoutProps) => {
  const { isCurrentPage } = UseCurrentPage({ currentPathname: '/project' });

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location.pathname]);

  return (
    <Container>
      <ScrollProgressBar />
      <Header />
      <Wrapper
        key={location.pathname || ''}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        $iscurrentpage={isCurrentPage}
      >
        {children}
        <TopMoveButton />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
