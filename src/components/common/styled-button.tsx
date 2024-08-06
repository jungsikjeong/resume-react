import { styled } from 'styled-components';

const SButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colorBlack};
  color: ${({ theme }) => theme.colorWhite};
  border-radius: 48px;
  font-weight: 700;
  cursor: url('/images/cursor-pointer-hover.png'), auto;

  &:hover {
    background-color: ${({ theme }) => theme.colorDarkGray};
  }
`;

interface IButtonProps {
  children: React.ReactNode;
}
const StyledButton = ({ children, ...props }: IButtonProps) => {
  return <SButton>{children}</SButton>;
};

export default StyledButton;
