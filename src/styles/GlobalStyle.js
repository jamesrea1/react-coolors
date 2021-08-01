import { createGlobalStyle } from 'styled-components';
import { reset } from 'utils/reset';
import { theme } from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${theme}

  body{
    font-family: Inter,sans-serif;
    font-size: 15px;
    line-height: 1.2;
    color: var(--text);
    position:fixed;
    overflow: hidden;
    width:100%;
  }

  html, body, #root{
    height:100%;
  }

  h1, h2, h3, h4 {
      color: #000;
      line-height: 1.1em;
      letter-spacing: -.035em;
  }
  h1 {
    font-size: 50px;
    font-weight: 800;
  }
  h2{
    line-height: 1.4em;
    font-size: 18px;
  }

  a{
    text-decoration:none;
  }

  button {
    display: inline-block;
    border: none;
    background:none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    outline:none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
`;

export default GlobalStyle;
