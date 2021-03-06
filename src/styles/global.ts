import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle `
 *{
     padding: 0;
     margin: 0;
     border-box: 0;
 }

 html, body, #root {
     height: 100%;
 }

 body {
     background-color: #F8FDFF;
     font-family: 'Poppins', sans-serif;
 }
 
 button{
     background-color: transparent;
     border: none;
     outline: none;
     font-family: 'Poppins', sans-serif;
     cursor: pointer;
 }
 
 a{ 
     text-decoration: none;
     outline: none;
 }
 `;

 export default globalStyle;