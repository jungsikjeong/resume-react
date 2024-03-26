import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CareerModalContentsType } from '../assets/type/career-modal-contents';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(10px);
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: yellow;
`;

const Wrapper = styled.div`
  position: relative;
  max-width: 600px;
  max-height: 600px;
  scrollbar-width: none;
  border-radius: 15px;
  overflow-y: scroll;
  padding: 1rem;
  background: ${({ theme }) => theme.colorBg};
  box-shadow: ${({ theme }) => theme.colorShadow};

  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

const List = styled.ul`
  padding: 0 2rem;
  padding-top: 1rem;
  font-family: 'Pretendard-Regular';

  h3 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgb(85, 85, 85);
  }
`;

const Item = styled.li`
  margin-left: 2rem;
`;

const Close = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 21;
  color: ${({ theme }) => theme.colorMainFont};
`;

interface IModalProps {
  setIsModalOpen?: (isOpen: boolean) => void;
  careerModalContents?: CareerModalContentsType[];
}

const Modal = ({ setIsModalOpen, careerModalContents }: IModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen && setIsModalOpen(false);
    }
  };

  useEffect(() => {
    // 모달이 열릴 때 배경 스크롤 비활성화
    document.body.style.overflow = 'hidden';

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        setIsModalOpen && setIsModalOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // 모달이 닫힐 때 body에 추가한 overflow: hidden 스타일 제거
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Wrapper ref={modalRef}>
        <TopBg />
        <Close onClick={() => setIsModalOpen && setIsModalOpen(false)}>
          닫기
        </Close>
        <List>
          {careerModalContents
            ?.map((item, index) => (
              <div key={index}>
                <h3>
                  {item.title}
                  <small> ({item.date})</small>
                </h3>
                <Item>{item.content}</Item>
              </div>
            ))
            .reverse()}
        </List>
      </Wrapper>
    </Container>
  );
};

export default Modal;
