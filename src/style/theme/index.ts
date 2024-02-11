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

const common = {
  flexCenter: `
    display: flex;
    justify-contents: center;
    align-items: center;
  `,
  flexCenterColumn: `
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
  `,
};

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSize;
export type CommonTypes = typeof common;

const theme: DefaultTheme = {
  colors,
  fontSize,
  common,
};

export default theme;
