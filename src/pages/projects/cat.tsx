import React from 'react';
import { useRecoilValue } from 'recoil';
import { keyframes, styled } from 'styled-components';
import { themeState } from '../../atoms/theme';

const opacityAni = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 500px;
  @media (max-width: 1024px) {
    width: 100%;
    height: 250px;
  }

  img {
    position: absolute;
    opacity: 0;
    animation: ${opacityAni} 1s forwards;
    transform: translate(-50%, -50%);
  }

  .footprint1 {
    top: 70%;
    left: 35%;
    width: 150px;
    transform: rotateZ(-31deg);
    animation-delay: 0.1s;

    @media (max-width: 1024px) {
      top: 70%;
      left: 35%;
      width: 150px;
      transform: rotateZ(-31deg);
    }
  }

  .footprint2 {
    top: 65%;
    left: 38%;
    width: 140px;
    transform: rotateZ(-50deg);
    animation-delay: 0.3s;
    @media (max-width: 1024px) {
      top: 63%;
      left: 38%;
      width: 120px;
      transform: rotateZ(-31deg);
    }
  }

  .footprint3 {
    top: 60%;
    left: 38%;
    width: 130px;
    transform: rotateZ(-80deg);
    animation-delay: 0.5s;
    @media (max-width: 1024px) {
      top: 60%;
      left: 42%;
      width: 90px;
      transform: rotateZ(-31deg);
    }
  }
  .footprint4 {
    top: 55%;
    left: 37%;
    width: 120px;
    transform: rotateZ(-90deg);
    animation-delay: 0.7s;
    @media (max-width: 1024px) {
      top: 50%;
      left: 45%;
      width: 80px;
      transform: rotateZ(-40deg);
    }
  }
  .footprint5 {
    top: 48%;
    left: 38%;
    width: 115px;
    transform: rotateZ(-40deg);
    animation-delay: 0.9s;
    @media (max-width: 1024px) {
      top: 40%;
      left: 45%;
      width: 70px;
      transform: rotateZ(-48deg);
    }
  }
  .footprint6 {
    top: 44%;
    left: 40%;
    width: 100px;
    transform: rotateZ(-30deg);
    animation-delay: 1.1s;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .footprint7 {
    top: 40%;
    left: 42%;
    width: 90px;
    transform: rotateZ(-30deg);
    animation-delay: 1.3s;
    @media (max-width: 1024px) {
      display: none;
    }
  }
  .footprint8 {
    top: 38%;
    left: 44%;
    width: 70px;
    transform: rotateZ(-30deg);
    animation-delay: 1.5s;
    @media (max-width: 1024px) {
      display: none;
    }
  }

  .cat {
    top: 38%;
    left: 48%;
    width: 30px;
    animation-delay: 1.5s;
    @media (max-width: 1024px) {
      left: 50%;
    }
  }
`;

const Cat = () => {
  const theme = useRecoilValue(themeState);
  return (
    <Wrapper>
      {theme === 0 ? (
        <>
          <img src='/footprint.svg' alt='' className='footprint1' />
          <img src='/footprint.svg' alt='' className='footprint2' />
          <img src='/footprint.svg' alt='' className='footprint3' />
          <img src='/footprint.svg' alt='' className='footprint4' />
          <img src='/footprint.svg' alt='' className='footprint5' />
          <img src='/footprint.svg' alt='' className='footprint6' />
          <img src='/footprint.svg' alt='' className='footprint7' />
          <img src='/footprint.svg' alt='' className='footprint8' />

          <img src='/cat.svg' alt='' className='cat' />
        </>
      ) : (
        <>
          <img src='/footprint-dark.svg' alt='' className='footprint1' />
          <img src='/footprint-dark.svg' alt='' className='footprint2' />
          <img src='/footprint-dark.svg' alt='' className='footprint3' />
          <img src='/footprint-dark.svg' alt='' className='footprint4' />
          <img src='/footprint-dark.svg' alt='' className='footprint5' />
          <img src='/footprint-dark.svg' alt='' className='footprint6' />
          <img src='/footprint-dark.svg' alt='' className='footprint7' />
          <img src='/footprint-dark.svg' alt='' className='footprint8' />

          <img src='/cat-dark.svg' alt='' className='cat' />
        </>
      )}
    </Wrapper>
  );
};

export default Cat;
