// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // your brand color
    secondary: { main: "#9c27b0" },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    h4: { fontWeight: 600, marginBottom: 16 },
    body1: { fontSize: 16 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: 8, textTransform: "none" },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: { marginBottom: 16 },
      },
    },
  },
});

export default theme;
