import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    allVariants: {
      color: "#363636",
    },
    h1: {
      fontSize: "1.5em",
      fontWeight: 400,
    },
    h2: {
      fontSize: "1em",
      fontWeight: 600,
    },
  },
});
