import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    // Bootstrap Navbar with logo, links, and hamburger menu
    <nav className="navbar navbar-expand-lg navbar-light bg-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
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
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/large-freight">
                Large Freight
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/retail-shipping">
                Retail Shipping
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ship">
                Online Shipping Portal
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
