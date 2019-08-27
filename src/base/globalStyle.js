import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    // Colors
    --primary-text-color: #fff;
    --primary-color: #f00;
    --secondary-color: #0ff;
    
    --primary-bg-color: #222
    --secondary-bg-color: #000;


    font-size: 16px;
    font-family: 'Roboto';
    background-color: var(--primary-bg-color);
    color: var(--primary-text-color);
  }
`;

export default GlobalStyle;
