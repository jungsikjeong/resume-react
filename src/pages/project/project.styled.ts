import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PreviousPageBtn = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 5rem;
  right: 0.9em;
  z-index: 300;
  font-size: 13px;
  opacity: ${({ $visible }) => ($visible ? '0' : '1')};
  transition: opacity 0.2s ease;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const SLink = styled(Link)`
  color: ${({ theme }) => theme.colorMainFont};
  font-weight: 600;
  padding-bottom: 0.2rem;
  border-bottom: 3px solid ${({ theme }) => theme.colorSkyBlue};
  display: block;
`;

export const ThumbnailWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 961px;
`;

export const Thumbnail = styled.div<{ url: string }>`
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

export const Wrapper = styled.div`
  position: relative;
  margin-top: 961px;
  background-color: ${({ theme }) => theme.colorBg};
`;

export const InnerWrap = styled.div`
  max-width: 700px;
  padding: 120px 0;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 767px) {
    padding: 100px 1rem;
  }

  @media (max-width: 486px) {
    padding: 50px 1rem;
  }
`;

export const ImageWrap = styled.div``;

export const Image = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: auto 1/1;
`;

export const ButtonWrap = styled.div`
  margin-top: 2rem;
  width: 241px;
`;
