import { css } from 'styled-components';

const variables = css`
  :root {
    --white: #fff;
    --dark-white: hsla(0, 0%, 100%, 0.75);
    --gray: rgba(21, 22, 25, 0.2);
    --black: hsl(225, 9%, 9%);
    --blue: hsl(215, 64%, 51%);
    --green: hsl(190, 49%, 20%);
    --light-green: hsl(185, 12%, 57%);
    --font-sans: -apple-system, system-ui, sans-serif;

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
