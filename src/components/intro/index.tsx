import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.h1`
  margin-top: 80px;
`;

const Author = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 768px) {
    gap: 65px;
  }
`;

const SubTitle = styled.h3`
  font-weight: 500;

  .point {
    color: #0b6e99;
  }
`;

const Box = styled.div``;

const ContentWrapper = styled.div`
  padding-top: 20px;

  p {
    padding: 5px 0;
  }
`;

const ImageWrap = styled.div`
  width: 240px;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 30px;
    object-fit: cover;
  }
`;

const Intro = () => {
  return (
    <Container>
      <Header>@JungSik Jeong</Header>
      <Author>
        <Box>
          <SubTitle>안녕하세요 -</SubTitle>
          <SubTitle>
            <span className='point'>Front-end 개발자</span> 정중식 입니다 :)
          </SubTitle>

          <ContentWrapper>
            <p>📞 010-2272-0693</p>
            <p>📩 wndtlr1024@gmail.com</p>
            <p>
              😸
              <a
                href='https://github.com/jungsikjeong'
                target='_blank'
                rel='noreferrer'
              >
                {' '}
                Github
              </a>
            </p>
          </ContentWrapper>
        </Box>

        <ImageWrap>
          <img src='./images/me.jpg' alt='' />
        </ImageWrap>
      </Author>
    </Container>
  );
};

export default Intro;
