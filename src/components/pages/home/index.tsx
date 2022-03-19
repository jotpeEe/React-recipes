import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Content from './content';
import { RecipeProps } from '../createRecipe/recipe';
import Login from './login';

const StyledHome = styled.div`
  height: 100vh;
`;

type HomeProps = {
  recipes: RecipeProps[];
};

const Home: React.FC<HomeProps> = ({ recipes }) => {
  console.log(recipes);
  return (
    <StyledHome>
      <Header recipes={recipes} />
      {/* <Content /> */}
      <Login />
    </StyledHome>
  );
};

export default Home;
