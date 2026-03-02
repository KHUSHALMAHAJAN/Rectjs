import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Contextdetils from "./context/contextdetils.jsx";

createRoot(document.getElementById("root")).render(
  <Contextdetils>
    <App />
  </Contextdetils>,
);
