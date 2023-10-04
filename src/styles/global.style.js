import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .container {
    max-width: 74.5rem;
    margin: 0 auto;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  /* Colocar Estilos Globais de Estilização de Fontes */
  .titulo {
    color: var(--blue-700, #1D3557);
    font-family: Montserrat;
    font-size: 2.375rem;
    font-weight: 700;
  }

  .descricao {
    color: var(--blue-900, #263238);
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 400;

  }

  .paragrafo {
    color: var(--blue-900, #263238);
    font-family: Roboto;
    font-size: 1.5rem;
    font-weight: 300;
  }
`