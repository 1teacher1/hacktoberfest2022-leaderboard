import { extendTheme } from "@chakra-ui/react";
const breakpoints = {
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1400px",
  "2xl": "1900px",
};

const colors = {
  primary: "#7c7fff",
  dark: "#170f1e",
  light: "#ffffff",
  secondary: "#E0812A",
};
export const theme = extendTheme({
  colors,
  breakpoints,
  fonts: {
    heading: "JetBrains Mono",
    body: "JetBrains Mono",
  },
  sizes: {
    container: {
      mw: "900px",
    },
  },
  shadows: {
    outline: "none",
  },
});
