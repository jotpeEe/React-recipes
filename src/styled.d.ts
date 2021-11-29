import 'styled-components';
import { Theme } from '@mui/material/styles';
interface CustomTheme {
  bg: {
    main: string;
    light: string;
  };
  text: {
    primary: 'hsl(225, 9%, 9%)';
    secondary: '#fff';
  };
}
declare module '@mui/material/styles' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
