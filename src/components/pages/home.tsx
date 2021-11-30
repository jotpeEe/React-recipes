import React from 'react';
import GlobalStyle from '../../styles/globalstyle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import Add from './addRecipe';

function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Add />
      </ThemeProvider>
    </>
  );
}

export default Home;
