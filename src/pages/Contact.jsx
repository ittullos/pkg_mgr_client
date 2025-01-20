import React, { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1203);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1203);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "center",
        alignItems: isMobile ? "center" : "flex-start",
        marginTop: "150px",
      }}
    >
      <div style={{ flex: 1, display: isMobile ? "none" : "block" }}></div>
      <div
        style={{
          flex: isMobile ? "none" : 1.5,
          marginRight: isMobile ? "0" : "50px",
          textAlign: "center",
          marginBottom: isMobile ? "20px" : "0",
        }}
      >
        <h2>Contact Information</h2>
        <p>Package Manager</p>
        <p>111 Northview St. Suite B</p>
        <p>Knoxville, TN 37919</p>
        <p>(865) 584-3000</p>
        <p>info@packagemanager.net</p>
        <h3>Hours</h3>
        <p>M-F 8:30 AM - 6 PM</p>
        <p>Sat 10 AM - 3 PM</p>
        <p>Sun Closed</p>
      </div>
      <div
        style={{
          flex: isMobile ? "none" : 1.3,
          maxWidth: isMobile ? "500px" : "700px",
          width: "100%",
        }}
      >
        <ContactForm />
      </div>
      <div style={{ flex: 1, display: isMobile ? "none" : "block" }}></div>
      <div style={{ height: "500px" }}></div>
    </div>
  );
}

export default Contact;
