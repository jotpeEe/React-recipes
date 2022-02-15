import { css } from 'styled-components';

const variables = css`
  :root {
    --white: #fff;
    --dark-white: hsla(0, 0%, 100%, 0.75);
    --dark-white2: hsl(0, 0%, 95%);
    --gray: rgba(21, 22, 25, 0.2);
    --black: hsl(225, 9%, 9%);
    --blue: hsl(215, 64%, 51%);
    --dark-green: hsl(126, 33%, 29%);
    --green: hsl(175, 100%, 15%);
    --light-green: hsl(186, 100%, 27%);
    --light-gray: hsl(185, 12%, 57%);
    --font-sans: 'Roboto Condensed', sans-serif;

    --nav-height: 80px;

    --p-recipe: 50px 70px 0px 70px;
    --p-recipe-right: 70px;

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
