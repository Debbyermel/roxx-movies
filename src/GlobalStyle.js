import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #ffffff;
    --lightGray: #eeeeee;
    --medGray: #353535;
    --darkGray: #1c1c1c;
    --fontBig: 2.5rem;
    --fontLarge: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 0;
    padding: 0;

    h1 {
      color: var(--white);
      font-size: 2rem;
      font-weight: 600;
    }

    h2 {
      font-size: 1.1rem;
      font-weight: 600;
    }

    p {
      color: var(--white);
      font-size: 1rem;
    }
  }

`