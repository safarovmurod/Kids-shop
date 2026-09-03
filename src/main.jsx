import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

const theme = createTheme({
  typography: { fontFamily: '"Balsamiq Sans", sans-serif' },
});

AOS.init({
  duration: 700,
  easing: "ease-out",
  once: true,
  offset: 60,
});

// React-ро ба элементи root пайваст мекунад; ErrorBoundary хатои render-и component-ҳоро мегирад.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </StrictMode>,
);
