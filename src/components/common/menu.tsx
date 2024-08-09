import { AnimatePresence, motion } from 'framer-motion';
import { PiGithubLogoBold } from 'react-icons/pi';
import { SiBloglovin } from 'react-icons/si';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { menuState } from '../../atoms/menu';
import { FaArrowRightLong } from 'react-icons/fa6';

import ThemeSwitchBtn from '../common/theme-switch-btn';
import useScrollPosition from '../../hook/use-scroll-position';

const MenuWrap = styled.div`
  font-family: 'NotoSansKR', sans-serif;
  font-size: 14px;
`;
const MenuText = styled(motion.div)<{ $isscrolled: boolean }>`
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 500;
  cursor: url('/images/cursor-pointer-hover.png'), auto;
  transition: all 0.2s ease;

  @media (max-width: 1460px) {
    top: ${({ $isscrolled }) => ($isscrolled ? '25px' : '50px')};
  }

  @media (max-width: 767px) {
    top: 20px;
    right: 20px;
  }
`;

const List = styled(motion.ul)`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 400;
  width: 582px;
  height: 100%;
  padding: 10rem 60px 0;
  background-color: ${({ theme }) => theme.colorBg};

  @media (max-width: 767px) {
    width: 100%;
    padding: 10rem 0 0;
  }
`;

const Item = styled.li`
  font-size: 30px;
  color: ${({ theme }) => theme.colorMainFont};

  @media (max-width: 1024px) {
    font-size: 23px;
  }
`;

const IconWrap = styled.div`
  position: absolute;
  bottom: 20rem;
  display: flex;
  gap: 10px;

  @media (max-width: 767px) {
    bottom: 2rem;
  }
`;

const SLink = styled(Link)<{ pathname?: string }>`
  display: flex;
  align-items: center;
  position: relative;
  color: ${({ pathname, theme }) =>
    pathname ? theme.colorBlue : theme.colorMainFont};
  text-decoration: none;
  padding: 0;
  border-bottom: 0px;
  transition: all 0.2s linear;
  font-size: 30px;

  .text {
    margin-left: ${({ pathname }) => (pathname ? '10px' : '0px')};
  }

  &:hover {
    color: ${({ theme }) => theme.colorBlue};
  }

  @media (max-width: 1024px) {
    font-size: 23px;
  }

  @media (max-width: 767px) {
    &:nth-child(1) {
      margin-left: 2rem;
    }
  }
`;

const Count = styled.span`
  position: absolute;
  top: 0;

  margin-left: 5px;
  font-size: 12px;
`;

const Menu = () => {
  const [open, setOpen] = useRecoilState(menuState);
  const location = useLocation();

  const isScrolled = useScrollPosition();

  return (
    <MenuWrap>
      {!open ? (
        <MenuText
          $isscrolled={isScrolled}
          transition={{
            scale: { type: 'spring', stiffness: 400, damping: 17 },
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setOpen((open) => !open)}
        >
          MENU
        </MenuText>
      ) : (
        <AnimatePresence>
          <MenuText
            $isscrolled={isScrolled}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              opacity: { duration: 0.5 },
              scale: { type: 'spring', stiffness: 400, damping: 17 },
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setOpen((open) => !open)}
          >
            CLOSE
          </MenuText>
        </AnimatePresence>
      )}

      <AnimatePresence>
        <List
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: open ? 0 : '100%', opacity: open ? 1 : 0 }}
          transition={{
            duration: 0.3,
            ease: 'linear',
          }}
        >
          <Item>
            <SLink
              to='/project'
              pathname={location.pathname === '/project' ? 'true' : ''}
              onClick={() => setOpen(false)}
            >
              {location.pathname === '/project' && <FaArrowRightLong />}
              <span className='text'>
                프로젝트 <Count>32</Count>
              </span>
            </SLink>
          </Item>
          <Item>
            <SLink
              to='/profile'
              pathname={location.pathname === '/profile' ? 'true' : ''}
              onClick={() => setOpen(false)}
            >
              {location.pathname === '/profile' && <FaArrowRightLong />}
              <span className='text'>프로필 및 연락처</span>
            </SLink>
          </Item>

          <IconWrap>
            <SLink
              to='https://github.com/jungsikjeong/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <PiGithubLogoBold />
            </SLink>

            <SLink
              to='https://wjdwndtlr10241024.tistory.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <SiBloglovin />
            </SLink>
            <ThemeSwitchBtn />
          </IconWrap>
        </List>
      </AnimatePresence>
    </MenuWrap>
  );
};

export default Menu;
