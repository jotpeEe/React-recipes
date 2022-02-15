import { createGlobalStyle } from 'styled-components';
import variables from './variables';
import fonts from './fonts';

const GlobalStyle = createGlobalStyle`
  ${variables};
  ${fonts};

  html {
    box-sizing: border-box;
    width: 100%;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--black);
    font-family: var(--font-sans);
    font-size: var(--fs-xs);

    @media (max-width: 480px) {
      font-size: var(--fs-lg);
    }

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
    letter-spacing: 1px;
  }

  h2 {
    font-size: var(--fs-lg);
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 80px);
  }

  .medium-heading {
    margin: 0;
    font-size: clamp(40px, 8vw, 60px);
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
    margin: 0 0 15px 0;
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
