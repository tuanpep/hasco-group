import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  @font-face {
    font-family: 'Roboto Slab';
    src: url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300;400;500;600;700&display=swap');
  }

  @font-face {
    font-family: 'Dosis';
    src: url('https://fonts.googleapis.com/css2?family=Dosis:wght@300;400;500;600;700&display=swap');
  }

  body{
    font-family: 'Dosis', sans-serif;
  }
`;
