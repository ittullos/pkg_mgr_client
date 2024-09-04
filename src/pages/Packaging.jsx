import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function Packaging() {
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
            At Package Manager, we understand that proper packaging is essential
            for the safe and secure delivery of your parcels. Our comprehensive
            packaging services are designed to meet the needs of both
            individuals and businesses, ensuring that your items are
            well-protected during transit. With our team of experienced
            professionals and a wide range of packaging materials, we provide
            customized solutions to guarantee your items arrive in perfect
            condition.
          </p>
          <div className="text-center pb-1 pt-5">
            {/* <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Custom Packaging Solutions</h3>
          <p className="text-center body-text">
            No two shipments are alike, and at Package Manager, we recognize the
            importance of tailored packaging solutions. Our experts will assess
            the specific requirements of your items and create custom packaging
            that offers maximum protection. From delicate glassware to bulky
            equipment, we have the materials and expertise to handle it all. We
            offer a variety of packaging options, including custom boxes, padded
            envelopes, and specialty packing materials, to ensure your items are
            securely packed and ready for shipping.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/UPS-logo.png"
              alt="UPS Logo"
              className="img-fluid pt-5"
              style={{ maxWidth: "150px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Packing Materials</h3>
          <p className="text-center body-text">
            We provide a vast selection of high-quality packing materials to
            suit all your packaging needs. Our inventory includes sturdy boxes,
            bubble wrap, packing peanuts, foam inserts, and tape. Whether you're
            shipping fragile items that require extra cushioning or sturdy goods
            that need robust support, we have the right materials to ensure your
            items are protected. Our team is always available to advise you on
            the best packing materials for your specific shipment, ensuring
            optimal safety during transit.
          </p>
          <div className="text-center pb-4 pt-5 pe-1">
            {/* <img
              src="../images/DHL-logo.png"
              alt="DHL Logo"
              className="img-fluid pt-5 pe-1  dhl-logo"
              style={{ maxWidth: "325px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Professional Packing Services</h3>
          <p className="text-center body-text">
            For those who prefer a hands-off approach, Package Manager offers
            professional packing services. Our skilled staff will handle the
            entire packing process for you, ensuring that your items are packed
            securely and efficiently. With years of experience in the industry,
            our team knows the best practices for packing a wide range of items,
            from everyday goods to valuable and fragile items. By entrusting us
            with your packaging needs, you can have peace of mind knowing that
            your items are in expert hands.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/USPS-logo.png"
              alt="USPS Logo"
              className="img-fluid usps-logo"
              style={{ maxWidth: "280px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Eco-Friendly Options</h3>
          <p className="text-center body-text pb-5">
            At Package Manager, we are committed to sustainability and offer
            eco-friendly packaging options to reduce environmental impact. Our
            selection of recyclable and biodegradable packing materials allows
            you to choose environmentally responsible solutions without
            compromising on quality. We continuously seek innovative ways to
            minimize waste and promote sustainability in our packaging services,
            helping you to make greener choices for your shipments.
          </p>
          <div className="text-center mb-1 mt-5 pt-4">
            <img
              src="../pkg-mgr-logo.png"
              alt="Package Manager Logo"
              className="img-fluid"
              style={{ maxWidth: "150px", height: "auto" }}
            />
            <h2>Why Choose Package Manager?</h2>
          </div>
          <p className="lead text-center body-text">
            Choosing Package Manager for your packaging needs means you are
            opting for convenience, reliability, and expertise. Our
            comprehensive packaging services are designed to provide you with
            the best possible protection for your items, ensuring they reach
            their destination in perfect condition. With multiple locations and
            a wide range of materials and services, we make it easy for you to
            find the right packaging solution. Trust Package Manager for all
            your packaging needs and experience the professionalism and care
            that our customers have come to expect.
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

export default Packaging;
