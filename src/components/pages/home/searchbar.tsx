import React, { useState } from 'react';
import styled from 'styled-components';

import { Autocomplete, TextField } from '@mui/material';
import { RecipeProps } from '../createRecipe/recipe';
import SearchButton from './searchButton';

const StyledSearchBar = styled.div`
  position: relative;
  background-color: white;
  width: 40%;

  &,
  & *:not(button) {
    border-radius: 30px;
    border-color: #fff;
    padding: 3px;
  }

  .MuiOutlinedInput-root {
    & fieldset,
    &:hover fieldset,
    &.Mui-focused fieldset {
      border-color: #fff;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -30px;
    left: 27px;
    height: 30px;
    width: 40%;
    border-radius: 10px 10px 0 0;
    padding: 0;
    margin: 0;
  }

  .MuiFormLabel-root,
  .MuiAutocomplete-input {
    padding-left: 10px;
  }
`;

type SearchBarProps = {
  recipes: RecipeProps[];
};

const SearchBar: React.FC<SearchBarProps> = ({ recipes }) => {
  const [active, setActive] = useState(false);

  return (
    <StyledSearchBar>
      <div className="buttons">
        <SearchButton active={active} setActive={setActive} primary text="RECIPES"></SearchButton>
        <SearchButton active={active} setActive={setActive} text="BLOG"></SearchButton>
      </div>
      <Autocomplete
        size="small"
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={recipes.map(recipe => recipe.title)}
        renderInput={params => (
          <TextField
            {...params}
            label={`Search for ${active ? 'blog posts' : 'recipes'}`}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    </StyledSearchBar>
  );
};

export default SearchBar;
