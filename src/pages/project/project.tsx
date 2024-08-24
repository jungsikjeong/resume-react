import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 1000vh;
`;

const ProjectMainWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 900px;
`;

const ProjectMainImg = styled.div<{ url: string }>`
  background-image: ${({ url }) => `url(${url})`};
  background-color: #111111;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 961px;
  background-color: ${({ theme }) => theme.colorBg};
`;

const Innter = styled.div`
  padding: 120px 0;
  height: 1000vh;
  background-color: red;
`;

const Project = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [{ item }, setItem] = useState({ ...location.state });

  console.log(item.thumbnail);
  return (
    <Container>
      <ProjectMainWrap>
        <ProjectMainImg url={item.thumbnail} />
      </ProjectMainWrap>

      <Wrapper>
        <Innter> dd</Innter>
      </Wrapper>
    </Container>
  );
};

export default Project;
