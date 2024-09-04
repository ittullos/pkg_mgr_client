import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function Notary() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="container my-5 p-5">
      <div className="row">
        {windowWidth >= 1200 && (
          <div className="col-md-4">
            <div className="sticky-div">
              <ContactForm />
            </div>
          </div>
        )}
        <div className="col-md-8 mx-auto">
          <p className="lead lead-text text-center mt-4">
            At Package Manager, we offer professional notary services to meet
            the needs of individuals and businesses. Our experienced notaries
            are available to assist you with the notarization of a wide range of
            documents, ensuring that your paperwork is legally binding and
            properly executed. Whether you need a simple affidavit notarized or
            more complex legal documents authenticated, Package Manager is here
            to provide reliable and efficient notary services.
          </p>
          <div className="text-center pb-1 pt-5">
            {/* <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Comprehensive Notary Solutions</h3>
          <p className="text-center body-text">
            Our notary services cover a broad spectrum of documents and
            transactions. From affidavits, power of attorney forms, and
            contracts to real estate documents, loan papers, and legal
            declarations, our notaries are equipped to handle all your
            notarization needs. We ensure that each document is notarized
            according to the latest legal requirements, providing you with peace
            of mind that your paperwork is in compliance with all relevant laws
            and regulations.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/UPS-logo.png"
              alt="UPS Logo"
              className="img-fluid pt-5"
              style={{ maxWidth: "150px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">
            Convenient Locations and Flexible Hours
          </h3>
          <p className="text-center body-text">
            We understand that your time is valuable, which is why Package
            Manager offers notary services at multiple convenient locations with
            flexible hours. Whether you need a document notarized during
            business hours, in the evening, or on the weekend, our notaries are
            available to accommodate your schedule. Simply visit any of our
            locations, and our friendly staff will be ready to assist you with
            your notary needs quickly and efficiently.
          </p>
          <div className="text-center pb-4 pt-5 pe-1">
            {/* <img
              src="../images/DHL-logo.png"
              alt="DHL Logo"
              className="img-fluid pt-5 pe-1  dhl-logo"
              style={{ maxWidth: "325px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Certified and Professional Notaries</h3>
          <p className="text-center body-text">
            At Package Manager, we take pride in the professionalism and
            expertise of our certified notaries. Each notary on our team has
            undergone rigorous training and is fully accredited to perform
            notarial acts. Our notaries are knowledgeable about the latest legal
            requirements and are committed to providing accurate and thorough
            notarization services. You can trust Package Manager to handle your
            documents with the highest level of care and confidentiality.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/USPS-logo.png"
              alt="USPS Logo"
              className="img-fluid usps-logo"
              style={{ maxWidth: "280px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Mobile Notary Services</h3>
          <p className="text-center body-text pb-5">
            For added convenience, Package Manager also offers mobile notary
            services. If you are unable to visit one of our locations, our
            mobile notaries can come to your home, office, or any other location
            to perform the notarization. This service is ideal for individuals
            with mobility issues, busy professionals, or those with urgent
            notarization needs. Our mobile notaries bring the same level of
            professionalism and expertise to your doorstep, ensuring that your
            documents are notarized promptly and accurately.
          </p>
          <div className="text-center mb-1 mt-4 pt-4">
            <img
              src="../pkg-mgr-logo.png"
              alt="Package Manager Logo"
              className="img-fluid"
              style={{ maxWidth: "150px", height: "auto" }}
            />
            <h2>Why Choose Package Manager?</h2>
          </div>
          <p className="lead text-center body-text">
            When you choose Package Manager for your notary services, you are
            selecting a trusted partner committed to providing exceptional
            service and convenience. Our comprehensive notary solutions,
            flexible hours, and professional staff ensure that your notarization
            needs are met with efficiency and accuracy. Whether you visit us in
            person or take advantage of our mobile notary services, you can rely
            on Package Manager to deliver reliable and secure notary services.
            Experience the confidence and peace of mind that come with choosing
            Package Manager for all your notarization needs.
          </p>
          {windowWidth < 1200 && (
            <div className="sticky-div">
              <ContactForm />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Notary;
