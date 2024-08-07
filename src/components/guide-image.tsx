import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ImageWrap = styled.div`
  position: fixed;
  left: 10px;
  bottom: 0;
  z-index: 400;

  &:hover img {
    margin-left: 20px;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
  cursor: url('/images/cursor-pointer-hover.png'), auto;
`;

const GuideImage = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const initialTimer = setTimeout(() => {
      setShowImage(true);
    }, 5000);

    return () => {
      clearTimeout(initialTimer);
    };
  }, []);

  return (
    <>
      {showImage && (
        <ImageWrap>
          <Image src='/test.gif' alt='' style={{ width: '200px' }} />
        </ImageWrap>
      )}
    </>
  );
};

export default GuideImage;
