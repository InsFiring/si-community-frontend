import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: "arial";
  }
  ul, ol {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
