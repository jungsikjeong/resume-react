import { TfiBackLeft } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormattedText from '../../../components/common/formatted-text';

import StyledButton from '../../../components/common/styled-button';
import FlexBox from '../../../components/flex-box/flex-box';
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

const Container = styled.div`
  position: relative;
`;

const Period = styled.div`
  font-size: 15px;
  color: ${({ theme }) => theme.colorDarkGray};
`;

const Button = styled(StyledButton)`
  background-color: ${({ theme }) => theme.colorRed};
  color: ${({ theme }) => theme.colors.white};
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.colorRed};
    opacity: 0.9;
  }
`;

interface IProjectProps {
  visible: boolean;
}

const Project2400 = ({ visible }: IProjectProps) => {
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
        <Thumbnail url='/images/thumbnail/Vue-book.gif' />
      </ThumbnailWrapper>

      <Wrapper>
        <InnerWrap>
          <FlexBox alignItems='center' gap='10px' wrap='wrap'>
            <FormattedText
              type='sub-title'
              message={'뷰 북'}
              fontSize='1.6rem'
            />
            <Period>2024.01.03 ~ 2024.02.06</Period>
          </FlexBox>

          <FormattedText
            type='text'
            message={`
              최근에 Vue3를 학습한 내용을 바탕으로 복습을 겸해 Vue Book이라는 웹 애플리케이션을 개발했습니다.
              Vue3의 최신 기능과 모던 웹 개발 기법을 적극 활용하여 간단한 SNS 기능을 구현했으며,
              이를 통해 다양한 기술 스택을 실제 프로젝트에 적용할 수 있는 기회를 가졌습니다.
              `}
            fontSize='15px'
          />

          <FlexBox gap='10px'>
            <ButtonWrap>
              <Link
                to={'https://github.com/jungsikjeong/vue-book'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <StyledButton type='button' borderRadius='3px'>
                  Github 바로가기
                </StyledButton>
              </Link>
            </ButtonWrap>
            <ButtonWrap>
              <Link
                to={'https://vue-book.vercel.app/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button type='button' borderRadius='3px'>
                  Demo 바로가기
                </Button>
              </Link>
            </ButtonWrap>
          </FlexBox>

          <FormattedText
            type='sub-title mt-6'
            message={'💡 주요 기능 및 역할'}
          />

          <ImageWrap className='mt-1'>
            <Image src={'/images/thumbnail/Vue-book.gif'} alt='project-img' />
          </ImageWrap>

          <FormattedText type='sub-title mt-2' message={'CRUD 기능 개발'} />

          <FormattedText
            type='text'
            message={`기본적인 Create, Read, Update, Delete 기능을 구현해 사용자가 게시글을 작성하고, 수정하며 삭제할 수 있는 시스템을 개발했습니다.`}
            fontSize='15px'
          />

          <FormattedText
            type='sub-title mt-2'
            message={'유저 팔로우/팔로잉 기능 개발'}
          />

          <FormattedText
            type='text'
            message={`사용자 간 팔로우 및 팔로잉 관계를 형성할 수 있는 소셜 기능을 추가했습니다.`}
            fontSize='15px'
          />

          <FormattedText type='sub-title mt-2' message={'게시글 좋아요 기능'} />

          <FormattedText
            type='text'
            message={`사용자들이 게시글에 대해 '좋아요'를 표시할 수 있도록 기능을 구현했습니다.`}
            fontSize='15px'
          />

          <FormattedText type='sub-title mt-2' message={'이미지 편집 기능'} />

          <FormattedText
            type='text'
            message={`vue-advanced-cropper 라이브러리를 활용해 이미지 확대, 축소 및 자르기 기능을 구현했습니다.`}
            fontSize='15px'
          />

          <FormattedText type='sub-title mt-2' message={'페이지네이션 구현'} />

          <FormattedText
            type='text'
            message={`게시글을 한 번에 다 보여주지 않고, '더보기' 버튼을 클릭하여 페이지네이션을 적용했습니다.`}
            fontSize='15px'
          />

          <FormattedText type='sub-title mt-2' message={'무한 스크롤 구현'} />

          <FormattedText
            type='text'
            message={`팔로우 중인 사용자의 게시글을 무한 스크롤 방식으로 불러오는 기능을 구현했습니다.`}
            fontSize='15px'
          />

          <FormattedText
            type='sub-title mt-2'
            message={'🚀 프로젝트에서 배운 점'}
          />

          <FormattedText
            type='text'
            message={`JavaScript 배열 메소드의 중요성: 
                이번 프로젝트에서는 배열을 자주 다루며, 배열을 합치고 분리하는 작업이 빈번했습니다.
                이 과정을 통해 splice와 slice 등 배열 메소드에 대해 심도 있게 이해하고, 기초의 중요성을 다시 한 번 실감했습니다.

              사용자 피드백의 중요성: 
                비록 많은 사용자로부터 피드백을 받지는 못했지만, 실제 사용자 테스트 과정에서 발생한 이슈들을 해결하며 사용자 중심의 개발이 얼마나 중요한지 깨달았습니다.
                피드백을 분석하고 개선하는 과정을 통해 서비스의 완성도를 높이는 방법을 익혔습니다.

              사용자 요구사항 반영:
                적은 피드백이었지만, 이를 반영하며 프로젝트를 개선해 나가는 것이 중요함을 깨달았습니다. 
              사용자 중심의 사고방식을 기반으로 프로젝트를 발전시켜 나갔습니다.
`}
            fontSize='15px'
          />
        </InnerWrap>
      </Wrapper>
    </Container>
  );
};

export default Project2400;
