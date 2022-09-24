import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
  }

  body {
    margin: 0;
    line-height: 1.5;
    background-color: #f1f1f1;
    font-family: 'Roboto', 'Noto Sans KR', sans-serif;
    text-overflow: ellipsis;
    white-space:nowrap;
  }

`;

export default GlobalStyle;
