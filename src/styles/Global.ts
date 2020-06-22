import { createGlobalStyle } from 'styled-components';
import 'typeface-rubik';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'icomoon';
  src: url('/fonts/icomoon.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon-discord:before {
  content: "\\e900";
}
.icon-facebook:before {
  content: "\\e901";
}
.icon-github:before {
  content: "\\e902";
}
.icon-medium:before {
  content: "\\e903";
}
.icon-reddit:before {
  content: "\\e904";
}
.icon-telegram:before {
  content: "\\e905";
}
.icon-twitter:before {
  content: "\\e906";
}
.icon-youtube:before {
  content: "\\e907";
}
  body {
    box-sizing: border-box;
    display: block;
    margin: 0;
    color: rgb(51, 51, 51);
    font-family: 'Rubik', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1C0937;
  }
  * {
   box-sizing: border-box;
   &::before,
   &::after {
   box-sizing: border-box;
   }
  }
  * {
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  padding: 0;
}

*::before,
*::after {
  box-sizing: border-box;
  font: inherit;
  margin: 0;
  padding: 0;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

[hidden],
template {
  display: none;
}

html {
  cursor: default;
  -webkit-focus-ring-color: rgba(255, 255, 255, 0);
  font-family: sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  min-height: 100%;
}

body {
  font-size: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: 1;
  min-height: 100vh;
}

a {
  background: transparent;
}

*:focus,
*:active,
*:hover {
  outline: none;
}

hr {
  box-sizing: content-box;
  height: 0;
}

ol,
ul {
  list-style: none;
}

pre {
  tab-size: 4;
  white-space: pre-wrap;
}

q {
  quotes: '\\201C''\\201D''\\2018''\\2019';
}

img {
  border: none;
}

svg:not(:root) {
  overflow: hidden;
}

button,
input {
  line-height: normal;
}

button,
select {
  text-transform: none;
}

button {
  overflow: visible;
}

button,
html input[type='button'],
input[type='reset'],
input[type='submit'] {
  -webkit-appearance: button;
  cursor: pointer;
}

button[disabled],
html input[disabled] {
  cursor: default;
}

input[type='checkbox'],
input[type='radio'] {
  box-sizing: border-box;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  height: auto;
}

input[type='search'] {
  -webkit-appearance: textfield;
  box-sizing: content-box;
}

input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration {
  -webkit-appearance: none;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  border: none;
  padding: 0;
}

textarea {
  overflow: auto;
  vertical-align: top;
}

button,
input,
select[multiple],
textarea {
  background-image: none;
}

input,
select,
textarea {
  border-radius: 0;
  box-shadow: none;
}

input,
textarea {
  resize: none;
  user-select: text;
}

[placeholder]:focus::placeholder {
  color: transparent;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
.headroom--unfixed {
position:fixed!important;
}
.headroom-disable-animation {
//transform: none!important;
}
a {
text-decoration:none;
color: inherit;
}
`;

export default GlobalStyle;
