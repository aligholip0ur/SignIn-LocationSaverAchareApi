import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MainApp from "./App";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MainApp></MainApp>
  </StrictMode>
);
