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

const Project02 = ({ visible }: IProjectProps) => {
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
        <Thumbnail url='/images/thumbnail/NewJeans!.png' />
      </ThumbnailWrapper>

      <Wrapper>
        <InnerWrap>
          <FormattedText
            type='sub-title'
            message={'뉴진스 포토 카드 v2'}
            fontSize='1.6rem'
          />

          <FormattedText
            type='text'
            message={
              '뉴진스 포토 카드를 사용자가 직접 커스텀하고 공유할 수 있는 웹 서비스입니다.\n유저는 자신만의 포토 카드를 커스텀하고, 다른 유저들과 소통할 수 있는 게시판을 통해 업로드, 수정, 삭제를 할 수 있습니다.'
            }
            fontSize='15px'
          />

          <ButtonWrap>
            <Link
              to={'https://github.com/jungsikjeong/newJeans'}
              target='_blank'
              rel='noopener noreferrer'
            >
              <StyledButton type='button' borderRadius='3px'>
                Github 바로가기
              </StyledButton>
            </Link>
          </ButtonWrap>

          <ImageWrap className='mt-4'>
            <Image src={'/images/projects/NewJeans!1.gif'} alt='project-img' />
          </ImageWrap>

          <FormattedText
            type='sub-title mt-2'
            message={'회원가입 및 로그인 기능 (JWT 활용)'}
          />

          <FormattedText
            type='text'
            message={
              '회원가입 시, 사용자는 이메일과 비밀번호를 입력하고,\n bcrypt를 통해 비밀번호를 암호화하여 안전하게 저장합니다.\n\n로그인 시, 입력한 비밀번호를 데이터베이스의 해시된 비밀번호와 대조 후, JWT 토큰을 발급하여 서버 측 세션 없이 인증을 처리해줬습니다.\n\n JWT 토큰 인증을 통해 로그인 상태를 유지하며, 클라이언트는 요청 시마다 토큰을 헤더에 포함해 유저 신원을 확인합니다.\n 토큰에는 유효 기간이 설정되어 만료 시 재로그인이 필요하며, 이를 통해 보안성을 높였습니다.'
            }
            fontSize='15px'
          />

          <ImageWrap className='mt-6'>
            <Image src={'/images/projects/NewJeans!2.gif'} alt='project-img' />
          </ImageWrap>

          <FormattedText
            type='sub-title mt-2'
            message={
              '이미지 커스터마이징 기능 개발 (use-image 라이브러리 활용)'
            }
          />

          <FormattedText
            type='text'
            message={
              'use-image 라이브러리를 사용하여 이미지를 자유롭게 커스터마이징할 수 있는 기능을 개발했습니다.\n이를 통해 사용자들이 자신만의 개성 있는 포토 카드를 손쉽게 제작할 수 있었습니다.'
            }
            fontSize='15px'
          />

          <ImageWrap className='mt-6'>
            <Image src={'/images/projects/NewJeans!3.gif'} alt='project-img' />
          </ImageWrap>

          <FormattedText
            type='sub-title mt-2'
            message={'게시글 작성/ 수정/ 삭제/ 검색 기능'}
          />

          <FormattedText
            type='text'
            message={
              '유저가 포토 카드를 업로드하고 게시글을 관리할 수 있도록 했습니다.\n 이 밖에도 게시글 무한 스크롤 페이지네이션 기능과 \n사용자가 자신의 프로필을 수정 할 수 있는 기능을 구현했습니다.'
            }
            fontSize='15px'
          />
        </InnerWrap>
      </Wrapper>
    </Container>
  );
};

export default Project02;
