import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "7/src/index.css";
import App from "7/src/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
