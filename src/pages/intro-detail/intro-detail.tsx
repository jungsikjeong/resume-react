import { inView } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { IintroItemRes } from '../../interface/intro-item';
import FormattedText from '../../components/common/formatted-text';

const Container = styled.div``;

const ImageWrap = styled.div<{ $margin?: string }>`
  margin: ${({ $margin }) => ($margin ? $margin : '0')};

  @media (max-width: 767px) {
    padding: 1rem;
  }
`;

const Image = styled.img<{ $objectfit: string }>`
  width: 100%;
  height: auto;
  aspect-ratio: 2;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
  object-fit: ${({ $objectfit }) => $objectfit};
  &.in-view {
    opacity: 1;
  }

  @media (max-width: 767px) {
    aspect-ratio: 1/1;
  }
`;

const Wrapper = styled.div`
  max-width: 66.6666666667%;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

const IntroDetailPage = () => {
  const location = useLocation();

  const [{ item }, setItem] = useState<IintroItemRes>({ ...location.state });

  const getObjectFit = (image: string) => {
    return image.includes('contain') ? 'contain' : 'fill';
  };

  const observerElRefs = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    observerElRefs.current.forEach((el) => {
      if (el) {
        inView(el, () => {
          el.classList.add('in-view');
        });
      }
    });
  }, []);

  const onAddToRefs = (el: HTMLImageElement | null) => {
    if (el && !observerElRefs.current.includes(el)) {
      observerElRefs.current.push(el);
    }
  };

  return (
    <Container>
      <ImageWrap $margin={'0'}>
        <Image
          src={item?.mainImage}
          alt='intro-img'
          ref={onAddToRefs}
          $objectfit='fill'
        />
      </ImageWrap>

      <Wrapper>
        <FormattedText message={item?.title} type='title' />

        {/* Subtitles와 Contents를 map으로 처리 */}
        {item?.subTitle?.map((subTitle: string, index: number) => (
          <React.Fragment key={index}>
            <FormattedText message={subTitle} type='sub-title' />
            <FormattedText message={item.contents[index]} type='text' />

            {/* 이미지가 있는 경우에만 렌더링 */}
            {item.images[index] && (
              <ImageWrap $margin={'5rem 0 0'}>
                <Image
                  style={{ borderRadius: '12px' }}
                  src={item?.images[index]}
                  alt='intro-img'
                  ref={onAddToRefs}
                  $objectfit={getObjectFit(item?.images[index])}
                />
              </ImageWrap>
            )}
          </React.Fragment>
        ))}
      </Wrapper>
    </Container>
  );
};

export default IntroDetailPage;
