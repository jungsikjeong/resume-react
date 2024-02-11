import { useRef, useState } from 'react';
import styled from 'styled-components';
import { tagsRandomBgColor } from '../../utils/tagsRandomBgColor';
import { throttle } from '../../utils/throttle';
import { PortfolioType } from '../../assets/type/portfolio';
import PortfolioItem from './PortfolioItem';

const Container = styled.div``;

const List = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;
  padding-top: 16px;
  padding-bottom: 4px;
  width: 100%;
  overflow-x: hidden;
`;

interface PortfolioProps {
  portfolio: PortfolioType[];
}

const Portfolio = ({ portfolio }: PortfolioProps) => {
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

export default Portfolio;