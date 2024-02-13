import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperStyle = styled(Swiper)`
  padding: 1.5rem 0 0;
  width: 95%;
  height: 100%;
  margin: 0 auto;
  max-height: 450px;

  .swiper-pagination {
    position: absolute;
    bottom: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0.5rem;
  }
`;

const ImageWrap = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 75%;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
`;

interface PortfolioImageProps {
  images: string[];
}

const PortfolioImage = ({ images }: PortfolioImageProps) => {
  return (
    <SwiperStyle
      pagination={{
        type: 'fraction',
      }}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {images.map((image: any, index: number) => (
        <SwiperSlide key={index}>
          <ImageWrap>
            <Image src={`.${image}`} alt='' />
          </ImageWrap>
        </SwiperSlide>
      ))}
    </SwiperStyle>
  );
};

export default PortfolioImage;
