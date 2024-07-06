// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  pink: {
    100: "#ffccff",
    200: "#ff99ff",
    300: "#ff66ff",
    400: "#ff33ff",
    500: "#ff00ff",
    600: "#cc00cc",
    700: "#990099",
    800: "#660066",
    900: "#330033",
  },
  green: {
    100: "#ccffe6",
    200: "#99ffce",
    300: "#66ffb5",
    400: "#33ff9d",
    500: "#00ff84",
    600: "#00cc6a",
    700: "#00994f",
    800: "#006635",
    900: "#00331a",
  },
  Alphagreen: {
    100: "rgba(204, 255, 230, 0.4)",
    200: "rgba(153, 255, 206, 0.4)",
    300: "rgba(102, 255, 181, 0.4)",
    400: "rgba(51, 255, 157,  0.4)",
    500: "rgba(0, 255, 132,   0.4)",
    600: "rgba(0, 204, 106,   0.4)",
    700: "rgba(0, 153, 79,    0.4)",
    800: "rgba(0, 102, 53,    0.4)",
    900: "rgba(0, 51, 26,     0.4)",
  },
  // gray: {
 
  //   300: "#8B8A8C",
   
  // },
  gray: {
    50: "#f9f9f9",
    100: "#ededed",
    200: "#d3d3d3",
    300: "#b3b3b3",
    400: "#a0a0a0",
    500: "#898989",
    600: "#6c6c6c",
    700: "#202020",
    800: "#121212",
    900: "#111",
  },
};

const breakpoints = {
  base: '0px', // 0px
  sm: '480px', // ~480px. em is a relative unit and is dependant on the font size.
  '2sm': '639px', // ~600px
  md: '958px', // ~768px
  lg: '1052px', // ~992px
  '2lg' : '1151px',
  xl: '1228px', // ~1280px
  '2xl': '1536px', // ~1536px
}

// 1228

let theme = extendTheme({ breakpoints,colors });

export default theme;
