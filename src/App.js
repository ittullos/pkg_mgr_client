import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import OnlinePortal from "./pages/OnlinePortal";
import CopyPrint from "./pages/CopyPrint";
import Notary from "./pages/Notary";
import Mailbox from "./pages/Mailbox";
import RetailMerchandising from "./pages/RetailMerchandising";
import ParcelShipping from "./pages/ParcelShipping";
import Packaging from "./pages/Packaging";
import FreightPackaging from "./pages/FreightPackaging";
import Courier from "./pages/Courier";
import Storage from "./pages/Storage";
import Pickup from "./pages/Pickup";
import Hero from "./components/Hero";

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Home />
            </>
          }
        />
        {/* Retail Shipping */}
        <Route
          path="/parcel-shipping"
          element={
            <>
              <ParcelShipping />
            </>
          }
        />
        <Route path="/packaging-services" element={<Packaging />} />
        <Route path="/mailbox-services" element={<Mailbox />} />
        <Route path="/copy-print-scan-shred" element={<CopyPrint />} />
        <Route path="/notary-services" element={<Notary />} />
        <Route path="/retail-merchandising" element={<RetailMerchandising />} />
        {/* Large Freight */}
        <Route path="/freight-packaging" element={<FreightPackaging />} />
        <Route path="/courier-services" element={<Courier />} />
        <Route path="/storage-and-fulfillment" element={<Storage />} />
        <Route path="/pickup-and-delivery" element={<Pickup />} />
        <Route path="/online-portal" element={<OnlinePortal />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
