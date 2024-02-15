import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Portfolio from '../portfolio/index';
import portfolio from '../../assets/json/portfolio.json';
import Activity from '../Activity';

const Wrapper = styled.section`
  width: 100%;
  margin-top: 5rem;
`;

const Title = styled.h3`
  font-weight: 500;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
`;

const SubTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.colors.break};

  .point {
    font-weight: 600;
  }
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .point {
    background: #afe4f8;
  }
`;

const Item = styled.li``;

type ContentsType = {
  FrontEnd: string[];
  BackEnd: string[];
  Tools: string[];
};

type ContentsActivityType = {
  id: number;
  title: string;
  year: string;
  date: string;
  description: string;
};

interface SectionProps {
  name?: string;
  title: string;
  contents: string[] | ContentsType[] | ContentsActivityType[] | any;
  style?: {
    fontSize?: string;
  };
}

const Section = ({ name, title, contents, style }: SectionProps) => {
  const [portfolioList, setPortfolioList] = useState(portfolio.reverse());

  useEffect(() => {
    setPortfolioList(portfolio.reverse());
  }, []);
  return (
    <Wrapper>
      <Title style={{ fontSize: style?.fontSize }}>{title}</Title>

      <List>
        {name === 'I-am-person' &&
          contents?.map((content: any, index: number) => (
            <Item
              dangerouslySetInnerHTML={{ __html: content }}
              key={index}
            ></Item>
          ))}
      </List>

      {name === 'skills' && <Skills contents={contents && contents[0]} />}

      {name === 'portfolio' && <Portfolio portfolio={portfolioList} />}

      {name === 'activity' && <Activity contents={contents} />}
    </Wrapper>
  );
};

const Skills = ({ contents }: any) => {
  return (
    <SkillsList>
      <div>
        <SubTitle>Front-end:</SubTitle>
        {contents.FrontEnd.map((item: any, index: number) => (
          <Item
            dangerouslySetInnerHTML={{ __html: item }}
            style={{ marginLeft: '1.5rem' }}
            key={index}
          ></Item>
        ))}
      </div>

      <div>
        <SubTitle>Back-end:</SubTitle>

        {contents.BackEnd.map((item: any, index: number) => (
          <Item
            dangerouslySetInnerHTML={{ __html: item }}
            style={{ marginLeft: '1.5rem' }}
            key={index}
          ></Item>
        ))}
      </div>

      <div>
        <SubTitle>Tools:</SubTitle>

        {contents.Tools.map((item: any, index: number) => (
          <Item
            dangerouslySetInnerHTML={{ __html: item }}
            style={{ marginLeft: '1.5rem' }}
            key={index}
          ></Item>
        ))}
      </div>
    </SkillsList>
  );
};

export default Section;
