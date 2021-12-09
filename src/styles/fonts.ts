import { css } from 'styled-components';

const fonts = css`
  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/oswald-v40-latin-regular.eot');
    src: local(''), url('../fonts/oswald-v40-latin-regular.eot?#iefix') format('embedded-opentype'),
      url('../fonts/oswald-v40-latin-regular.woff2') format('woff2'),
      url('../fonts/oswald-v40-latin-regular.woff') format('woff'),
      url('../fonts/oswald-v40-latin-regular.ttf') format('truetype'),
      url('../fonts/oswald-v40-latin-regular.svg#Oswald') format('svg');
  }
`;

export default fonts;
