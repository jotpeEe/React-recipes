import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  ${variables};
  ${fonts};

  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: var(--font-sans);
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: var(--black) var(--green);
  }
  body::-webkit-scrollbar {
    width: 10px;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--green);
    border: 2px solid var(--green);
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
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
