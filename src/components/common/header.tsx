import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { styled } from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import CustomIcons from '../../assets/svgIcon/icons';
import { isHeaderColorstate } from '../../atoms/is-header-color';
import { menuState } from '../../atoms/menu';
import UseCurrentPage from '../../hook/use-current-page';
import useScrollPosition from '../../hook/use-scroll-position';
import Menu from './menu';

const Overlay = styled.div`
  position: fixed;
  z-index: 300;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(34, 34, 34, 0.5);
  visibility: visible;
`;

const Container = styled.header<{
  $isscrolled: boolean;
}>`
  padding: 1rem 3rem;
  font-family: 'VariableFont_wght', sans-serif;
  font-weight: 600;
  height: 130px;
  background-color: ${({ theme }) => theme.colorBg};
  transition: all 0.2s ease-in-out;

  @media (max-width: 1460px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 400;
    height: ${({ $isscrolled }) => ($isscrolled ? '60px' : '130px')};
    background-color: ${({ theme }) => theme.colorBg};
    color: ${({ theme }) => theme.colorMainFont};
  }

  @media (max-width: 767px) {
    height: ${({ $isscrolled }) => ($isscrolled ? '60px' : '60px')};
  }
`;

const Wrapper = styled.div<{
  $isscrolled: boolean;
  $iscurrentpage: boolean;
}>`
  display: flex;
  position: absolute;
  top: 50px;
  left: 50%;
  visibility: ${({ $isscrolled }) => ($isscrolled ? 'hidden' : 'visible')};
  transform: translateX(-50%);
  z-index: 300;

  @media (max-width: 767px) {
    top: ${({ $isscrolled }) => ($isscrolled ? '50px' : '20px')};
  }

  @media (max-width: 486px) {
    display: none;
  }
`;

const IconWrap = styled(motion.div)`
  width: 30px;
  text-align: center;
`;

const Logo = styled.img<{ $isscrolled: boolean }>`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  object-fit: cover;
  position: fixed;
  top: 20px;
  left: 50px;
  z-index: 200;
  transition: all 0.2s ease;

  @media (max-width: 1460px) {
    top: ${({ $isscrolled }) => ($isscrolled ? '5px' : '20px')};
    width: ${({ $isscrolled }) => ($isscrolled ? '50px' : '100px')};
    height: ${({ $isscrolled }) => ($isscrolled ? '50px' : '100px')};
    border-radius: ${({ $isscrolled }) => ($isscrolled ? '50%;' : '25px')};
  }

  @media (max-width: 1024px) {
    width: ${({ $isscrolled }) => ($isscrolled ? '50px' : '90px')};
    height: ${({ $isscrolled }) => ($isscrolled ? '50px' : '90px')};
  }

  @media (max-width: 767px) {
    width: 35px;
    height: 35px;
    top: 10px;
    left: 20px;
  }
`;

const Header = () => {
  const location = useLocation();
  const { isCurrentPage } = UseCurrentPage({ currentPathname: '/project/' });

  const isHeaderColor = useRecoilValue(isHeaderColorstate);
  const [isMenu, setMenuClose] = useRecoilState(menuState);
  const isScrolled = useScrollPosition();

  const [title, setTitle] = useState('web');

  useEffect(() => {
    const pathSegments =
      location.pathname === '/'
        ? 'WEB'
        : location.pathname.split('/').join('').toUpperCase();

    setTitle(pathSegments);
  }, [location.pathname]);

  return (
    <Container
      $isscrolled={isScrolled}
      className={isHeaderColor && !isMenu ? 'color-white' : ''}
    >
      {isMenu && <Overlay onClick={() => setMenuClose(false)} />}

      <Link to='/'>
        <Logo src='/images/logo.jpeg' $isscrolled={isScrolled} />
      </Link>

      <Wrapper $isscrolled={isScrolled} $iscurrentpage={isCurrentPage}>
        MY
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
