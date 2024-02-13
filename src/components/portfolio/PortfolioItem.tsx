import styled from 'styled-components';
import { PortfolioType } from '../../assets/type/portfolio';
import { useRef, useState } from 'react';
import { tagsRandomBgColor } from '../../utils/tagsRandomBgColor';
import { throttle } from '../../utils/throttle';
import { useNavigate } from 'react-router-dom';

const Item = styled.div`
  border: 1px solid #eee;
  box-shadow: rgba(15, 15, 15, 0.1) 0px 0px 0px 1px,
    rgba(15, 15, 15, 0.1) 0px 2px 4px;
  border-radius: 12px;
  background: white;
  overflow: hidden;
  transition: all 100ms ease-out 0s;

  &:hover {
    background: #f0f0ef;
  }

  a {
    text-decoration: none;
    border: none;
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.break};
  }
`;

const Image = styled.div`
  width: 100%;
  height: 194px;
  overflow: hidden;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Contents = styled.div`
  padding: 0.5rem 0 0.5rem 0.7rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.div`
  padding: 8px 0px 6px;
  font-size: 20px;
  cursor: pointer;
`;

const Tags = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 5px;
  cursor: grab;
  transition: all 0.2s linear;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tag = styled.li<{ bgcolor: string }>`
  flex-shrink: 0;
  padding: 0 0.5rem;
  background-color: ${({ bgcolor }) => bgcolor};
  border-radius: 5px;
`;

const Date = styled.div`
  font-size: 12px;
  padding-bottom: 0.5rem;
`;

interface PortfolioItemProps {
  item: PortfolioType;
}

const PortfolioItem = ({ item }: PortfolioItemProps) => {
  const scrollRef = useRef<any>(null);
  const [isDrag, setIsDrag] = useState(false);
  const [startX, setStartX] = useState<number>(0);
  const [color, setColor] = useState<string[]>(tagsRandomBgColor(item.tags));

  const navigate = useNavigate();

  const handleDetailPost = ({ item }: PortfolioItemProps) => {
    navigate(`/project/${item.id}`, {
      state: {
        item,
      },
    });
  };

  const onDragStart = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDrag(true);
    setStartX(e.pageX + scrollRef.current.scrollLeft);
  };

  const onDragEnd = () => {
    setIsDrag(false);
  };

  const onDragMove = (e: any) => {
    if (isDrag) {
      const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;

      scrollRef.current.scrollLeft = startX - e.pageX;

      if (scrollLeft === 0) {
        setStartX(e.pageX);
      } else if (scrollWidth <= clientWidth + scrollLeft) {
        setStartX(e.pageX + scrollLeft);
      }
    }
  };

  const delay = 50;
  const onThrottleDragMove: any = throttle(onDragMove, delay);

  return (
    <Item>
      <Image onClick={() => handleDetailPost({ item })}>
        <img
          src={
            item?.thumbnail
              ? item.thumbnail
              : 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F569c9627-bc1d-488b-9f05-e41fa65330ef%2FUntitled.png?table=block&id=9ef6c0ed-b995-48f6-92ea-9b606c567dde&spaceId=f58dd584-7b46-47a4-a941-868db894802c&width=2000&userId=145179e5-743e-4d24-b6d8-3d2f3bd93dc7&cache=v2'
          }
          alt=''
        />
      </Image>

      <Contents>
        <Title
          onClick={() => handleDetailPost({ item })}
          dangerouslySetInnerHTML={{ __html: item.title }}
        ></Title>

        <Tags
          onMouseDown={onDragStart}
          onMouseMove={isDrag ? onThrottleDragMove : null}
          onMouseUp={onDragEnd}
          onMouseLeave={onDragEnd}
          ref={scrollRef}
        >
          {item.tags.map((tag, index) => (
            <Tag bgcolor={color[index]} key={tag}>
              {tag}
            </Tag>
          ))}
        </Tags>

        <Date>{item.date}</Date>
      </Contents>
    </Item>
  );
};

export default PortfolioItem;
