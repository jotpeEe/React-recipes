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
    primary: 'hsl(146, 89%, 45%)',
    secondary: '#fff',
  },
});

export default theme;
