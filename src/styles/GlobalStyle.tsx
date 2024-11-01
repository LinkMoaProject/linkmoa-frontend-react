import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --gray-100: #f7f7f5;
    --gray-200: #f0f0ee;
    --gray-300: #e7e7e4;
    --gray-500: #a7a6a3;
  }
`;
export default GlobalStyle;
