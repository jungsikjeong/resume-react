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

interface IProjectProps {
  visible: boolean;
}

const Project04 = ({ visible }: IProjectProps) => {
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
        <Thumbnail url='/images/thumbnail/read-a-perfume.png' />
      </ThumbnailWrapper>

      <Wrapper>
        <InnerWrap>
          <FlexBox alignItems='center' gap='10px' wrap='wrap'>
            <FormattedText
              type='sub-title'
              message={'리드 어 퍼퓸'}
              fontSize='1.6rem'
            />
            <Period>2023.09.19 ~ 2023.10.04</Period>
          </FlexBox>

          <FormattedText
            type='text'
            message={`
                "Read A Perfume"은 팀 프로젝트로 진행한 향수 플랫폼으로,
                사용자들이 향수에 대한 정보를 자유롭게 나누고 리뷰를 남길 수 있는 공간을 제공합니다.

                이 프로젝트는 "화장품 정보 어플리케이션 화해"에서 영감을 받아 제작되었으며, 
                저는 프론트엔드 개발을 담당했습니다.

                디자이너, 백엔드 개발자와 협업하며 프로젝트를 성공적으로 마무리하며 많은 성장을 이루었습니다.
              `}
            fontSize='15px'
          />

          <FlexBox gap='10px'>
            <ButtonWrap>
              <Link
                to={
                  'https://github.com/read-a-perfume/frontend?tab=readme-ov-file'
                }
                target='_blank'
                rel='noopener noreferrer'
              >
                <StyledButton type='button' borderRadius='3px'>
                  Github 바로가기
                </StyledButton>
              </Link>
            </ButtonWrap>
          </FlexBox>

          <FormattedText type='sub-title mt-6' message={'주요 역할 및 기여'} />

          <ImageWrap className='mt-1'>
            <Image
              src={'/images/projects/read-a-perfume.gif'}
              alt='project-img'
            />
          </ImageWrap>

          <FormattedText
            type='sub-title mt-2'
            message={'제품 리스트 페이지 개발'}
          />

          <FormattedText
            type='text'
            message={`카테고리별 제품을 서버에서 받아와 화면에 표시하고, 페이지네이션 기능을 구현하여 사용자 경험을 개선했습니다.
              React-Query를 활용한 효율적인 데이터 패칭 및 캐싱을 통해 성능 최적화를 달성했습니다.`}
            fontSize='15px'
          />

          <FormattedText
            type='sub-title mt-2'
            message={'제품 상세 페이지 개발'}
          />

          <FormattedText
            type='text'
            message={`제품의 주요 속성(무게감, 지속력 등)을 시각화하여 사용자가 쉽게 정보를 파악할 수 있는 통계 기능을 구현했습니다.
              관련 리뷰를 보기 쉽게 제공하는 UI를 설계하고 개발했습니다.`}
            fontSize='15px'
          />

          <FormattedText
            type='sub-title mt-2'
            message={'FlexBox 컴포넌트 리팩토링'}
          />

          <FormattedText
            type='text'
            message={`기존의 FlexBox 컴포넌트의 유지보수성과 재사용성을 높이기 위해, 외부 스타일시트를 활용한 컴포넌트 설계를 진행했습니다.
            
              styled-components를 적용하여 코드의 가독성과 효율성을 높였고, 재사용 가능한 테마 구조를 만들어 개발 생산성을 개선했습니다.
              
              해당 과정에서 Material-UI의 sx prop 사용 시 렌더링 성능 문제를 발견했고, 이를 해결하는 방식으로 styled-components를 제안하여 문제를 개선했습니다.
`}
            fontSize='15px'
          />

          <FormattedText type='sub-title mt-2' message={'코드 품질 관리'} />

          <FormattedText
            type='text'
            message={`팀 내 코드 컨벤션을 엄격히 준수하여 일관성 있는 코드 스타일을 유지했고, 코드 리뷰를 통해 팀원 간의 협업과 품질 관리에 기여했습니다.
            
              게더타운 등에서 실시간 코드 공유를하며 같이 작업을하였고, 문제 해결을 통해 slack,카카오톡,피그마 등의 도구를 통해 원활한 커뮤니케이션과 협업 능력을 향상시켰습니다.`}
            fontSize='15px'
          />

          <FormattedText
            type='sub-title mt-2'
            message={'프로젝트에서 얻은 경험'}
          />

          <FormattedText
            type='text'
            message={`체계적인 프로젝트 관리: 주간 회의와 발표 덕분에 일정 관리를 효율적으로 할 수 있었고, 체계적으로 프로젝트를 진행할 수 있었습니다.
            
              원활한 협업 경험: 디자이너와 백엔드 개발자와의 협업을 통해 다양한 의견을 조율하며 더 나은 결과물을 도출할 수 있었습니다.
              
              컴포넌트 재사용성 향상: 재사용 가능한 컴포넌트를 설계하고, 이를 통해 빠른 이슈 해결과 효율적인 개발을 경험하며, 유지보수성과 생산성의 중요성을 깊이 이해하게 되었습니다.
`}
            fontSize='15px'
          />
        </InnerWrap>
      </Wrapper>
    </Container>
  );
};

export default Project04;
