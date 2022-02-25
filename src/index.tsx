import React from 'react';
import ReactDOM from 'react-dom';
// import CreateRecipe from './components/pages/createRecipe';
import GlobalStyle from './styles/globalstyle';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/theme';
import Home from './components/pages/home';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      {/* <CreateRecipe /> */}
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
