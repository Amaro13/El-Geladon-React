import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./views/home/home.jsx";
import "./assets/styles/index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
