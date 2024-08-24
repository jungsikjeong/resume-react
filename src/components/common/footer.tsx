import { styled } from 'styled-components';
import { PiGithubLogoBold } from 'react-icons/pi';
import { SiBloglovin } from 'react-icons/si';
import { MdOutlineEmail } from 'react-icons/md';

const Container = styled.footer`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  margin-top: 5rem;
  position: relative;
`;

const Wrapper = styled.div`
  padding: 3rem;
  background-color: #222;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  color: #8f8f8f;
  text-align: center;
  @media (max-width: 767px) {
    padding: 3rem 0;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
  }
`;

const SocialWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  position: relative;
  margin-top: 20px;
  padding: 60px 0 37px;
  border-top: 1px solid #383838;
  border-top-color: rgba(255, 255, 255, 0.1);
`;

const SLink = styled.a`
  display: flex;
  align-items: center;
  position: relative;
  color: #8f8f8f;
  text-decoration: none;
  padding: 0;
  border-bottom: 0px;
  transition: all 0.2s linear;
  font-size: 30px;
  &:hover {
    color: #fff;
  }

  @media (max-width: 1024px) {
    font-size: 23px;
  }
`;

const License = styled.span`
  @media (max-width: 767px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <SocialWrap>
          <SLink
            href='https://github.com/jungsikjeong/'
            target='_blank'
            rel='noreferrer'
          >
            <PiGithubLogoBold />
          </SLink>

          <SLink
            href='https://wjdwndtlr10241024.tistory.com/'
            target='_blank'
            rel='noreferrer'
          >
            <SiBloglovin />
          </SLink>

          <SLink href='mailto:wndtlr1024@gmail.com' className='email-icon'>
            <MdOutlineEmail />
          </SLink>
        </SocialWrap>

        <License>
          COPYRIGHT {new Date().getFullYear()} 정중식. ALL RIGHTS RESERVED.
        </License>
      </Wrapper>
    </Container>
  );
};

export default Footer;
