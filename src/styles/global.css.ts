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

  @font-face {
    font-family: 'Source Sans Pro';
    src: url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;0,600;0,700;1,300&display=swap');
  }

  @font-face {
    font-family: 'Montserrat';
    src: url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet');
  }

  body{
    font-family: 'Dosis', sans-serif;
  }
`;
