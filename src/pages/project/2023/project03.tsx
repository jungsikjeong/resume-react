import { TfiBackLeft } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormattedText from '../../../components/common/formatted-text';

import ProjectDetailCarousel from '../../../components/carousel/project-detail-carousel';
import StyledButton from '../../../components/common/styled-button';
import FlexBox from '../../../components/flex-box/flex-box';
import {
  ButtonWrap,
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

const Project03 = ({ visible }: IProjectProps) => {
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
        <Thumbnail url='/images/projects/Do-Good_Evening-ui.gif' />
      </ThumbnailWrapper>

      <Wrapper>
        <InnerWrap>
          <FlexBox alignItems='center' gap='10px' wrap='wrap'>
            <FormattedText
              type='sub-title'
              message={'두 굿 이브닝'}
              fontSize='1.6rem'
            />
            <Period>2023.09.19 ~ 2023.10.04</Period>
          </FlexBox>

          <FormattedText
            type='text'
            message={`
                "두 굿 이브닝"은 사용자들이 저녁의 풍경을 촬영하고
                이를 다른 사람들과 공유하는 소셜 미디어 기반의 웹 서비스입니다.

                하루를 마무리하는 순간을 기록하고, 사람들과 소통할 수 있는 플랫폼을 목표로 했습니다.
              `}
            fontSize='15px'
          />

          <FlexBox gap='10px'>
            <ButtonWrap>
              <Link
                to={'https://do-good-evening.vercel.app/'}
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
                to={'https://github.com/jungsikjeong/do-good-evening'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <StyledButton type='button' borderRadius='3px'>
                  Github 바로가기
                </StyledButton>
              </Link>
            </ButtonWrap>
          </FlexBox>

          <FormattedText type='sub-title mt-6' message={'개발 과정'} />

          <ProjectDetailCarousel
            images={[
              '/images/projects/Do-Good_Evening-auth.gif',
              '/images/projects/Do-Good_Evening-write.gif',
              '/images/projects/Do-Good_Evening-list.gif',
              '/images/projects/Do-Good_Evening-ranking.gif',
            ]}
          />

          <FormattedText
            type='text'
            message={`Next.js 13와 Firebase를 활용해 유저 회원가입 및 로그인, 게시글 CRUD, 좋아요 기능, 사용자 랭킹 시스템 등 다양한 기능을 구현하며 실질적인 웹 개발 경험을 쌓았습니다.`}
            fontSize='15px'
          />

          <br />
          <br />

          <ProjectDetailCarousel
            images={[
              '/images/projects/dogoodevening-git.png',
              '/images/projects/dogoodevening-git2.png',
            ]}
          />

          <FormattedText
            type='text'
            message={`또한, git을 잘 다루는것을 목표로한 프로젝트인 만큼 GitHub Issues를 통해 프로젝트 관리를 체계화하여 진행했습니다.
              
              깃허브 아이디를 하나 더 생성하여 총 두개의 아이디로 서로 브랜치를 나누어 작업하는 등의 방식으로 협업과 이슈 추적의 기초를 다지는 데 주력했던 프로젝트입니다.
              `}
            fontSize='15px'
          />
        </InnerWrap>
      </Wrapper>
    </Container>
  );
};

export default Project03;
