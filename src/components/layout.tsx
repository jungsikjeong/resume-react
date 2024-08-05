import { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { menuState } from '../atoms/menu';

import Header from './common/header';
import ScrollProgressBar from './common/scroll-progress-bar';
import TopMoveButton from './top-move-button';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
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
  const isMenu = useRecoilValue(menuState);

  return (
    <>
      <ScrollProgressBar />
      <Header />
      {isMenu && <Overlay />}
      <Container>
        {children}
        <TopMoveButton />
      </Container>
    </>
  );
};

export default Layout;
