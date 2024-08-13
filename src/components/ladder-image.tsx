import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

const LadderImage = () => {
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
          <Link to='/projects'>
            <Image src='/images/ladder.gif' alt='' style={{ width: '200px' }} />
          </Link>
        </ImageWrap>
      )}
    </>
  );
};

export default LadderImage;
