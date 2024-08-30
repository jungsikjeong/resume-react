import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isHeaderColorstate } from '../../atoms/is-header-color';

import Project00 from './2023/project00';
import Project01 from './2023/project01';
import Project02 from './2023/project02';
import Project03 from './2023/project03';
import Project04 from './2023/project04';

const Container = styled.div`
  position: relative;
`;

const Project = () => {
  const location = useLocation();

  const setIsHeaderColor = useSetRecoilState(isHeaderColorstate);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const changePoint = 961;

      if (scrollY > changePoint) {
        setIsHeaderColor(false);
        setVisible(false);
      } else {
        setIsHeaderColor(true);
        setVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      setIsHeaderColor(false);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setIsHeaderColor, setVisible]);

  return (
    <Container>
      {location?.pathname === '/project/2023/0' && (
        <Project00 visible={visible} />
      )}

      {location?.pathname === '/project/2023/1' && (
        <Project01 visible={visible} />
      )}

      {location?.pathname === '/project/2023/2' && (
        <Project02 visible={visible} />
      )}
      {location?.pathname === '/project/2023/3' && (
        <Project03 visible={visible} />
      )}
      {location?.pathname === '/project/2023/4' && (
        <Project04 visible={visible} />
      )}
    </Container>
  );
};

export default Project;
