import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  ul{
    list-style: none;
  }



  body {
    margin: 0;
    padding: 0;
    background: #FAFCFF;
    font-family: 'Poppins', sans-serif;
  }
`;

export default GlobalStyle;
