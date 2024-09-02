// <Text>{'안녕하세요\n줄바꿈이되나요?'}</Text>

import React from 'react';
import styled from 'styled-components';

const Container = styled.div<{ $fontsize?: string }>`
  font-weight: 500;

  &.title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    line-height: 34px;
    margin: 5rem 0;
    @media (max-width: 1024px) {
      font-size: 1.875rem;
    }
    @media (max-width: 767px) {
      margin: 1.5rem 0;
      font-size: 1.5rem;
    }
  }

  &.sub-title {
    font-weight: bold;
    padding: 1rem 0;
    font-size: ${({ $fontsize }) => ($fontsize ? $fontsize : '1.2rem')};

    @media (max-width: 767px) {
      font-size: ${({ $fontsize }) => ($fontsize ? $fontsize : '1rem')};
      padding: 0;
    }
  }

  &.text {
    font-size: ${({ $fontsize }) => ($fontsize ? $fontsize : '1.125rem')};
    color: ${({ theme }) => theme.colorBlack};
    padding-top: 0.5rem;
    line-height: 30px;

    @media (max-width: 1024px) {
      font-size: ${({ $fontsize }) => ($fontsize ? $fontsize : '0.875rem')};
    }
    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 25px;
    }
  }

  &.prev-view-text {
    line-height: 26px;
    font-weight: bold;

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

interface ITextProps {
  message: string;
  fontSize?: string;
  type?: string;
}

const FormattedText = ({ message, type = 'text', fontSize }: ITextProps) => {
  const hasNewLine = message?.includes('\n');

  const messageSplit = hasNewLine
    ? message.split('\n').map((str, idx, array) => {
        return (
          <React.Fragment key={idx}>
            {str}
            {idx === array.length - 1 ? null : <br />}
          </React.Fragment>
        );
      })
    : message;

  return (
    <Container className={type} $fontsize={fontSize}>
      {messageSplit}
    </Container>
  );
};

export default FormattedText;
