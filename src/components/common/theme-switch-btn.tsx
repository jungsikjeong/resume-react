import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import CustomIcons from '../../assets/svgIcon/icons';
import { ThemeFlag, themeState } from '../../atoms/theme';
import { setThemeToStorage } from '../../utils/set-theme-to-storage';

const Button = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  background-color: ${({ theme }) => theme.colorBg};
  cursor: url('/images/cursor-pointer-hover.png'), auto;
`;

const ThemeSwitchBtn = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const handleClick = () => {
    if (theme === ThemeFlag.light) {
      setTheme(ThemeFlag.dark);
      setThemeToStorage(ThemeFlag.dark);
    } else {
      setTheme(ThemeFlag.light);
      setThemeToStorage(ThemeFlag.light);
    }
  };
  return (
    <>
      {theme === 0 ? (
        <Button onClick={handleClick}>
          <CustomIcons.LightBtnIcon />
        </Button>
      ) : (
        <Button onClick={handleClick}>
          <CustomIcons.DarkBtnIcon color='yellow' />
        </Button>
      )}
    </>
  );
};

export default ThemeSwitchBtn;
