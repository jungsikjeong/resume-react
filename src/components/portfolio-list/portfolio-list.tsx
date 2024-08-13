import styled from 'styled-components';
import { IProjectList } from '../../interface/project-list';
import PortfolioItem from './portfolio-item';

const Container = styled.div``;

const List = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 4px;
  width: 100%;
  overflow-x: hidden;
`;

interface PortfolioProps {
  portfolio: IProjectList[];
}

const PortfolioList = ({ portfolio }: PortfolioProps) => {
  return (
    <Container>
      <List>
        {portfolio.map((item) => (
          <PortfolioItem item={item} key={item.id} />
        ))}
      </List>
    </Container>
  );
};

export default PortfolioList;
