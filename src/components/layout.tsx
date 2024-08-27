import { ReactNode, useEffect } from 'react';
import styled from 'styled-components';

import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import Footer from './common/footer';
import Header from './common/header';
import ScrollProgressBar from './common/scroll-progress-bar';
import TopMoveButton from './top-move-button';

interface LayoutProps {
  children: ReactNode;
  isLayoutMaxWidth?: boolean;
}

const Container = styled.div`
  overflow: hidden;
`;

const Wrapper = styled(motion.div)<{ $islayoutmaxwidth: boolean }>`
  position: relative;
  max-width: ${({ $islayoutmaxwidth }) =>
    $islayoutmaxwidth ? '1280px' : '100%'};
  margin: 0 auto;

  @media (max-width: 1460px) {
    padding-top: 10rem;
  }
  @media (max-width: 767px) {
    padding-top: 5rem;
  }
`;

const Layout = ({ children, isLayoutMaxWidth = true }: LayoutProps) => {
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
        $islayoutmaxwidth={isLayoutMaxWidth}
        key={location.pathname || ''}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
        <TopMoveButton />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default Layout;
