import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#FFFFFF',
  cloudyGray: '#B8B7B5',
  // cloudyGray: '#D9D9D9',
};

const fontSize = {
  title: '2rem',
  //   subTitle: '1.875rem',
};

const lightTheme: DefaultTheme = {
  colorBorderGray: '#eee',
  colorHover: '#F5F5F5',
  colorMain: '#ffffff4d',
  colorBg: '#F7F7FA',
  translucentWhite: 'rgba(255, 255, 255, 0.95)',
  colorMainFont: 'rgb(55, 53, 47)',
  colorSkyBlue: '#afe4f8',
  colorAliceBlue: 'aliceblue',
  colorBlue: '#0b6e99',
  colorDisabled: '#C4C4C4',
  colorGray: '#D9D9D9',
  colorCloudyGray: '#B8B7B5',
  colorDarkGray: '#666',
  colorWhite: '#FFFFFF',
  colorRed: 'tomato',
  colorDiRed: '#FE9090',
  colorShadow: '0 3px 6px rgba(0, 0, 0, .16)',
  colorDarkShadow: '0 3px 6px rgba(0, 0, 0, .5)',
  colors: { ...colors },
  fontSize: { ...fontSize },
};

const darkTheme: DefaultTheme = {
  colorBorderGray: '#eee',
  colorHover: '#585D6E4d',
  colorMain: '#585D6E4d',
  // colorBg: '#1B1D25',
  colorBg: '#0c1219',
  translucentWhite: 'rgba(0, 0, 0, 0.5)',
  colorMainFont: '#FAFAFA',
  colorSkyBlue: '#4d91df',
  colorAliceBlue: '#4d91df',
  colorBlue: '#3190ff',
  colorDisabled: '#C4C4C4',
  colorGray: '#D9D9D9',
  colorCloudyGray: '#B8B7B5',
  colorDarkGray: '#D9D9D9',
  colorWhite: '#FFFFFF',
  colorRed: '#FC585A',
  colorDiRed: '#FE9090',
  colorShadow: '0 4px 7px rgb(68 68 68 / .8)',
  colorDarkShadow: '0 3px 6px rgba(255, 255, 255, .5)',
  colors: { ...colors },
  fontSize: { ...fontSize },
};

const theme = {
  lightTheme,
  darkTheme,
};

export default theme;
