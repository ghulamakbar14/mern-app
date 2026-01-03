import React from "react";
import ReactDOM from "react-dom/client";
import theme from "./theme.js";
import { RouterProvider } from "react-router-dom";
import router from "./app/router.jsx";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { AuthProvider } from "./auth/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode >
);