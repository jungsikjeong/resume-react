import React from 'react';
import styled from 'styled-components';
import ScrollProgressBar from '../components/ScrollProgressBar';

const Container = styled.div`
  height: 1000vh;
`;

const HomePage = () => {
  return (
    <Container>
      <ScrollProgressBar />
      HOME
    </Container>
  );
};

export default HomePage;
