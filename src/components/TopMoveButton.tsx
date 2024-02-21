import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 900px;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  z-index: 100;
`;

const Wrapper = styled.div<{ visible: boolean }>`
  right: 10px;
  bottom: ${({ visible }) => (visible ? '16px' : '-60px')};
  opacity: 1;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 100%;
  z-index: 100;
  cursor: pointer;
  background: #fff;
  box-shadow: 0 0 3px 2px #d6d6d6;
  color: #37352f;
  font-size: 10px;
  transition: 0.3s ease-out;
  pointer-events: auto;
`;

const TopMoveButton = () => {
  const [visible, setVisible] = useState(false);

  const onTopMove = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      // 현재 스크롤 위치
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      // 전체 문서의 높이
      const totalHeight = document.documentElement.scrollHeight;
      // 현재 창의 높이
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;

      // 스크롤 위치가 (전체 문서 높이 - 현재 창의 높이)와 거의 동일하다면 맨 하단에 도달한 것으로 간주
      if (scrollPosition >= totalHeight - windowHeight - 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Container>
      <Wrapper visible={visible} onClick={onTopMove}>
        <svg
          version='1.1'
          width='12'
          height='12'
          x='0'
          y='0'
          viewBox='0 0 292.362 292.362'
          fill='currentColor'
        >
          <g transform='matrix(-1,1.2246467991473532e-16,-1.2246467991473532e-16,-1,292.36199951171875,292.3629837036133)'>
            <g xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424 C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428 s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z'
                fill='currentColor'
                data-original='#000000'
              ></path>
            </g>
          </g>
        </svg>
        TOP
      </Wrapper>
    </Container>
  );
};

export default TopMoveButton;
