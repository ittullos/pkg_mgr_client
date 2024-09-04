import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function Storage() {
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
            At Package Manager, we offer comprehensive storage and fulfillment
            solutions designed to streamline your business operations and
            enhance your supply chain efficiency. Our services cater to the
            needs of businesses of all sizes, providing secure storage for
            pallets and efficient order fulfillment processes. With our
            state-of-the-art facilities and dedicated team, Package Manager
            ensures that your inventory is managed professionally and your
            orders are processed with precision.
          </p>
          <div className="text-center pb-1 pt-5">
            {/* <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Secure Pallet Storage</h3>
          <p className="text-center body-text">
            Our secure pallet storage solutions are designed to accommodate
            businesses with large volumes of inventory. Our facilities are
            equipped with advanced storage systems that ensure your pallets are
            safely and efficiently stored. We offer a range of storage options,
            including climate-controlled environments for sensitive goods and
            high-density shelving for maximizing space. Our inventory management
            system allows for real-time tracking and easy retrieval of your
            pallets, ensuring that your stock is well-organized and accessible
            when needed.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/UPS-logo.png"
              alt="UPS Logo"
              className="img-fluid pt-5"
              style={{ maxWidth: "150px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Efficient Fulfillment for Businesses</h3>
          <p className="text-center body-text">
            Package Manager’s fulfillment services are tailored to meet the
            diverse needs of businesses, from small startups to large
            enterprises. Our comprehensive fulfillment solutions cover every
            aspect of the order processing lifecycle, including receiving,
            inventory management, picking, packing, and shipping. We use
            advanced technology to manage your inventory accurately and
            efficiently, ensuring that orders are processed quickly and with
            precision. Our team handles all aspects of fulfillment with
            attention to detail, providing you with a seamless experience that
            enhances customer satisfaction.
          </p>
          <div className="text-center pb-4 pt-5 pe-1">
            {/* <img
              src="../images/DHL-logo.png"
              alt="DHL Logo"
              className="img-fluid pt-5 pe-1  dhl-logo"
              style={{ maxWidth: "325px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Custom Fulfillment Solutions</h3>
          <p className="text-center body-text">
            We understand that each business has unique fulfillment needs, which
            is why we offer customizable solutions to match your specific
            requirements. Whether you need kitting and assembly, custom
            packaging, or special handling for fragile items, our team can
            tailor our services to suit your operations. We work closely with
            you to develop a fulfillment strategy that aligns with your business
            goals, providing flexible and scalable solutions that adapt to your
            changing needs.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/USPS-logo.png"
              alt="USPS Logo"
              className="img-fluid usps-logo"
              style={{ maxWidth: "280px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Advanced Tracking and Reporting</h3>
          <p className="text-center body-text pb-5">
            At Package Manager, we prioritize transparency and efficiency in our
            storage and fulfillment services. Our advanced tracking systems
            provide real-time visibility into your inventory and order status,
            allowing you to monitor and manage your stock effectively. We offer
            detailed reporting and analytics to help you gain insights into your
            fulfillment operations, identify trends, and make informed
            decisions. Our dedicated customer support team is always available
            to assist with any inquiries or issues, ensuring a smooth and
            hassle-free experience.
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
            Choosing Package Manager for your storage and fulfillment needs
            means partnering with a team committed to delivering excellence and
            reliability. Our secure pallet storage, efficient fulfillment
            services, and customizable solutions ensure that your inventory is
            managed professionally and your orders are processed with the
            highest level of accuracy. With state-of-the-art facilities,
            advanced technology, and a focus on customer satisfaction, Package
            Manager provides the comprehensive support you need to optimize your
            supply chain and grow your business. Experience the exceptional
            service and expertise that set us apart, and trust Package Manager
            to handle your storage and fulfillment needs with the utmost care.
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

export default Storage;
