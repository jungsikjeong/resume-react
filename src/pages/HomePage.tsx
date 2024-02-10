import React from 'react';
import styled from 'styled-components';

import ScrollProgressBar from '../components/ScrollProgressBar';
import Introduction from '../components/introduction';

const Container = styled.div`
  height: 1000vh;
`;

const HomePage = () => {
  return (
    <Container>
      <ScrollProgressBar />
      <Introduction />
    </Container>
  );
};

export default HomePage;
