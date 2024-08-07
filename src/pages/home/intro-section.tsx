import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { inView } from 'framer-motion';
import StyledButton from '../../components/common/styled-button';

const Container = styled.div`
  margin-top: 140px;
  display: flex;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }

  @media (max-width: 767px) {
    margin-top: 50px;
  }
`;

const ContentsWrap = styled.div<{ order: number }>`
  order: ${({ order }) => order};
  padding: 1rem;
  z-index: 1;

  @media (max-width: 1024px) {
    flex: 0 0 100%;
    order: 0;
  }
  @media (max-width: 767px) {
  }
`;

const ImageWrap = styled.div<{ order: number }>`
  margin-top: 80px;
  flex: 0 0 58.3333333333%;
  left: ${({ order }) => (order === 0 ? 'auto' : '8.3333333333%')};
  right: ${({ order }) => (order === 0 ? '8.3333333333%' : 'auto')};
  position: relative;
  padding-inline: 16px;

  @media (max-width: 1024px) {
    position: static;
    margin-top: -80px;
    min-width: 100%;
    flex: 0 0 100%;
    padding: 0;
    flex-grow: 1;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 552px;
  padding: 64px 80px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colorWhite};
  box-shadow: 0 14px 18px rgba(0, 0, 0, 0.06);
  min-width: 50%;
  z-index: 1;

  @media (max-width: 1024px) {
    padding-inline: 8px;
    padding: 32px 24px;
    height: 100%;
  }

  p {
    line-height: 26px;
    font-weight: bold;

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const BtnWrap = styled.div`
  margin-top: auto;
  width: 100%;

  @media (max-width: 1024px) {
    margin-top: 30px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    margin-top: 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: auto 1280 / 1024;
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;

  &.in-view {
    opacity: 1;
  }

  @media (max-width: 767px) {
    border-radius: 0px;
  }
`;

interface IIntroSectionProps {
  title: string;
  contents: string;
  url: string;
  order: number;
}

const IntroSection = ({ title, contents, url, order }: IIntroSectionProps) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleInView = (inViewTarget: HTMLImageElement | null) => {
      if (inViewTarget) {
        inView(inViewTarget, () => {
          inViewTarget.classList.add('in-view');
        });
      }
    };

    handleInView(imageRef.current);
  }, []);

  return (
    <Container>
      <ContentsWrap order={order}>
        <Box>
          <h3>{title}</h3>
          <p>{contents} ​</p>

          <BtnWrap>
            <StyledButton>자세히 보기</StyledButton>
          </BtnWrap>
        </Box>
      </ContentsWrap>

      <ImageWrap order={order}>
        <Image ref={imageRef} src={url} alt='' />
      </ImageWrap>
    </Container>
  );
};

export default IntroSection;
