import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colorBg};
  z-index: 9999;
`;

const LoadingEl = styled.div`
  margin: 0 auto;
  position: relative;
  width: 135px;
  height: 135px;
  border-radius: 50%;
  background: url('/loading.gif') no-repeat center center;
`;

const Loading = () => {
  return (
    <Container>
      <LoadingEl />
    </Container>
  );
};

export default Loading;
