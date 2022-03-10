import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from '../../styles/globalstyle';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import Home from './home';
import CreateRecipe from './createRecipe';
import StepOne from './createRecipe/stepOne';
import StepTwo from './createRecipe/stepTwo';
import StepThree from './createRecipe/stepThree';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  return (
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
  );
};

export default App;
