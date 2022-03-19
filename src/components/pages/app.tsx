import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider, createClient } from 'urql';

import GlobalStyle from '../../styles/globalstyle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import Home from './home';
import CreateRecipe from './createRecipe';
import StepOne from './createRecipe/stepOne';
import StepTwo from './createRecipe/stepTwo';
import StepThree from './createRecipe/stepThree';

const client = createClient({
  url: 'http://localhost:4000/graphql',
  fetchOptions: { credentials: 'include' },
});

const App = () => {
  const [recipes, setRecipes] = useState([]);

  return (
    <Provider value={client}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home recipes={recipes} />} />
            <Route
              path="CreateRecipe"
              element={<CreateRecipe recipes={recipes} setRecipes={setRecipes} />}>
              <Route path="AddTitle" element={<StepOne />} />
              <Route path="HowToMake" element={<StepTwo />} />
              <Route path="RecipePreview" element={<StepThree />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
