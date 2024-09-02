import React, { useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { IProjectList } from '../../interface/project-list';

const Item = styled.li`
  @media (max-width: 767px) {
    padding-left: 5.5rem;
    font-size: 14px;
  }
  display: flex;
  align-items: center;
  position: relative;
  padding: 35px 0;
  min-height: 130px;
  border-top: 1px solid ${({ theme }) => theme.colorBlack};
  &:nth-child(1) {
    border-top: 4px solid ${({ theme }) => theme.colorBlack};
  }

  &:last-child {
    border-bottom: 1px solid ${({ theme }) => theme.colorBlack};
  }
`;

const Icon = styled.img`
  margin-left: auto;
  margin-right: 5rem;
  width: 100px;
  max-height: 50px;
  object-fit: cover;

  @media (max-width: 767px) {
    position: absolute;
    left: 10px;
    width: 70px;
    max-height: 50px;
    margin: 0;
  }
`;

const Figure = styled.figure`
  opacity: 0;
  visibility: hidden;
  max-width: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;
  z-index: 999;

  @media (max-width: 767px) {
    max-width: 250px;
  }

  img {
    width: 100%;
  }
`;

interface IProjectItemProps {
  item: any;
}

let x = 0;
let y = 0;
let targetX = 0;
let targetY = 0;
const speed = 0.05;

const ProjectItem = ({ item }: IProjectItemProps) => {
  const figureRef = useRef<HTMLElement>();
  const requestRef = useRef<number>(0);

  const navigate = useNavigate();

  const handleMouseMove = (e: React.MouseEvent<HTMLLIElement>) => {
    x = e.pageX;
    y = e.pageY;

    if (figureRef.current) {
      figureRef.current.style.visibility = 'visible';
      figureRef.current.style.opacity = '1';
    }
  };

  const handleMouseLeave = () => {
    if (figureRef.current) {
      figureRef.current.style.opacity = '0';
      figureRef.current.style.visibility = 'hidden';
    }
  };

  const loop = useCallback(() => {
    targetX += (x - targetX) * speed;
    targetY += (y - targetY) * speed;

    if (figureRef.current) {
      figureRef.current.style.transform = `translate(-50%, -50%) translate(${targetX / 10}px, ${targetY / 10}px)`;
    }

    requestRef.current = requestAnimationFrame(loop);
  }, []);

  const onPageMove = (item: any) => {
    const date = item?.date?.slice(0, 4);
    const id = item?.id;

    navigate(`/project/${date}/${id}`);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(requestRef.current);
  }, [loop]);

  return (
    <Item
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onPageMove(item)}
    >
      <Figure ref={figureRef as any}>
        <img src={item.thumbnail} alt='' />
      </Figure>

      {item.title}

      <Icon src={item.icons} alt='icon-img' />
    </Item>
  );
};

export default ProjectItem;
