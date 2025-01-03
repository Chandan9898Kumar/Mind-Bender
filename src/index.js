import React from "react";
import App from "./App.js";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

const rootRef = document.getElementById("root");
const root = ReactDOM.createRoot(rootRef);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
