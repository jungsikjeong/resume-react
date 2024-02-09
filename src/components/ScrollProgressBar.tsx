import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ProgressBar = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 2px;
  background-color: #2d63ad;
  transition: all 0.2s linear;
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
`;

const ScrollProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: any;

    const handleScroll = () => {
      setIsScrolling(true);

      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (window.scrollY / scrollableHeight) * 100;

      setScrollPercentage(scrolledPercentage);

      // 새로운 타임아웃을 설정하고, 기존 타임아웃을 취소
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(scrollTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ProgressBar
      style={{ width: `${scrollPercentage}%` }}
      visible={isScrolling}
    />
  );
};

export default ScrollProgressBar;
