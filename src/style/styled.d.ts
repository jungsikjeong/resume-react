import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorBorderGray: string;
    colorHover: string;
    colorMain: string;
    colorBg: string;
    translucentWhite: string;
    colorMainFont: string;
    colorSkyBlue: string;
    colorAliceBlue: string;
    colorBlue: string;
    colorDisabled: string;
    colorGray: string;
    colorCloudyGray: string;
    colorDarkGray: string;
    colorWhite: string;
    colorRed: string;
    colorDiRed: string;
    colorShadow: string;
    colorDarkShadow: string;
    colors: { white: string; cloudyGray: string };
    fontSize: {
      title: string;
    };
  }
}
