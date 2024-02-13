import { ReactNode } from 'react';
import styled from 'styled-components';

import TopMoveButton from './TopMoveButton';
import ScrollProgressBar from './ScrollProgressBar';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <ScrollProgressBar />

      {children}

      <TopMoveButton />
    </Container>
  );
};

export default Layout;
