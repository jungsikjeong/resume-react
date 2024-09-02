import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import styled from 'styled-components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperStyle = styled(Swiper)`
  padding-top: 1rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;

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
  height: 100%;
  overflow: hidden;
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 10;
  object-fit: cover;
`;

interface IProjectDetailCarouselProps {
  images: string[];
}

const ProjectDetailCarousel = ({ images }: IProjectDetailCarouselProps) => {
  return (
    <SwiperStyle
      pagination={{
        type: 'fraction',
      }}
      modules={[Pagination, Navigation]}
      className='mySwiper'
    >
      {images.map((image: string, index: number) => (
        <SwiperSlide key={index}>
          <ImageWrap>
            <Image src={`${image}`} alt='' />
          </ImageWrap>
        </SwiperSlide>
      ))}
    </SwiperStyle>
  );
};

export default ProjectDetailCarousel;
