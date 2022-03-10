import { css } from 'styled-components';

const variables = css`
  :root {
    --white: #fff;
    --dark-white: hsla(0, 0%, 100%, 0.75);
    --dark-white2: hsl(0, 0%, 95%);
    --gray: hsl(0, 0%, 87%);
    --black: hsl(0, 0%, 19%);
    --blue: hsl(215, 64%, 51%);
    --green: hsl(187, 90%, 16%);
    --light-green: hsl(170, 41%, 35%);
    --bright-green: hsl(146, 89%, 45%);
    --light-gray: hsl(185, 12%, 57%);

    --border-gray: #cdcdcd;

    --font-sans: 'Roboto Condensed', sans-serif;
    --font-serif: 'PT Serif', serif;

    --nav-height: 80px;

    --p-recipe: 50px 70px 0px 70px;
    --p-recipe-right: 70px;

    --section-width: 1400px;
    --divider-margin: 0px 15px;

    --fs-xxs: 12px;
    --fs-xs: 13px;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 18px;
    --fs-xl: 19px;
    --fs-xxl: 24px;
    --fs-heading: 32px;
  }
`;

export default variables;
