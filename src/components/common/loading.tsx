import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background-color: ${({ theme }) => theme.colorBg}; */
`;

const Loading = () => {
  return <Container>Loading...</Container>;
};

export default Loading;
