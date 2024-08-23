import { styled } from 'styled-components';
import StyledButton from '../../components/common/styled-button';
import blog from '../../assets/json/blog.json';

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
  /* padding-inline: 16px; */
  overflow: hidden;
`;

const Image = styled.img`
  &:hover {
    transform: scale(1.1);
  }
  border-radius: 16px;
  transition: all 0.2s linear;
  width: 100%;
  height: 100%;
  aspect-ratio: 500 / 300;
  /* object-fit: contain; */
  /* object-fit: cover; */
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
        {blog?.map((item) => (
          <Item>
            <a href={item?.link} target='_blank' rel='noopener noreferrer'>
              <Image src={item?.src} alt='blog-img' />
            </a>
          </Item>
        ))}
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
