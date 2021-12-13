import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*, 
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  background-color: #000;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  color: #fff;
}

img {
  max-width: 100%;
  height: auto;
}

a{
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1, h2, h3 {
  font-family: 'Pacifico', sans-serif;
  padding: 0;
  margin: 0;
}

p {
  margin: 0;
  padding: 0;
  color: #fff;
}

button {
  cursor: pointer;
}

input, button {
  font: inherit;
}

`;


