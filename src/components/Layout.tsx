import { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Layout = ({ children }: LayoutProps) => {
  return <Container>{children}</Container>;
};

export default Layout;
