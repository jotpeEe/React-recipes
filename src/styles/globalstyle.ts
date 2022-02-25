import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  ${variables};
  ${fonts};

  html {
    box-sizing: border-box;
  }

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--font-sans);
}

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--font-sans);

  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--black);
    line-height: 1.1;
    letter-spacing: 0.8px;
  }

  h2 {
    font-size: var(--fs-lg);
  }

  img,
  svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;

    &:hover,
    &:focus {
    }
  }

  button {
    cursor: pointer;
    border: 0;
    border-radius: 0;
  }

  input, textarea {
    border-radius: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
    &:focus,
    &:active {
      &::placeholder {
        opacity: 0.5;
      }
    }
  }

  p {
    font-size: var(--fs-sm);

    &:last-child,
    &:last-of-type {
      margin: 0;
    }
  }

  ul {
    list-style-type: none;
  }

  #root {
    min-height: 100vh;
  }

  
`;

export default GlobalStyle;
