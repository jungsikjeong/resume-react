import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Wrapper = styled.div`
  padding-top: 1rem;
`;

const Year = styled.div`
  @media (max-width: 480px) {
    border-bottom: ${({ theme }) => `1px solid ${theme.colorBorderGray}`};
  }
`;

const Contents = styled.div`
  padding-left: 5rem;
  @media (max-width: 480px) {
    padding-left: 0rem;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .date {
    font-size: 12px;
  }
`;

const Description = styled.p`
  line-height: 22px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

type ContentsActivityType = {
  id: number;
  title: string;
  year: string;
  date: string;
  description: string;
};

interface ActivityProps {
  contents: ContentsActivityType[];
}

const Activity = ({ contents }: ActivityProps) => {
  return (
    <Container>
      {contents.map((content) => (
        <Wrapper key={content.id}>
          <Year>
            <p>{content.year}</p>
          </Year>

          <Contents>
            <Title>
              <h3>{content.title}</h3>
              <p className='date'>{content.date}</p>
            </Title>

            <Description>{content.description}</Description>
          </Contents>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Activity;
