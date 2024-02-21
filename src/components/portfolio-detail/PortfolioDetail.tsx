import { PortfolioType } from '../../assets/type/portfolio';
import { useEffect } from 'react';
import styled from 'styled-components';

import PortfolioHeader from './PortfolioHeader';
import PortfolioImage from './PortfolioImage';
import DarkModeButton from '../darkModeButton/DarkModeButton';

const Container = styled.div`
  margin-top: 80px;
  padding-bottom: 10rem;
  font-family: 'BMHANNAProOTF';
`;

const SiteWrap = styled.div`
  padding-bottom: 2rem;
`;

const Github = styled.div`
  padding: 1rem 0;
`;

const Demo = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Description = styled.div`
  line-height: 22px;
`;

const WhatIDid = styled.div``;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 1.5rem;
`;

const Item = styled.li``;

const WhatILearned = styled.div``;

const Box = styled.div`
  background-color: ${({ theme }) => theme.colorAliceBlue};
  border-radius: 5px;
  padding: 1rem 0;
`;

interface PortfolioDetailProps {
  item: PortfolioType;
}

const PortfolioDetail = ({ item }: PortfolioDetailProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <DarkModeButton />
      <PortfolioHeader item={item} />

      <PortfolioImage images={item?.images} />

      <SiteWrap>
        <Github>
          <p>
            😸
            <a href={item?.github} target='_blank' rel='noopener noreferrer'>
              Github
            </a>
          </p>
        </Github>

        {item.demo && (
          <Demo>
            <p>
              💻
              <a href={item?.demo} target='_blank' rel='noopener noreferrer'>
                Demo Site
              </a>
            </p>
          </Demo>
        )}
      </SiteWrap>

      <Wrapper>
        <Description>
          <h3>Description</h3>
          <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
        </Description>
        {/* "src=./images/code/flex-box.png" */}
        <WhatIDid>
          <h3>What I Did</h3>
          <List>
            {item?.whatIDid?.map((data, index) => (
              <Item
                dangerouslySetInnerHTML={{ __html: data }}
                key={index}
              ></Item>
            ))}
          </List>
        </WhatIDid>

        <WhatILearned>
          <h3> What I learned</h3>

          <Box>
            <List>
              {item?.whatILearned?.map((data, index) => (
                <Item
                  dangerouslySetInnerHTML={{ __html: data }}
                  key={index}
                ></Item>
              ))}
            </List>
          </Box>
        </WhatILearned>
      </Wrapper>
    </Container>
  );
};

export default PortfolioDetail;
