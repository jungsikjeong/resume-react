import { TfiBackLeft } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FormattedText from '../../../components/common/formatted-text';

import ProjectDetailCarousel from '../../../components/carousel/project-detail-carousel';
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

const Project2401 = ({ visible }: IProjectProps) => {
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
        <Thumbnail url='/images/projects/gongcha-preview.gif' />
      </ThumbnailWrapper>

      <Wrapper>
        <InnerWrap>
          <FlexBox alignItems='center' gap='10px' wrap='wrap'>
            <FormattedText
              type='sub-title'
              message={'오늘도 공차하세요!'}
              fontSize='1.6rem'
            />
            <Period>2024.03.11 ~ 2024.05.05</Period>
          </FlexBox>
          <FormattedText
            type='text'
            message={`
              모두가 1일 1공차를 했으면 하는 바램으로 만들었던 프로젝트입니다.
              오늘 먹은 공차 음료를 사진 찍어서 모두에게 자랑하는 웹 서비스입니다.

              이 프로젝트는 2020년도에 만들었던 프로젝트를 마이그레이션한 프로젝트입니다.
              `}
            fontSize='15px'
          />
          <FlexBox gap='10px'>
            <ButtonWrap>
              <Link
                to={'https://github.com/jungsikjeong/React_Gongcha-migration'}
                target='_blank'
                rel='noopener noreferrer'
              >
                <StyledButton type='button' borderRadius='3px'>
                  Github 바로가기
                </StyledButton>
              </Link>
            </ButtonWrap>
          </FlexBox>
          <FormattedText type='sub-title mt-6' message={`로그인 회원가입`} />
          <ImageWrap className='mt-1'>
            <Image
              src={'/images/projects/gongcha-로그인회원가입.gif'}
              alt='project-img'
            />
          </ImageWrap>
          <FormattedText
            type='text'
            message={`react-hook-form을 도입하고 유효성 검사를 모듈화하여 코드를 간결화시켰습니다.
              또한, 글래스모피즘 기법을 사용하여 시각적으로도 깔끔하면서 감각적인 모달 창을 구현하였습니다.`}
            fontSize='15px'
          />
          <FormattedText type='sub-title mt-6' message={`게시글 리스트`} />
          <ImageWrap className='mt-1'>
            <Image
              src={'/images/projects/공차-게시글리스트.png'}
              alt='project-img'
            />
          </ImageWrap>
          <FormattedText
            type='text'
            message={`게시글 리스트 페이지는 기본적으로 핀터레스트 UI를 모티브로 삼고 작업을 해줬습니다.
              서버에서 리스트를 받아와, 다시 화면에 뿌리기전에 동적으로 css 크기를 조정하여,
              새로고침을 할 때마다 사이즈가 바뀝니다.

              또한 인피니티 스크롤을 적용해줬습니다.`}
            fontSize='15px'
          />
          <FormattedText type='sub-title mt-6' message={`게시글 상세 페이지`} />
          <ImageWrap className='mt-1'>
            <Image
              src={'/images/projects/공차-게시글상세페이지.gif'}
              alt='project-img'
            />
          </ImageWrap>
          <FormattedText
            type='text'
            message={`인스타그램의 상세 페이지UI를 모티브로 삼고 작업을 해줬습니다.
              pc화면과 모바일 화면에 맞는 반응형으로 구현하였습니다.`}
            fontSize='15px'
          />
          <FormattedText type='sub-title mt-6' message={`댓글 리스트`} />
          <ProjectDetailCarousel
            images={[
              '/images/projects/공차-댓글상세페이지-피씨.gif',
              '/images/projects/공차-댓글상세페이지-모바일.gif',
            ]}
          />
          <FormattedText
            type='text'
            message={`댓글 리스트 페이지에서 신경썻던건 로딩 지연처리입니다.
              로딩이 너무 빨리되어 깜빡이는 현상이 사용자 경험에 악영향을 끼칠거라 생각하였습니다.

              setTimeout(() => {
                 resolve(res.data);
              }, 500);
              을 사용하여 응답결과를 0.5초 지연시켜 충분히 로딩효과를 보여준뒤 응답 결과를 보여주게끔 해줬습니다.

              이 외에도 댓글 리스트의 더보기 버튼을 누르면 페이지네이션으로 댓글 리스트가 더 나오는 기능과
              대댓글 기능, 좋아요 기능을 구현해줬습니다.
               `}
            fontSize='15px'
          />

          <FormattedText type='sub-title mt-6' message={`마이 페이지`} />

          <ImageWrap className='mt-1'>
            <Image
              src={'/images/projects/공차-마이페이지.gif'}
              alt='project-img'
            />
          </ImageWrap>

          <FormattedText
            type='text'
            message={`다음과 같은 기능을 구현했습니다.
              - 내가 작성한 게시글 리스트 확인 기능
              - 북마크 리스트 확인 기능 (내가 저장한 게시글)
              - 인피니티 스크롤 기능
              - 프로필 수정 페이지로 이동
                - 아바타 이미지, 자기소개, 비밀번호 변경 기능
              `}
            fontSize='15px'
          />

          <FormattedText
            type='sub-title mt-6'
            message={`프로젝트 배포 및 개발 회고`}
          />

          <FormattedText
            type='text'
            message={`프론트엔드 배포는 Vercel, 백엔드 배포는 CloudType을 통해 진행했습니다.
              무료 서비스를 활용하다 보니, 백엔드 서버는 일정 주기마다 재활성화해야 하는 번거로움이 있었습니다.
              이로 인해 실제 운영 환경에서는 안정적인 서비스를 유지하기 위해 추가적인 배포 환경의 고려가 필요하다는 점을 절실히 느꼈습니다.

              이러한 과정을 통해 비용 효율성과 서비스 안정성 사이에서 균형을 맞추는 것이 중요하다는 것을 깨달았으며,
              다음 프로젝트에서는 더 나은 확장성과 유지보수성을 갖춘 인프라 선택을 염두에 두고 있습니다.
              
              앞으로는 유료 서비스 도입이나 CI/CD 파이프라인 자동화 등을 활용해 서버의 지속적인 운영과 관리를 더욱 수월하게 만들어 볼 계획이고,
보다 안정적이고 신뢰성 있는 배포 환경을 구축할 수 있도록 지속적으로 배워 나갈 예정입니다.
`}
            fontSize='15px'
          />
        </InnerWrap>
      </Wrapper>
    </Container>
  );
};

export default Project2401;
