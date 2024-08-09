import { ReactNode } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { menuState } from '../atoms/menu';

import Header from './common/header';
import ScrollProgressBar from './common/scroll-progress-bar';
import TopMoveButton from './top-move-button';
import Footer from './common/footer';
import useScrollPosition from '../hook/use-scroll-position';

interface LayoutProps {
  children: ReactNode;
}

const Wrapper = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  @media (max-width: 1460px) {
    padding-top: 10rem;
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

  return (
    <>
      <ScrollProgressBar />
      <Header />
      {isMenu && <Overlay onClick={() => setMenuClose(false)} />}
      <Wrapper>
        {children}
        <TopMoveButton />
        <Footer />
      </Wrapper>
    </>
  );
};

export default Layout;
