import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  padding: 5px 20px;
  /* width: 80px; */
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colorBg};
  box-shadow: ${({ theme }) => theme.colorShadow};
  cursor: pointer;
`;

const DarkModeButton = () => {
  const context = useContext(ThemeContext);
  return (
    <>
      {context.theme === 'lightTheme' ? (
        <Button onClick={context.toggleMode}>🌝</Button>
      ) : (
        <Button onClick={context.toggleMode}>🌚</Button>
      )}
    </>
  );
};

export default DarkModeButton;
