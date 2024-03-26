import { useEffect, useState } from 'react';
import styled from 'styled-components';

import portfolio from '../../assets/json/portfolio.json';
import { CareerModalContentsType } from '../../assets/type/career-modal-contents';
import Activity from '../activity/activity';
import Portfolio from '../portfolio-list/portfolio-list';
import Skills from '../skills';

import Modal from '../modal';

const Wrapper = styled.section`
  width: 100%;
  margin-top: 5rem;
`;

const Title = styled.h3`
  font-weight: 500;
  padding-bottom: 0.5rem;
  border-bottom: ${({ theme }) => `1px solid ${theme.colorBorderGray}`};
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-left: 1.5rem;

  .point {
    font-weight: 600;
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
  isModalOpen?: boolean;
  setIsModalOpen?: (isOpen: boolean) => void;
  careerModalContents?: CareerModalContentsType[];
}

const Section = ({
  name,
  title,
  contents,
  style,
  isModalOpen,
  setIsModalOpen,
  careerModalContents,
}: SectionProps) => {
  const [portfolioList, setPortfolioList] = useState(portfolio.reverse());

  const handleOpenModal = (e: any) => {
    const { setId } = e.target.dataset;

    if (setId === 'modal') {
      if (isModalOpen) {
        setIsModalOpen && setIsModalOpen(false);
      } else {
        setIsModalOpen && setIsModalOpen(true);
      }
    }
  };

  useEffect(() => {
    setPortfolioList(portfolio.reverse());
  }, []);

  return (
    <Wrapper>
      {isModalOpen && (
        <Modal
          setIsModalOpen={setIsModalOpen}
          careerModalContents={careerModalContents}
        />
      )}

      <Title style={{ fontSize: style?.fontSize }}>{title}</Title>

      <List>
        {(name === 'someone' || name === 'career' || name === 'blog') &&
          contents?.map((content: any, index: number) => (
            <div key={index}>
              <Item
                style={{
                  fontFamily: 'Pretendard-Regular',
                  fontWeight: '600',
                }}
                dangerouslySetInnerHTML={{ __html: content }}
                onClick={(e) => handleOpenModal(e)}
              ></Item>
            </div>
          ))}
      </List>

      {name === 'skills' && <Skills contents={contents && contents[0]} />}

      {name === 'portfolio' && <Portfolio portfolio={portfolioList} />}

      {name === 'activity' && <Activity contents={contents} />}
    </Wrapper>
  );
};

export default Section;
