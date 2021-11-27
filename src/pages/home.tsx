import React from 'react';
import GlobalStyle from '../styles/globalstyle';

import Nav from '../components/nav';
import Main from '../components/main';

function Home() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Main />
    </>
  );
}

export default Home;
