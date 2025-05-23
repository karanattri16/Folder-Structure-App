import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Folder from "./components/Folder";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>} />
      <Route  path="/folder" element={<Folder/>} />
    </Routes>
  </BrowserRouter>

); 