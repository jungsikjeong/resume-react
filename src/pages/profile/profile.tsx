import { useState } from 'react';
import { styled } from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import EamilForm from '../../components/email-form';
import { useRecoilValue } from 'recoil';
import { themeState } from '../../atoms/theme';
import StyledButton from '../../components/common/styled-button';

const Container = styled.div``;

const TopWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  @media (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 50px;
    padding: 1rem;
  }
`;

const TextWrap = styled.div`
  h1 {
    margin-top: 0;
    margin-bottom: 20px;
    font-size: 60px;
    line-height: 1.75;
    font-weight: 300;
    @media (max-width: 767px) {
      font-size: 24px;
      line-height: 1.2;
    }
  }

  p {
    line-height: 2.15;
    font-weight: 600;
    @media (max-width: 767px) {
      font-weight: 400;
      line-height: 1.4;
    }

    @media (max-width: 480px) {
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -1.2px;
    }
  }
`;

const ImageWrap = styled.div`
  max-width: 500px;
  width: 100%;
  height: 350px;
  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }
`;

const BottomWrap = styled.div<{ $isdarkmode: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 10rem;
  width: 100%;
  height: 300px;
  background-image: ${({ $isdarkmode }) =>
    $isdarkmode ? `url('/images/profile/profile-img-bg.jpg')` : 'none'};

  span {
    font-weight: 600;
  }
`;

const BtnWrap = styled.div`
  width: 200px;
`;

const Button = styled(StyledButton)``;

const EmailMotionWrap = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Profile = () => {
  const theme = useRecoilValue(themeState);
  const [isContact, setIsContact] = useState(false);

  return (
    <Container>
      <TopWrap>
        <TextWrap>
          <h1>여기예요</h1>

          <p>
            낮에는 코드를 짜고, 밤에는 배움을 쌓으며
            <br />
            작은 성공이 쌓일 때마다 큰 기쁨을 느낍니다.
            <br />
            언제나 새로운 것을 배우고, 만들어내는 과정에서
            <br />
            반짝임이 멈추지 않는 이 공간에서
            <br />
            여러분의 아이디어가 현실이 되도록 함께 고민하고 싶습니다.
            <br />
            <strong>프론트엔드 개발자 신입. 정중식입니다.</strong>
          </p>
        </TextWrap>

        <ImageWrap>
          <Image src='/images/profile/profile-img.gif' alt='' />
        </ImageWrap>
      </TopWrap>

      <BottomWrap $isdarkmode={theme === 0}>
        {!isContact && (
          <>
            <span> wndtlr1024@gamil.com</span>

            <BtnWrap onClick={() => setIsContact(true)}>
              <Button>연락하기</Button>
            </BtnWrap>
          </>
        )}
        <AnimatePresence>
          {isContact && (
            <EmailMotionWrap
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <EamilForm />
            </EmailMotionWrap>
          )}
        </AnimatePresence>
      </BottomWrap>
    </Container>
  );
};

export default Profile;
