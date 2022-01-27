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
 }
 
 button{
     background-color: none;
     border: none;
     outline: none;
 }
 
 a{ 
     text-decoration: none;
     outline: none;
 }
 `;

 export default globalStyle;