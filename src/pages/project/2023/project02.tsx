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
        <Thumbnail url='/images/thumbnail/NewJeans-Gallery.gif' />
      </ThumbnailWrapper>

      <Wrapper>
        <InnerWrap>
          <FlexBox alignItems='center' gap='10px' wrap='wrap'>
            <FormattedText
              type='sub-title'
              message={'뉴진스 갤러리아'}
              fontSize='1.6rem'
            />
            <Period>2023.03.24 ~ 2023.04.27</Period>
          </FlexBox>

          <FormattedText
            type='text'
            message={
              '뉴진스 갤러리아는 개발자 블로그에서 영감을 받아 제작한 프로젝트입니다.\n\n기존의 디자인과 기능을 참고하면서 TypeScript와 React-recoil같은 최신 기술들을 직접 적용해보며\n학습한 프로젝트입니다. \n\n특히 전역 상태 관리가 필요한 부분을 간단하고 효율적으로 처리하기 위해 React-recoil을 사용했습니다.'
            }
            fontSize='15px'
          />

          <FlexBox gap='10px'>
            <ButtonWrap>
              <Link
                to={'https://new-jeans-gallery.vercel.app/'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Button type='button' borderRadius='3px'>
                  Demo 바로가기
                </Button>
              </Link>
            </ButtonWrap>

            <ButtonWrap>
              <Link
                to={'https://github.com/jungsikjeong/newJeansGallery'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <StyledButton type='button' borderRadius='3px'>
                  Github 바로가기
                </StyledButton>
              </Link>
            </ButtonWrap>
          </FlexBox>

          <FormattedText type='sub-title mt-6' message={'주요 기능 및 기여'} />

          <ImageWrap className='mt-1'>
            <Image
              src={'/images/projects/NewJeans-Gallery1.gif'}
              alt='project-img'
            />
          </ImageWrap>

          <FormattedText
            type='text'
            message={
              'react-awesome-reveal 라이브러리를 사용해 애니메이션 효과를 추가하여 UX를 개선했습니다.\n시맨틱한 HTML 태그를 적극 활용하여 SEO와 접근성을 개선했습니다.'
            }
            fontSize='15px'
          />

          <ImageWrap className='mt-4'>
            <Image
              src={'/images/projects/NewJeans-Gallery2.gif'}
              alt='project-img'
            />
          </ImageWrap>

          <FormattedText
            type='text mt-1'
            message={'로컬 스토리지를 활용한 게시글 작성 기능을 구현했습니다.'}
            fontSize='15px'
          />

          <FormattedText type='sub-title mt-4' message={'끝으로..'} />

          <FormattedText
            type='text'
            message={`리액트에서 propTypes로 타입을 체크하는것과 TypeScript로 타입을 체크하는것을 비교해보며\n 타입스크립트로 타입 적용을할 때의 유연함과 안정성을 직접 체감할 수 있었습니다.\n
              타입스크립트의 자동완성 및 타입 추론 기능을 통해 코드 작성 시 데이터 타입을 명확하게 인식할 수 있었으며, 이는 코드의 안정성과 가독성을 크게 향상시켰습니다.\n특히 .map()과 같은 메서드 사용 시 해당 데이터의 타입을 즉시 확인하고, 올바른 메서드와 속성을 제안받는 등 편리함에 만족도가 상당히 높았습니다.
              \n또한, 스프라이트 이미지를 활용해 스크롤할 때마다 고양이가 움직이는 재미있는 효과를 구현하면서\n 이미지 최적화와 활용법에 대해 더 깊이 이해하게 되었습니다.`}
            fontSize='15px'
          />
        </InnerWrap>
      </Wrapper>
    </Container>
  );
};

export default Project02;
