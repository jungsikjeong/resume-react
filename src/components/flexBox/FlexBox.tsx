import styled from 'styled-components';

interface FlexBoxProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  direction?: string;
  justifyContent?: string;
  alignItems?: string;
  wrap?: string;
  gap?: string;
}

const Container = styled.div<FlexBoxProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'stretch'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
`;

const FlexBox = ({
  children,
  style,
  direction,
  justifyContent,
  alignItems,
  wrap,
  gap,
}: FlexBoxProps) => {
  return (
    <Container
      style={style}
      direction={direction}
      justifyContent={justifyContent}
      alignItems={alignItems}
      wrap={wrap}
      gap={gap}
    >
      {children}
    </Container>
  );
};

export default FlexBox;
