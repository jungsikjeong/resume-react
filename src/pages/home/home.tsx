import styled from 'styled-components';

import intro from '../../assets/json/intro.json';

import Carousel from '../../components/carousel/carousel';
import LadderImage from '../../components/ladder-image';
import Blog from './blog';
import IntroSection from './intro-section';
import Loading from '../../components/common/loading';

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;

const HomePage = () => {
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
