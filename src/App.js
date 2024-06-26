import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ship from "./pages/Ship";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ship" element={<Ship />} />
      </Routes>
    </Router>
  );
}

export default App;
