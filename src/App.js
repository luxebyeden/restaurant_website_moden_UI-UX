import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import { Navbar } from "./components";
import { Footer } from "./container";
import LuxePage from "./components/LuxePage";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/luxe" element={<LuxePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
