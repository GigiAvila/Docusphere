import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

  input {
    height: 2vh;
  }

  input::placeholder {
    font-size: 0.7vw; 

    @media (max-width: 768px) {
      font-size: 2.5vw;
    }
  }

  label {
    font-size: 1vw; 

    @media (max-width: 768px) {
      font-size: 3.5vw;
    }
  }
`;

export default GlobalStyles;
