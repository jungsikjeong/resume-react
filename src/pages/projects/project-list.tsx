import { styled } from 'styled-components';

const Container = styled.div`
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`;

const Year = styled.div`
  margin-bottom: 22px;

  .year {
    position: relative;
    font-size: 36px;
    font-family: bold;
  }
`;

const List = styled.ul`
  font-size: 16px;
  font-weight: 600;
`;

const Item = styled.li`
  &:nth-child(1) {
    border-top: 4px solid ${({ theme }) => theme.colorBlack};
  }
  display: flex;
  align-items: center;
  padding: 35px 0;
  min-height: 130px;
  border-top: 1px solid ${({ theme }) => theme.colorBlack};
`;

const ProjectCount = styled.span`
  position: absolute;
  right: -12px;
  font-size: 12px;
  font-weight: bold;
`;

const ProjectList = () => {
  return (
    <Container>
      <Year>
        <span className='year'>
          2023
          <ProjectCount>2</ProjectCount>
        </span>
      </Year>

      <List>
        <Item>뉴진스-갤러리아</Item>
        <Item>dd</Item>
      </List>
    </Container>
  );
};

export default ProjectList;
