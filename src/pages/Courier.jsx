import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function Courier() {
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
            At Package Manager, we offer a full spectrum of courier services
            designed to meet your local, long-distance, and specialized delivery
            needs. Our commitment to reliability, speed, and professionalism
            ensures that your documents, packages, and valuable items are
            handled with care and delivered efficiently. Whether you need local
            courier services within your city, long-distance transportation
            across regions, or white glove delivery for high-value items,
            Package Manager is your trusted partner for all your courier needs.
          </p>
          <div className="text-center pb-1 pt-5">
            {/* <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Local Courier Services</h3>
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
          <h3 className="text-center">Long-Distance Courier Services</h3>
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
          <h3 className="text-center">White Glove Courier Services</h3>
          <p className="text-center body-text pb-5">
            For those who prefer a hands-off approach, Package Manager offers
            professional packing services. Our skilled staff will handle the
            entire packing process for you, ensuring that your items are packed
            securely and efficiently. With years of experience in the industry,
            our team knows the best practices for packing a wide range of items,
            from everyday goods to valuable and fragile items. By entrusting us
            with your packaging needs, you can have peace of mind knowing that
            your items are in expert hands.
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
            Choosing Package Manager for your courier services means benefiting
            from a dedicated team that prioritizes reliability, speed, and
            customer satisfaction. Our local, long-distance, and white glove
            courier services are designed to meet your diverse needs with
            precision and care. With multiple locations, flexible scheduling,
            and advanced tracking systems, we make managing your deliveries
            straightforward and stress-free. Trust Package Manager to handle
            your courier needs with professionalism and expertise, and
            experience the exceptional service that distinguishes us from the
            rest.
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

export default Courier;
