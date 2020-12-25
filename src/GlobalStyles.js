import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: 'Roboto';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-image: url(/images/background/background2x.png);
  }

  main {
    background-image: ${({theme}) => theme.colors.body.gradient};
    height: 100vh;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  button {
    background-color: transparent;
    border: none;
  }

  select option:disabled {
    display: none;
  }

  select::-ms-expand {
    display: none;
  }

  a {
    text-decoration: none;
  }

  * {
    outline: none;
  }

  *:focus {
    outline: 0;
  }

  table {
    border-collapse: collapse;

  }

  table tbody {
    max-height: 50%;
    overflow-y: scroll;
    display: block;
  }

  tr {
    margin-bottom: 1rem;
  }

  input, select {
    font-family: 'Beam Catcher';
  }

  input {
    font-size: 1.5rem;
  }


`