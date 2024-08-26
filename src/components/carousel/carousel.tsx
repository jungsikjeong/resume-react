import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperStyle = styled(Swiper)`
  padding: 2rem 0 3.5rem;
  width: 100%;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .swiper-pagination {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    border: 1px solid ${({ theme }) => theme.colorBlack};
    height: 18px;
    width: 18px;
    background-color: transparent;
  }

  .swiper-pagination-bullet-active {
    display: flex;
    justify-content: center;
    align-items: center;
    &::after {
      background-color: ${({ theme }) => theme.colorBlack};
      border-radius: 10px;
      content: '';
      width: 10px;
      height: 10px;
    }
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;

  &::after {
    @media (max-width: 1024px) {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), transparent);
    }
    content: '';
    position: absolute;
    inset: 0;
    bottom: 5px;
    border-radius: 16px;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.55) 50%,
      transparent 70%
    );
  }
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: 100%;
  aspect-ratio: 2/1;
  border-radius: 16px;
  object-fit: cover;

  @media (max-width: 1024px) {
    aspect-ratio: 1;
  }
  @media (max-width: 767px) {
    aspect-ratio: 0.7;
  }
`;

const TextWrap = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  position: absolute;
  top: 10rem;
  left: 5rem;
  z-index: 10;
  text-align: start;

  @media (max-width: 1024px) {
    text-align: center;
    width: 100%;
    left: 0;
    bottom: 24px;
    justify-content: flex-end;
    align-items: center;
  }
`;

const Title = styled.h2`
  color: white;
  font-weight: bold;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 1.17em;
  }
`;

const Text = styled.p`
  color: white;
  font-weight: 400;

  @media (max-width: 1024px) {
    font-weight: 600;
  }
`;

const Button = styled.button`
  max-width: 50%;
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 48px;
  font-weight: 400;
  cursor: url('/images/cursor-pointer-hover.png'), auto;
  &:hover {
    background-color: #eee;
  }
  @media (max-width: 1024px) {
    max-width: 80%;
    width: 100%;
  }
`;

const Carousel = () => {
  return (
    <SwiperStyle
      pagination={{
        clickable: true,
      }}
      slidesPerView={1.2}
      centeredSlides={true}
      loop={true}
      spaceBetween={30}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      <SwiperSlide>
        <ImageWrap>
          <Image
            src='http://localhost:3000/images/projects/gongcha1.png'
            alt='preview-img'
          />

          <TextWrap>
            <Title>
              Tea로 시작하는
              <br />
              The기분 좋은 아침!
            </Title>

            <Text>
              오늘 먹은 공차를
              <br />
              여러 사람들과 공유해보세요!
            </Text>

            <Button>자세히 보기</Button>
          </TextWrap>
        </ImageWrap>
      </SwiperSlide>

      <SwiperSlide>
        <ImageWrap>
          <Image
            src='http://localhost:3000/images/thumbnail/Vue-book.gif'
            alt='preview-img'
          />

          <TextWrap>
            <Title>
              당신의 기분을 공유하고,
              <br />
              친구와 소통해보세요!
            </Title>
            <Text>
              일상 공유와 감정 기록
              <br />
              나만의 스토리를 저장하세요!
            </Text>

            <Button>자세히 보기</Button>
          </TextWrap>
        </ImageWrap>
      </SwiperSlide>

      <SwiperSlide>
        <ImageWrap>
          <Image
            src='http://localhost:3000/images/projects/read-a-perfume.gif'
            alt='preview-img'
          />

          <TextWrap>
            <Title>향기의 세계를 탐험하다!</Title>

            <Text>
              향수 리뷰와 감정 공유 <br />
              향기와 이야기의 공간! <br />
            </Text>

            <Button>자세히 보기</Button>
          </TextWrap>
        </ImageWrap>
      </SwiperSlide>

      <SwiperSlide>
        <ImageWrap>
          <Image
            src='http://localhost:3000/images/thumbnail/NewJeans-Gallery.gif'
            alt='preview-img'
          />

          <TextWrap>
            <Title>뉴진스 갤러리아!</Title>

            <Text>
              뉴진스의 멋진 순간을 공유하고 감상하세요
              <br />
            </Text>

            <Button>갤러리 클릭</Button>
          </TextWrap>
        </ImageWrap>
      </SwiperSlide>
    </SwiperStyle>
  );
};

export default Carousel;
