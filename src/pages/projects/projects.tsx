import { styled } from 'styled-components';
import Cat from './cat';
import ProjectList from './project-list';

const Container = styled.div`
  height: 100vh;
`;

const TopWrap = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: initial;
  }
`;

const TextWrap = styled.div`
  padding-top: 10rem;
  padding: 10rem 0;
  width: 50%;
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 60px;
    line-height: 1.75;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 1.2;
    }
  }

  p {
    line-height: 2.15;
    font-weight: 600;
    @media (max-width: 767px) {
      font-weight: 400;
      line-height: 1.4;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -1.2px;
    }
  }
`;

const Projects = () => {
  return (
    <Container>
      <TopWrap>
        <TextWrap>
          <h1>걸어온 길</h1>

          <p>여기, 저의 여정 속에서 남긴 발자취들을 소개합니다.</p>
        </TextWrap>
        <Cat />
      </TopWrap>

      <ProjectList />
    </Container>
  );
};

export default Projects;
