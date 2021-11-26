import React from 'react';
import GlobalStyle from '../styles/globalstyle';

import Nav from '../components/nav';
import Menu from '../components/menu';
import Main from '../components/main';

function Home() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Menu />
      <Main />
    </>
  );
}

export default Home;
