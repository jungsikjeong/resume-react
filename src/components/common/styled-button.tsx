import { styled } from 'styled-components';

const SButton = styled.button<{ $borderradius: string }>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colorBlack};
  color: ${({ theme }) => theme.colorWhite};
  border-radius: ${({ $borderradius }) => $borderradius};
  font-weight: 700;
  font-size: 14px;
  cursor: url('/images/cursor-pointer-hover.png'), auto;

  &:hover {
    background-color: ${({ theme }) => theme.colorDarkGray};
  }
`;

interface IButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onAction?: (value?: number) => void;
  borderRadius?: string;
  children: React.ReactNode;
}
const StyledButton = ({
  children,
  type = 'button',
  borderRadius = '48px',
  onAction,
  ...props
}: IButtonProps) => {
  return (
    <SButton
      type={type}
      onClick={() => onAction && onAction()}
      $borderradius={borderRadius}
      {...props}
    >
      {children}
    </SButton>
  );
};

export default StyledButton;
