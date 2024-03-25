import { ThemeOptions } from "@mui/material";

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    secondary: {
      main: "#005EB8",
    },
    primary: {
      main: "#005EB8",
    },
    // error: {
    //   main: "#2962ff",
    // },
    // warning: {
    //   main: "#2962ff",
    // },
    // info: {
    //   main: "#2962ff",
    // },
    // success: {
    //   main: "#2962ff",
    // },
    text: {
      secondary: "#fff", // black
      primary: "#fff", // white
    },
    background: {
      default: "#006DB4", // Blue
      paper: "#78B2D5",
    },
  },
};
