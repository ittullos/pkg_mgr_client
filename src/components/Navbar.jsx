import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = (targetPath) => {
    // Check if the clicked link is not the current page
    if (location.pathname !== targetPath) {
      setIsCollapsed(true); // Close the navbar
    }
  };

  return (
    // Bootstrap Navbar with logo, links, and hamburger menu
    <nav className="navbar navbar-expand-lg navbar-light bg-tertiary position-relative">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          onClick={() => handleLinkClick("/")}
        >
          <img src="pkg-mgr-logo.png" alt="logo" width="120" height="auto" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarColor01"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id="navbarColor01"
        >
          <ul className="navbar-nav mr-auto custom-navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link mx-3"
                to="/"
                onClick={() => handleLinkClick("/")}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mx-3"
                to="/large-freight"
                onClick={() => handleLinkClick("/large-freight")}
              >
                Large Freight
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mx-3"
                to="/retail-shipping"
                onClick={() => handleLinkClick("/retail-shipping")}
              >
                Retail Shipping
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mx-3"
                to="/online-portal"
                onClick={() => handleLinkClick("/online-portal")}
              >
                Online Shipping Portal
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link mx-3"
                to="/contact"
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
