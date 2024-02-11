import 'styled-components';
import { ColorsTypes, FontSizeTypes, CommonTypes } from './theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsTypes;
    fontSize: FontSizeTypes;
    common: CommonTypes;
  }
}
