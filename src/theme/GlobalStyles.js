import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   body {
    background-image: ${({ theme }) => theme.background_image};
    background-size: 50%;
    background-attachment: fixed;
    background-repeat: no-repeat;
  }
`;

export default GlobalStyles;
