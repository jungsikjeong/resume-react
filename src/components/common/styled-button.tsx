import { styled } from 'styled-components';

const SButton = styled.button<{ $borderradius: string }>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ $borderradius }) => $borderradius};
  border: 1px solid ${({ theme }) => theme.colorAliceBlue};
  font-weight: 700;
  font-size: 14px;
  cursor: url('/images/cursor-pointer-hover.png'), auto;

  &:hover {
    opacity: 0.8;
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
