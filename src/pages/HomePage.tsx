import styled from 'styled-components';
import author from '../assets/json/author.json';
import career from '../assets/json/career.json';
import authorDetails from '../assets/json/authorDetails.json';
import skills from '../assets/json/skills.json';
import activity from '../assets/json/activity.json';

import Intro from '../components/intro';
import Section from '../components/section';

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
  return (
    <Container>
      <Intro />
      <Section
        title={'🙆‍♂️ 저는 이런사람이에요!'}
        contents={author?.contents}
        style={{ fontSize: '1.4rem' }}
      />

      <Box>
        <Section
          title={'🎥 전문성 쌓아나가는중..'}
          contents={career?.contents}
        />

        <Section
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
