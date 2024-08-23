import { ReactNode, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { menuState } from '../atoms/menu';

import Header from './common/header';
import ScrollProgressBar from './common/scroll-progress-bar';
import TopMoveButton from './top-move-button';
import Footer from './common/footer';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: ReactNode;
}

const Wrapper = styled(motion.div)`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;

  @media (max-width: 1460px) {
    padding-top: 10rem;
  }
  @media (max-width: 767px) {
    padding-top: 5rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 300;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.5);
  visibility: visible;
`;

const Layout = ({ children }: LayoutProps) => {
  const [isMenu, setMenuClose] = useRecoilState(menuState);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location.pathname]);

  return (
    <>
      <ScrollProgressBar />
      <Header />
      {isMenu && <Overlay onClick={() => setMenuClose(false)} />}
      <Wrapper
        key={location.pathname || ''}
        initial={{ x: 10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {children}
        <TopMoveButton />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
