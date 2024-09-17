import React from "react";
import "bootswatch/dist/flatly/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import CopyPrint from "./pages/CopyPrint";
import Notary from "./pages/Notary";
import Mailbox from "./pages/Mailbox";
import ParcelShipping from "./pages/ParcelShipping";
import Packaging from "./pages/Packaging";
import FreightPackaging from "./pages/FreightPackaging";
import Courier from "./pages/Courier";
import Storage from "./pages/Storage";
import Pickup from "./pages/Pickup";
import HomeHero from "./components/HomeHero";
import Hero from "./components/Hero";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HomeHero />
              <Home />
            </>
          }
        />
        {/* Retail Shipping */}
        <Route
          path="/parcel-shipping"
          element={
            <>
              <Hero
                backgroundImage="/images/cards/parcel.jpg"
                overlayText="Parcel Shipping"
              />
              <ParcelShipping />
            </>
          }
        />
        <Route
          path="/packaging-services"
          element={
            <>
              <Hero
                backgroundImage="/images/cards/packaging.jpg"
                overlayText="Packaging Services"
              />
              <Packaging />
            </>
          }
        />
        <Route
          path="/mailbox-services"
          element={
            <>
              <Hero
                backgroundImage="/images/cards/mailbox.jpg"
                overlayText="Mailbox Services / Smart Locker"
              />
              <Mailbox />
            </>
          }
        />
        <Route
          path="/copy-print-scan-shred"
          element={
            <>
              <Hero
                backgroundImage="/images/cards/copy.jpg"
                overlayText="Copy / Print / Scan / Shred"
              />
              <CopyPrint />
            </>
          }
        />
        <Route
          path="/notary-services"
          element={
            <>
              <Hero
                backgroundImage="/images/cards/notary.jpg"
                overlayText="Notary Services"
              />
              <Notary />
            </>
          }
        />
        {/* Large Freight */}
        <Route
          path="/freight-packaging"
          element={
            <>
              <Hero
                backgroundImage="/images/cards/freight.jpg"
                overlayText="Large Freight Packaging"
              />
              <FreightPackaging />
            </>
          }
        />
        <Route
          path="/courier-services"
          element={
            <>
              <Hero
                backgroundImage="/images/cards/courier.jpg"
                overlayText="Courier Services"
              />
              <Courier />
            </>
          }
        />
        <Route
          path="/storage-and-fulfillment"
          element={
            <>
              <Hero
                backgroundImage="/images/cards/storage.jpg"
                overlayText="Storage and Fulfillment"
              />
              <Storage />
            </>
          }
        />
        <Route
          path="/pickup-and-delivery"
          element={
            <>
              <Hero
                backgroundImage="/images/cards/delivery.jpg"
                overlayText="Pickup and Delivery"
              />
              <Pickup />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
