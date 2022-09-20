import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    background-color: #f1f1f1;
  }

`;

export default GlobalStyle;
