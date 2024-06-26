/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Kit 2 React Base Styles
import colors from "assets/theme/base/colors";

const { info, white } = colors;

export default {
  html: {
    scrollBehavior: "smooth",
    width: "100%",
    height: "100%",
    margin: 0,
    padding: 0,
    overflowX: "hidden",
  },
  body: {
    overflow: "hidden",
  },
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
  },
  "a, a:link, a:visited": {
    textDecoration: "none",
    color: `${white.main}`,
    transition: "color 150ms ease-in",
  },
  "a:hover, a:focus": {
    color: `${info.focus}`,
  },
  "button a:hover, button a:focus": {
    color: `${white.focus}`,
  },
  "a#link, a#link:link": {
    color: `${white.main}`,
    textDecoration: "underline",
  },
  "a#link:focus, a#link:hover": {
    color: `${info.main}`,
    textDecoration: "underline",
  },

};
