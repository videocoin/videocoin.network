import { createGlobalStyle } from 'styled-components';

import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import '@fontsource/teko/700.css';
import Colors from 'styles/Colors';

const GlobalStyle = createGlobalStyle`        
  body {
    box-sizing: border-box;
    display: block;
    margin: 0;
    color: ${Colors.grey70_72};
    font-family: 'Poppins', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
  //background: transparent!important;
}
.headroom--scrolled,
.headroom--pinned {
  header {
    padding: 10px 40px;
    @media (max-width: 1024px) {
      padding: 5px 28px;
    }
  }
}
a {
text-decoration:none;
color: inherit;
}
  .swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-container-horizontal>.swiper-pagination-bullets,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:10px;left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:8px;height:8px;display:inline-block;border-radius:50%;background:#000;opacity:.2}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet-active{opacity:1;background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-container-vertical>.swiper-pagination-bullets{right:10px;top:50%;transform:translate3d(0px,-50%,0)}.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:6px 0;display:block}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-container-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 4px}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-container-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-container-horizontal.swiper-container-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-progressbar{background:rgba(0,0,0,.25);position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-container-horizontal>.swiper-pagination-progressbar,.swiper-container-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:4px;left:0;top:0}.swiper-container-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-container-vertical>.swiper-pagination-progressbar{width:4px;height:100%;left:0;top:0}.swiper-pagination-white{--swiper-pagination-color:#ffffff}.swiper-pagination-black{--swiper-pagination-color:#000000}.swiper-pagination-lock{display:none}
`;

export default GlobalStyle;
