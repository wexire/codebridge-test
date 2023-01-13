import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    allVariants: {
      color: "#363636",
    },
    h1: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h2: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1rem",
      fontWeight: 700,
    },
    h4: {
      fontSize: "1rem",
      fontWeight: 400,
    },
    h5: {
      fontSize: "0.875rem",
      fontWeight: 400,
      opacity: 0.6,
    },
  },
});
