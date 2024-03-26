import { useContext } from 'react';
import styled from 'styled-components';
import CustomIcons from '../../assets/svgIcon/list-icon';
import ThemeContext from '../../context/theme-context';

const Button = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background-color: ${({ theme }) => theme.colorBg};
  box-shadow: ${({ theme }) => theme.colorShadow};
  cursor: pointer;
`;

const DarkModeButton = () => {
  const context = useContext(ThemeContext);
  return (
    <>
      {context.theme === 'lightTheme' ? (
        <Button onClick={context.toggleMode}>
          <CustomIcons.LightBtnIcon />
        </Button>
      ) : (
        <Button onClick={context.toggleMode}>
          <CustomIcons.DarkBtnIcon color='yellow' />
        </Button>
      )}
    </>
  );
};

export default DarkModeButton;
