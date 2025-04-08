import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CanvasPositionProvider } from "./context/CanvasPositionContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CanvasPositionProvider>
      <App />
    </CanvasPositionProvider>
  </StrictMode>
);
