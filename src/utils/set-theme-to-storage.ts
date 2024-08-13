import { ThemeFlag } from '../atoms/theme';

export const setThemeToStorage = (themeFlag: ThemeFlag) => {
  localStorage.setItem('theme', themeFlag.toString());
};

export const getThemeFromStorage = () => {
  const value = localStorage.getItem('theme') || 0;

  return Number(value);
};
