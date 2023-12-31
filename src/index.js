import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom"; // Import BrowserRouter, Route, and Routes
import "./index.css";
import App from "./App";
import ServicePage from "./components/ServicePage";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/firstPage" element={<FirstPage />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/thirdPage" element={<ThirdPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
