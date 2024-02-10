import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  break: 'rgb(55, 53, 47)',
  cloudyGray: '#B8B7B5',
};

const fontSize = {
  title: '2rem',
  //   subTitle: '1.875rem',
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;

const theme: DefaultTheme = {
  colors,
  fontSize,
};

export default theme;
