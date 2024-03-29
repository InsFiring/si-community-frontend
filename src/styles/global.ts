import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { NotoM } from './font';

export const GlobalStyle = createGlobalStyle`
  ${reset}


  *{
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    font-family:${NotoM.style.fontFamily};
    font-size:14px;
    /* color:#fff; */
  }


  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  button{
    cursor: pointer;
    background: none;
    border: none;
  }

  label{
    width: 100%;
    font-size:14px;
    color:${({ theme }) => theme.colors.ActiveText};
    text-align:left;
  }

  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0px 24px;
    width: 100%;
    height: 100%;
  }
`;
