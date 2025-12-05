import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "7./index.css";
import App from "7./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
