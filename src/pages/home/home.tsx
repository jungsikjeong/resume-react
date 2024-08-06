import { useState } from 'react';
import styled from 'styled-components';
import activity from '../../assets/json/activity.json';
import author from '../../assets/json/author.json';
import authorDetails from '../../assets/json/authorDetails.json';
import careerModalContents from '../../assets/json/career-modal.json';
import career from '../../assets/json/career.json';
import skills from '../../assets/json/skills.json';
import Carousel from '../../components/carousel/carousel';

import ThemeSwitchBtn from '../../components/common/theme-switch';
import Intro from '../../components/intro/intro';
import Section from '../../components/section';
import Blog from './blog';
import IntroSection from './intro-section';

const Container = styled.div`
  position: relative;
  padding-bottom: 10rem;
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
      <ThemeSwitchBtn />
      <Carousel />

      <IntroSection
        title='지속 가능한 지구를 위한 노력'
        contents=' 코카-콜라는 지속 가능하고 더 나은 미래를 추구합니다. 모두가 더불어
            사는 세상을 만들기 위해 전 세계 수많은 사람들의 삶, 지역사회, ​더
            나아가 우리가 살고 있는 지구 전체에 긍정적인 변화를 만들기 위해
            노력하고 있습니다.'
        url='https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/home-page/artwork/10-19-23/231005_Campaign_Main1_1280x1024.jpg/width1960.jpg'
        order={0}
      />

      <IntroSection
        title='코카-콜라의 짜릿한 여정'
        contents='1886년에 탄생한 코카-콜라의 비하인드 히스토리, 마케팅 비법 등 130여 년 역사 속 흥미로운 이야기'
        url='https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/home-page/artwork/231025_Campaign_Home_2_1280_1024.png/width1960.png'
        order={1}
      />

      <Blog />

      <Intro />

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

      <Section name='portfolio' title={'🎨 Portfolio'} contents={[]} />

      <Section
        name='activity'
        title={'🏃‍♀️ Activity'}
        contents={activity.contents}
      />
    </Container>
  );
};

export default HomePage;
