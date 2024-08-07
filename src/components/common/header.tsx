import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';

import CustomIcons from '../../assets/svgIcon/icons';
import useScrollPosition from '../../hook/use-scroll-position';
import Menu from './menu';

const Container = styled.header`
  padding: 1rem 3rem;
  font-family: 'VariableFont_wght', sans-serif;
  font-weight: 600;
  height: 130px;
`;

const Wrapper = styled.div<{ $isscrolled: string }>`
  display: flex;
  position: absolute;
  top: 50px;
  left: 50%;
  visibility: ${({ $isscrolled }) => ($isscrolled ? 'hidden' : 'visible')};
  transform: translateX(-50%);
`;

const IconWrap = styled(motion.div)`
  width: 30px;
  text-align: center;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  object-fit: cover;
  position: fixed;
  top: 20px;
  left: 50px;
  z-index: 200;

  @media (max-width: 1024px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    left: 20px;
  }
`;

const Header = () => {
  const [title, setTitle] = useState('web');
  const isScrolled = useScrollPosition();

  const location = useLocation();

  useEffect(() => {
    const pathSegments =
      location.pathname === '/'
        ? 'WEB'
        : location.pathname.split('/').join('').toUpperCase();

    setTitle(pathSegments);
  }, [location.pathname]);

  return (
    <Container>
      <Link to='/'>
        <Logo src='/images/logo.jpeg' />
      </Link>

      <Wrapper $isscrolled={isScrolled ? 'true' : ''}>
        WE
        <IconWrap
          animate={
            isScrolled ? { scale: 1 } : { scale: [1, 1, 1.4, 1.2, 1.4, 1, 1] }
          }
          transition={{
            duration: 2,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <CustomIcons.HeartIcon />
        </IconWrap>
        {title}
      </Wrapper>
      <Menu />
    </Container>
  );
};

export default Header;
