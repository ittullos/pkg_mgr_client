import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NavigationBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = (targetPath) => {
    // Check if the clicked link is not the current page
    if (location.pathname !== targetPath) {
      navigate(targetPath);
      setIsCollapsed(true); // Close the navbar
    }
  };

  return (
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
              <NavDropdown
                title="Retail Services"
                id="basic-nav-dropdown"
                className="mx-3 nav-dropdown-menu"
              >
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/parcel-shipping")}
                >
                  Parcel Shipping
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/packaging-services")}
                >
                  Packaging Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/mailbox-services")}
                >
                  Mailbox Services / Smart Locker
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/copy-print-scan-shred")}
                >
                  Copy / Print / Scan / Shred
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/notary-services")}
                >
                  Notary Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/retail-merchandising")}
                >
                  Retail Merchandising
                </NavDropdown.Item>
              </NavDropdown>
            </li>
            <li className="nav-item">
              <NavDropdown
                title="Large Freight"
                id="basic-nav-dropdown"
                className="mx-3 nav-dropdown-menu"
              >
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/freight-packaging")}
                >
                  Packaging Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/courier-services")}
                >
                  Courier Services
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/storage-and-fulfillment")}
                >
                  Storage and Fulfillment
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => handleLinkClick("/pickup-and-delivery")}
                >
                  Pickup and Delivery Services
                </NavDropdown.Item>
              </NavDropdown>
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

export default NavigationBar;
