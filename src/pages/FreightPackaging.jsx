import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function FreightPackaging() {
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
            At Package Manager, we specialize in large freight packaging
            services designed to ensure the safe and efficient handling of
            oversized and heavy shipments. Our expert team provides
            comprehensive solutions for crating and freight shipping, ensuring
            that your large and valuable items are securely packed and
            transported with the highest level of care. With our
            state-of-the-art facilities and extensive industry experience,
            Package Manager is your trusted partner for all your large freight
            packaging needs.
          </p>
          <div className="text-center pb-1 pt-5">
            {/* <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Custom Crating Solutions</h3>
          <p className="text-center body-text">
            Our custom crating services are tailored to meet the unique
            requirements of your large freight shipments. We design and build
            custom crates to provide optimal protection for your oversized and
            delicate items. Whether you need a crate for machinery, industrial
            equipment, or valuable artwork, our team will create a robust and
            secure crate that ensures your items are shielded from damage during
            transit. We use high-quality materials and precise craftsmanship to
            construct crates that meet industry standards and accommodate your
            specific dimensions and requirements.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/UPS-logo.png"
              alt="UPS Logo"
              className="img-fluid pt-5"
              style={{ maxWidth: "150px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Specialized Freight Packaging</h3>
          <p className="text-center body-text">
            In addition to custom crating, Package Manager offers specialized
            freight packaging solutions to handle a wide range of large and
            heavy items. Our packaging services include the use of heavy-duty
            pallets, protective wrapping, and cushioning materials to secure
            your freight. Whether you're shipping bulky equipment, large
            consignments, or fragile components, our expert team will assess
            your needs and provide packaging solutions that offer maximum
            protection and stability. We ensure that your freight is securely
            packaged to prevent shifting and damage during transportation.
          </p>
          <div className="text-center pb-4 pt-5 pe-1">
            {/* <img
              src="../images/DHL-logo.png"
              alt="DHL Logo"
              className="img-fluid pt-5 pe-1  dhl-logo"
              style={{ maxWidth: "325px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Comprehensive Freight Shipping</h3>
          <p className="text-center body-text">
            Our freight shipping services are designed to provide reliable and
            efficient transportation for your large and heavy shipments. We
            offer a range of shipping options, including standard, expedited,
            and specialized freight services, to meet your delivery
            requirements. Package Manager partners with leading carriers to
            provide cost-effective and timely shipping solutions, ensuring that
            your freight reaches its destination safely and on schedule. Our
            advanced logistics network and tracking systems allow you to monitor
            your shipment's progress and stay informed throughout the delivery
            process.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/USPS-logo.png"
              alt="USPS Logo"
              className="img-fluid usps-logo"
              style={{ maxWidth: "280px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Secure and Professional Handling</h3>
          <p className="text-center body-text pb-5">
            At Package Manager, we prioritize the security and professional
            handling of your large freight shipments. Our facilities are
            equipped with advanced security measures and experienced staff to
            manage the safe handling and storage of your items. From the moment
            your freight arrives at our facility until it is delivered to its
            final destination, we ensure that your items are treated with the
            utmost care and attention. Our commitment to quality and security
            guarantees that your large freight is handled with the highest level
            of professionalism.
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
            Choosing Package Manager for your large freight packaging services
            means partnering with a team dedicated to providing exceptional
            crating and shipping solutions. Our custom crating, specialized
            packaging, and comprehensive freight shipping services ensure that
            your oversized and heavy items are protected and delivered
            efficiently. With our state-of-the-art facilities, expert team, and
            commitment to customer satisfaction, Package Manager is your
            reliable partner for all your large freight needs. Experience the
            excellence and reliability that set us apart, and trust Package
            Manager to handle your large freight shipments with the highest
            level of expertise.
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

export default FreightPackaging;
