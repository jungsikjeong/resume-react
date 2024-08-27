import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { styled } from 'styled-components';
import CustomIcons from '../assets/svgIcon/icons';
import FlexBox from './flex-box/flex-box';
import StyledButton from './common/styled-button';

const Container = styled.div`
  max-width: 550px;
  width: 100%;
  padding: 1rem;
`;

const IconWrap = styled(motion.div)`
  width: 30px;
  text-align: center;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  background-color: white;
  border: 1px solid #eee;
  height: 30px;
  padding: 10px;
  border-radius: 12px;
`;
const Textarea = styled.textarea`
  width: 100%;
  background-color: white;
  border: 1px solid #eee;
  resize: none;
  padding: 10px;
  border-radius: 12px;
`;

const BtnWrap = styled.div`
  margin-left: auto;
  max-width: 150px;
  width: 100%;
`;

const Button = styled(StyledButton)``;

const ErrorMessage = styled.div`
  font-size: 15px;
`;

const EamilForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleContact = (event: any) => {
    event.preventDefault();
    setLoading(true);

    const scriptURL = process.env.REACT_APP_GOOGLE_EMAIL_URL;

    const form = document.getElementById(
      'submit-to-google-sheet'
    ) as HTMLFormElement;

    fetch(scriptURL as string, { method: 'POST', body: new FormData(form) })
      .then((response) => {
        form.reset(); // 보내는 값이 성공값이면, form data reset
        setLoading(false);
        setError(false);
        toast('이메일 전송이 완료되었습니다!');
      })
      .catch((error) => {
        console.error('Error!', error.message);
        setError(true);
        setLoading(false);
      });
  };

  if (error) {
    return (
      <ErrorMessage>
        잠깐 문제가 생겼어요! 메일이 발송되지 않았습니다.
        <br /> 계속 실패하면 아래 이메일 주소로 직접 연락부탁드립니다!
        <br />
        <br />
        <strong>wndtlr1024@gmail.com</strong>
      </ErrorMessage>
    );
  }

  return (
    <Container>
      <h1>Contact me</h1>
      {loading ? (
        <FlexBox>
          이메일 전송중..
          <IconWrap
            animate={{ scale: [1, 1, 1.4, 1.2, 1.4, 1, 1] }}
            transition={{
              duration: 2,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            <CustomIcons.HeartIcon />
          </IconWrap>
        </FlexBox>
      ) : (
        <Form
          id='submit-to-google-sheet'
          onSubmit={handleContact}
          autoComplete='off'
        >
          <Input name='name' placeholder='보내시는분 성함' required />
          <Input
            name='email'
            placeholder='연락 받으실 이메일을 입력해주세요'
            required
          />
          <Textarea name='message' placeholder='message' required />

          <BtnWrap>
            <Button type='submit'>SUBMIT</Button>
          </BtnWrap>
        </Form>
      )}
    </Container>
  );
};

export default EamilForm;
