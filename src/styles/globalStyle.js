import { createGlobalStyle } from "styled-components"
import theme from "./theme"

const GlobalStyle = createGlobalStyle`

  @font-face {
    font-family: "lato-bold";
    src: url(${"font/lato-bold.woff2"}) format("woff2");
  }

  @font-face {
    font-family: "lato-regular";
    src: url(${"font/lato-regular.woff2"}) format("woff2");
  }

  @font-face {
    font-family: "lato-black";
    src: url(${"font/lato-black.woff2"}) format("woff2");
  }

  @font-face {
    font-family: "Slack-Circular-Pro";
    src: url(${"font/circular-pro-book.woff2"}) format("woff2");
    font-weight: 400;
  }

  @font-face {
    font-family: "Slack-Circular-Pro";
    src: url(${"font/circular-pro-bold.woff2"}) format("woff2");
    font-weight: 700;
  }

  @font-face {
    font-family: "Slack-Larsseit";
    src: url(${"font/larsseit-bold.woff2"}) format("woff2");
  }
  

*, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    margin: 0; 
  }

  body {
    font-family: Slack-Circular-Pro, "Helvetica Neue", Helvetica, "Segoe UI",
      Tahoma, Arial, sans-serif;
    font-weight: 400;
    line-height: 1.7;
    margin: 0; 
    padding: 0;
    color: ${theme.black}
  }

  
  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

`

export default GlobalStyle
