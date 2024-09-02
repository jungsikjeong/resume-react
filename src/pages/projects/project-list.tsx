import { styled } from 'styled-components';
import project2023 from '../../assets/json/project2023.json';
import project2024 from '../../assets/json/project2024.json';

import ProjectItem from './project-item';

const Container = styled.div`
  padding: 0 1rem;
  @media (max-width: 1024px) {
  }
`;
const Year = styled.div`
  margin-bottom: 22px;

  .year {
    position: relative;
    font-size: 36px;
    font-weight: bold;
    @media (max-width: 767px) {
      font-size: 18px;
    }
  }
`;

const ProjectCount = styled.span`
  position: absolute;
  right: -12px;
  font-size: 12px;
  font-weight: bold;
`;

const List = styled.ul`
  font-size: 16px;
  font-weight: 600;
`;

const Dummy = styled.div`
  padding-bottom: 10rem;

  @media (max-width: 480px) {
    padding-bottom: 5rem;
  }
`;

const ProjectList = () => {
  return (
    <Container>
      <Year>
        <span className='year'>
          2024
          <ProjectCount>{project2024.length}</ProjectCount>
        </span>
      </Year>

      <List>
        {project2024
          ?.slice()
          ?.reverse()
          ?.map((item) => <ProjectItem item={item} key={item.id} />)}
      </List>
      <Dummy />

      <Year>
        <span className='year'>
          2023
          <ProjectCount>{project2023.length}</ProjectCount>
        </span>
      </Year>
      <List>
        {project2023
          ?.slice()
          ?.reverse()
          ?.map((item) => <ProjectItem item={item} key={item.id} />)}
      </List>

      <Dummy />
    </Container>
  );
};

export default ProjectList;
