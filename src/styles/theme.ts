import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(175, 100%, 15%)',
    },
    secondary: {
      main: 'hsl(126, 33%, 29%)',
    },
  },
  bg: {
    main: 'hsl(175, 100%, 15%)',
    light: 'hsl(126, 33%, 29%)',
  },
  text: {
    primary: 'hsl(225, 9%, 9%)',
    secondary: '#fff',
  },
});

export default theme;
