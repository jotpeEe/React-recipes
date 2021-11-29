import React from 'react';
import GlobalStyle from '../../styles/globalstyle';

import Main from '../main';
import Add from './addRecipe';

function Home() {
  return (
    <>
      <GlobalStyle />
      <Add />
    </>
  );
}

export default Home;
