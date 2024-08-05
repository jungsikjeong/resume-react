import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useSpring } from 'framer-motion';

const ProgressBar = styled(motion.div)<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: #2d63ad;
  transform-origin: 0%;
  z-index: 100;
  visibility: ${({ $visible }) => ($visible ? 'visible' : 'hidden')};
`;

const ScrollProgressBar = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    let scrollTimeout: any;

    const handleScroll = () => {
      setIsScrolling(true);

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

  return <ProgressBar $visible={isScrolling} style={{ scaleX }} />;
};

export default ScrollProgressBar;
