import { useState } from 'react';
import styled from 'styled-components';

import intro from '../../assets/json/intro.json';

import Carousel from '../../components/carousel/carousel';
import LadderImage from '../../components/ladder-image';
import Blog from './blog';
import IntroSection from './intro-section';

const Container = styled.div`
  position: relative;

  /* @media (max-width: 1460px) {
    padding-top: 10rem;
  }
  @media (max-width: 767px) {
    padding-top: 5rem;
  } */
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      {/* 베스트 프로젝트 */}
      <Carousel />

      {/* 인트로섹션 */}
      {intro?.map((item) => <IntroSection key={item.id} item={item} />)}

      <Blog />

      <LadderImage />
    </Container>
  );
};

export default HomePage;
