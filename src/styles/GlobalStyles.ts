import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root, html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default GlobalStyles;
