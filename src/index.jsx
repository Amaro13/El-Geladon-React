import React from "react";
import { createRoot } from "react-dom/client";
import Home from "./components/home/home.jsx";
import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
