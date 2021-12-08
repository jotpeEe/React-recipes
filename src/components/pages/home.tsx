import React from 'react';
import GlobalStyle from '../../styles/globalstyle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import CreateRecipe from './createRecipe';

function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CreateRecipe />
      </ThemeProvider>
    </>
  );
}

export default Home;
