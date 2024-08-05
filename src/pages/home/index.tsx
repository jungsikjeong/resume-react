import { useState } from 'react';
import styled from 'styled-components';
import activity from '../../assets/json/activity.json';
import author from '../../assets/json/author.json';
import authorDetails from '../../assets/json/authorDetails.json';
import careerModalContents from '../../assets/json/career-modal.json';
import career from '../../assets/json/career.json';
import skills from '../../assets/json/skills.json';

import DarkModeButton from '../../components/common/theme-switch';
import Intro from '../../components/intro/intro';
import Section from '../../components/section';

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
      <DarkModeButton />
      <Intro />

      <Section
        name='someone'
        title={'🙆‍♂️ 저는 이런사람이에요!'}
        contents={author?.contents}
        style={{ fontSize: '1.4rem' }}
      />

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
