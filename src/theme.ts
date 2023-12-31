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
  gray: {
    300: "#8B8A8C",
  },
};

const theme = extendTheme({ colors });

export default theme;
