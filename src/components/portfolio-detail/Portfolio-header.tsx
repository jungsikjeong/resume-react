import styled from 'styled-components';
import FlexBox from '../FlexBox';
import { tagsRandomBgColor } from '../../utils/tagsRandomBgColor';
import { useState } from 'react';
import { PortfolioType } from '../../assets/type/portfolio';
import CustomIcons from '../../assets/svgIcon/list-icon';

const Header = styled.h1`
  padding-top: 1rem;
  font-size: 40px;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const Icon = styled.p`
  font-size: 72px;
  margin-bottom: 2rem;
`;
const Title = styled.div``;

const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #eee;
`;

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .box-wrap {
    @media (max-width: 480px) {
      padding-top: 0.5rem;
    }
  }
`;

const Tags = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

const Tag = styled.li<{ bgcolor: string }>`
  flex-shrink: 0;
  padding: 0 0.5rem;
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 5px;
`;
interface PortfolioHeaderProps {
  item: PortfolioType;
}

const PortfolioHeader = ({ item }: PortfolioHeaderProps) => {
  const [color, setColor] = useState<string[]>(tagsRandomBgColor(item.tags));

  return (
    <>
      <Header>
        <Icon>{item.title.substring(0, 2)}</Icon>
        <Title
          dangerouslySetInnerHTML={{ __html: item.title.slice(2) }}
        ></Title>
      </Header>

      <TopWrapper>
        <Box>
          <FlexBox gap='10px'>
            <CustomIcons.ListIcon /> <p>skills</p>
          </FlexBox>

          <div className='box-wrap'>
            <Tags>
              {item.tags.map((tag, index) => (
                <Tag bgcolor={color[index]} key={index}>
                  {tag}
                </Tag>
              ))}
            </Tags>
          </div>
        </Box>

        <Box>
          <FlexBox gap='10px'>
            <CustomIcons.GraphIcon /> <p>Period</p>
          </FlexBox>

          <div className='box-wrap'>
            <p>{item.date}</p>
          </div>
        </Box>
      </TopWrapper>
    </>
  );
};

export default PortfolioHeader;
