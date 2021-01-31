import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Open Sans Condensed';
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  .page-container {
    padding: 20px 60px;
    position: relative;
    top: 80px;

    @media screen and (max-width: 800px) {
      padding: 10px;
      top: 60px;
    }
  }
`;
