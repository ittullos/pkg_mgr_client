import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Ship from "./pages/OnlinePortal";
import Navbar from "./components/Navbar";
import LargeFreight from "./pages/LargeFreight";
import RetailShipping from "./pages/RetailShipping";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="main-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/large-freight" element={<LargeFreight />} />
          <Route path="/retail-shipping" element={<RetailShipping />} />
          <Route path="/online-portal" element={<Ship />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
