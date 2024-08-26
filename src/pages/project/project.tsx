import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { isHeaderColorstate } from '../../atoms/is-header-color';
import FormattedText from '../../components/common/formatted-text';
import StyledButton from '../../components/common/styled-button';
import { TfiBackLeft } from 'react-icons/tfi';
import FlexBox from '../../components/flex-box/flex-box';

const Container = styled.div`
  position: relative;
`;

const PreviousPageBtn = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 5rem;
  right: 0.9em;
  z-index: 300;
  font-size: 13px;
  opacity: ${({ $visible }) => ($visible ? '0' : '1')};
  transition: opacity 0.2s ease;
  @media (max-width: 767px) {
    display: none;
  }
`;

const SLink = styled(Link)`
  color: ${({ theme }) => theme.colorMainFont};
  font-weight: 600;
  padding-bottom: 0.2rem;
  border-bottom: 3px solid ${({ theme }) => theme.colorSkyBlue};
  display: block;
`;

const ThumbnailWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 961px;
`;

const Thumbnail = styled.div<{ url: string }>`
  background-image: ${({ url }) => `url(${url})`};
  background-color: #111111;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 961px;
  background-color: ${({ theme }) => theme.colorBg};
`;

const InnerWrap = styled.div`
  max-width: 700px;
  padding: 120px 0;
  height: 100%;
  margin: 0 auto;
  /* background-color: ${({ theme }) => theme.colorBg}; */

  @media (max-width: 767px) {
    padding: 100px 1rem;
  }

  @media (max-width: 486px) {
    padding: 50px 1rem;
  }
`;

const ImageWrap = styled.div``;

const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: auto 1/1;
`;

const ButtonWrap = styled.div`
  margin-top: 2rem;
  width: 241px;
`;

const Project = () => {
  const location = useLocation();

  const setIsHeaderColor = useSetRecoilState(isHeaderColorstate);

  const [{ item }, setItem] = useState({ ...location.state });
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
      <PreviousPageBtn $visible={visible}>
        <SLink to='/projects'>
          <FlexBox alignItems='center' gap='3px'>
            목록으로
            <br />
            돌아가기
            <TfiBackLeft size={30} />
          </FlexBox>
        </SLink>
      </PreviousPageBtn>

      {/* 썸네일 이미지 */}
      <ThumbnailWrapper>
        <Thumbnail url={item?.thumbnail} />
      </ThumbnailWrapper>

      <Wrapper>
        <InnerWrap>
          {/* 제목 */}
          <FormattedText
            type='sub-title'
            message={item?.title}
            fontSize='1.6rem'
          />

          {/* 내용1 */}
          <FormattedText
            type='text'
            message={item?.description}
            fontSize='15px'
          />

          {/* 바로가기 버튼 */}
          <ButtonWrap>
            <Link
              to={item?.demo ? item?.demo : item?.github}
              target='_blank'
              rel='noopener noreferrer'
            >
              <StyledButton type='button' borderRadius='3px'>
                {item?.demo ? '사이트 바로가기' : 'Github 바로가기'}
              </StyledButton>
            </Link>
          </ButtonWrap>

          {/* 첫번째 이미지 */}
          <ImageWrap className='mt-4'>
            <Image src={item?.images[0]} alt='project-img' />
          </ImageWrap>

          {/* 소제목1 */}
          <FormattedText type='sub-title mt-2' message={item?.subTitle[0]} />

          {/* 내용 2 */}
          <FormattedText
            type='text'
            message={item?.description2}
            fontSize='15px'
          />

          {/* 두번째 이미지 */}
          <ImageWrap className='mt-4'>
            <Image src={item?.images[1]} alt='project-img' />
          </ImageWrap>

          {/* 세번째 이미지 */}
          <ImageWrap>
            <Image src={item?.images[2]} alt='project-img' />
          </ImageWrap>

          {/* 소제목2 */}
          <FormattedText type='sub-title mt-2' message={item?.subTitle[1]} />

          {/* 내용 3 */}
          <FormattedText
            type='text'
            message={item?.description3}
            fontSize='15px'
          />
        </InnerWrap>
      </Wrapper>
    </Container>
  );
};

export default Project;
