// src/App.jsx
import React from "react";
import Header from "./components/Header";
import CalculatorPage from "./pages/CalculatorPage";

export default function App() {
  return (
    <div className="app">
      <Header />
      <CalculatorPage />
    </div>
  );
}
