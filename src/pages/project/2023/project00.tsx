import { TfiBackLeft } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormattedText from '../../../components/common/formatted-text';
import {
  ButtonWrap,
  Image,
  ImageWrap,
  InnerWrap,
  PreviousPageBtn,
  SLink,
  Thumbnail,
  ThumbnailWrapper,
  Wrapper,
} from '../project.styled';
import FlexBox from '../../../components/flex-box/flex-box';
import StyledButton from '../../../components/common/styled-button';

const Container = styled.div`
  position: relative;
`;

interface IProjectProps {
  visible: boolean;
}

const Project00 = ({ visible }: IProjectProps) => {
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

      <ThumbnailWrapper>
        <Thumbnail url='/images/thumbnail/NewJeans_card-web.gif' />
      </ThumbnailWrapper>

      <Wrapper>
        <InnerWrap>
          <FormattedText
            type='sub-title'
            message={'뉴진스 포토 카드 v1'}
            fontSize='1.6rem'
          />

          <FormattedText
            type='text'
            message={
              '자바스크립트를 기반으로 한 웹 애플리케이션을 개발하였습니다.\n이 프로젝트의 목표는 리액트, 앵귤러, 뷰를 사용하지 않고\n자바스크립트만을 사용하여 사용자가 간단한 게시물을 작성하고\n관리할 수 있는 웹 서비스를 만드는 것이었습니다.'
            }
            fontSize='15px'
          />

          <ButtonWrap>
            <Link
              to={
                'https://github.com/jungsikjeong/exercise-book/tree/master/web02'
              }
              target='_blank'
              rel='noopener noreferrer'
            >
              <StyledButton type='button' borderRadius='3px'>
                Github 바로가기
              </StyledButton>
            </Link>
          </ButtonWrap>

          <ImageWrap className='mt-4'>
            <Image
              src={'/images/projects/newjeans-v1-01.png'}
              alt='project-img'
            />
          </ImageWrap>

          <FormattedText
            type='sub-title mt-2'
            message={'DOM 조작 능력 강화와 데이터 흐름 최적화'}
          />

          <FormattedText
            type='text'
            message={
              '이 프로젝트는 자바스크립트 환경에서 DOM을 효과적으로 조작하는 능력을 발전시키는 데 중점을 두었고\n클라이언트와 서버 간의 원활한 데이터 흐름 및 원하는 기능을 구현하였습니다.'
            }
            fontSize='15px'
          />

          <ImageWrap className='mt-4'>
            <Image
              src={'/images/projects/newjeans-v1-02.png'}
              alt='project-img'
            />
          </ImageWrap>

          <ImageWrap>
            <Image
              src={'/images/projects/newjeans-v1-03.png'}
              alt='project-img'
            />
          </ImageWrap>

          <FormattedText
            type='sub-title mt-2'
            message={'프로젝트 기술 스택 개요'}
          />

          <FormattedText
            type='text'
            message={
              '주요 기술 스택으로는 Node.js와 Express를 백엔드로 사용하였고\n MongoDB와 Mongoose를 데이터베이스 관리와 스키마 정의에 사용했습니다.\n\n프론트엔드는 EJS 템플릿 엔진을 통해 서버에서 렌더링된 HTML을 동적으로 생성하였고\n 이미지 업로드 기능은 Multer 라이브러리를 활용했습니다.\n클라이언트-서버 간 요청 처리는 모두 JavaScript로 통합하여 구현하였습니다.'
            }
            fontSize='15px'
          />
        </InnerWrap>
      </Wrapper>
    </Container>
  );
};

export default Project00;
