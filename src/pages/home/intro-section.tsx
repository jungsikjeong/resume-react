import React, { useEffect, useRef } from 'react';
import { styled } from 'styled-components';
import { inView } from 'framer-motion';

import { useNavigate } from 'react-router-dom';
import { IintroItem } from '../../interface/intro-item';
import FormattedText from '../../components/common/formatted-text';
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
  max-height: 530px;
  width: 100%;
  height: auto;
  aspect-ratio: auto 1/1;
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;

  &.in-view {
    opacity: 1;
  }

  @media (max-width: 767px) {
    border-radius: 0px;
    max-height: 500px;
  }

  @media (max-width: 480px) {
    border-radius: 0px;
    max-height: 250px;
  }
`;

interface IIntroSectionProps {
  item: IintroItem;
}

const IntroSection = ({ item }: IIntroSectionProps) => {
  const navigate = useNavigate();

  const imageRef = useRef<HTMLImageElement>(null);

  const onPageMove = () => {
    navigate('/intro', {
      state: {
        item,
      },
    });
  };

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
      <ContentsWrap order={item.id}>
        <Box>
          <h3>{item.title}</h3>
          {/* <p>{item.prevViewText} ​</p> */}
          <FormattedText message={item?.prevViewText} type='prev-view-text' />

          <BtnWrap>
            <StyledButton onAction={() => onPageMove()}>
              자세히 보기
            </StyledButton>
          </BtnWrap>
        </Box>
      </ContentsWrap>

      <ImageWrap order={item.id}>
        <Image ref={imageRef} src={item?.mainImage} alt='main-img' />
      </ImageWrap>
    </Container>
  );
};

export default IntroSection;
