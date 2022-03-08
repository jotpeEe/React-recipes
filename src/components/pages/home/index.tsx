import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Content from './content';
// import GlobalStyle from '../../styles/globalstyle';
// import { ThemeProvider } from '@mui/material/styles';
// import theme from '../../styles/theme';

const StyledHome = styled.div`
  height: 100vh;
`;

const Home: React.FC = () => {
  return (
    <StyledHome>
      <Header />
      <Content />
    </StyledHome>
  );
};

export default Home;
