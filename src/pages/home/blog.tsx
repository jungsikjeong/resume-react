import { styled } from 'styled-components';
import StyledButton from '../../components/common/styled-button';

const Container = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10rem;
  text-align: center;
  padding: 1rem;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 762px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled.li`
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 14px 24px rgba(0, 0, 0, 0.06);
  width: 100%;
  height: 100%;
  padding-inline: 16px;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.1);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: auto 500 / 180;
  object-fit: contain;
  padding: 32px;
`;

const BtnWrap = styled.div`
  padding-top: 2rem;

  max-width: 350px;
  margin: 0 auto;
`;

const Blog = () => {
  return (
    <Container>
      <h1>블로그 살펴보기</h1>

      <List>
        <Item>
          <a href='/'>
            <Image
              src='https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/brands/fanta/artwork-images/10-23-23/logo_07_Fanta.png/width1960.png'
              alt=''
            />
          </a>
        </Item>
        <Item>
          <Image
            src='https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/brands/coca-cola-brand/kr_coca_cola_logo_500x180.png/width1960.png'
            alt=''
          />
        </Item>
        <Item>
          <Image
            src='https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/brands/coca-cola-brand/kr_coca_cola_logo_500x180.png/width1960.png'
            alt=''
          />
        </Item>
        <Item>
          <Image
            src='https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/brands/coca-cola-brand/kr_coca_cola_logo_500x180.png/width1960.png'
            alt=''
          />
        </Item>
        <Item>
          <Image
            src='https://www.coca-cola.com/content/dam/onexp/kr/ko/brands/dr-pepper/10-24-23/logo_06_Dr.pepper.png/width1960.png'
            alt=''
          />
        </Item>
        <Item>
          <Image
            src='https://www.coca-cola.com/content/dam/onexp/kr/ko/home-images/brands/coca-cola-brand/kr_coca_cola_logo_500x180.png/width1960.png'
            alt=''
          />
        </Item>
      </List>

      <BtnWrap>
        <a
          href='https://wjdwndtlr10241024.tistory.com/'
          target={'_blank'}
          rel='noreferrer'
        >
          <StyledButton>더 보기</StyledButton>
        </a>
      </BtnWrap>
    </Container>
  );
};

export default Blog;
