import { useState } from 'react';
import styled from 'styled-components';

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
      <Carousel />
      {/* 더보기 누르면.. */}
      {/* 매번 문제를 해결하고 기능을 구현할 때마다 도전과 성취감을 경험하며, 이러한
      경험들이 저를 더욱 흥미롭게 만듭니다. 코드 한 줄 한 줄이 마치 게임의
      레벨을 클리어하는 듯한 기분을 주며, 창의력과 문제 해결 능력을 발휘할 수
      있는 재미있는 여정을 제공합니다. */}
      <IntroSection
        title='게임처럼 즐길 수 있는 코드 작업'
        contents='코드를 통해 새로운 것을 만들어가는 과정에서 마치 게임을 하듯이 큰 즐거움을 느끼고 있습니다.'
        // url='https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/home-page/artwork/10-19-23/231005_Campaign_Main1_1280x1024.jpg/width1960.jpg'
        url='https://i.pinimg.com/564x/68/41/c9/6841c9e97ccea9677501c07c96454ff7.jpg'
        order={0}
      />
      <IntroSection
        title='더 나은 코드를 위한 학습'
        contents='더 효율적이고 깔끔한 코드를 작성하기 위해 꾸준히 공부하고 있습니다. 새로운 기술과 개념을 익히며, 개발자로서의 역량을 지속적으로 향상시키고자 합니다.'
        url='https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/home-page/artwork/231025_Campaign_Home_2_1280_1024.png/width1960.png'
        order={1}
      />
      <Blog />
      {/* <Intro />
        <Box>
          <Section
            name='career'
            title={'🎥 전문성 쌓아나가는중..'}
            contents={career?.contents}
            careerModalContents={careerModalContents}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />

          <Section
            name='blog'
            title={'😸 제가 더 궁금하시다면!'}
            contents={authorDetails?.contents}
          />
        </Box>
        <Section name='skills' title={'💻 Skills'} contents={skills?.contents} />
        <Section name='portfolio' title={'🎨 Portfolio'} contents={[]} /> */}

      <LadderImage />
    </Container>
  );
};

export default HomePage;
