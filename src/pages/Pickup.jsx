import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function Pickup() {
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
            At Package Manager, we understand that transporting large freight
            requires specialized handling, reliable logistics, and a commitment
            to safety. Our large freight pickup and delivery services are
            designed to meet the unique challenges of moving oversized, heavy,
            or high-value shipments. Whether you're shipping industrial
            equipment, large quantities of goods, or bulky items, Package
            Manager offers comprehensive solutions to ensure your freight is
            picked up and delivered with precision and care.
          </p>
          <div className="text-center pb-1 pt-5">
            {/* <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Expert Large Freight Pickup</h3>
          <p className="text-center body-text">
            Our expert pickup services for large freight are tailored to
            accommodate the size, weight, and specific requirements of your
            shipment. We provide professional and reliable pickup solutions that
            are designed to handle everything from oversized equipment to bulk
            goods. Our team of experienced logistics professionals coordinates
            the pickup process efficiently, ensuring that your large freight is
            securely loaded and transported to its destination.
          </p>
          <p className="text-center body-text">
            We offer flexible scheduling to meet your needs, whether you require
            a one-time pickup or regular scheduled services. With Package
            Manager, you can trust that your large freight will be collected on
            time and handled with the utmost attention to detail.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/UPS-logo.png"
              alt="UPS Logo"
              className="img-fluid pt-5"
              style={{ maxWidth: "150px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Reliable Large Freight Delivery</h3>
          <p className="text-center body-text">
            Package Manager’s large freight delivery services are designed to
            ensure that your items reach their destination safely and on
            schedule. We partner with trusted carriers and utilize advanced
            logistics technology to provide a seamless delivery experience.
            Whether you're shipping across the country or internationally, our
            network allows for efficient and reliable transportation of your
            large freight.
          </p>
          <p className="text-center body-text">
            Our delivery services include options for standard, expedited, and
            specialized handling, giving you the flexibility to choose the best
            solution for your specific needs. We understand the importance of
            timely deliveries, and our team is dedicated to ensuring that your
            large freight arrives in perfect condition, exactly when you need
            it.
          </p>
          <div className="text-center pb-4 pt-5 pe-1">
            {/* <img
              src="../images/DHL-logo.png"
              alt="DHL Logo"
              className="img-fluid pt-5 pe-1  dhl-logo"
              style={{ maxWidth: "325px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">
            White Glove Handling for Large Freight
          </h3>
          <p className="text-center body-text">
            For shipments that require extra care, Package Manager offers white
            glove services for large freight. This premium service includes
            meticulous handling, inside delivery, and setup at the final
            destination. Whether you're transporting delicate equipment,
            high-value items, or goods that require specialized care, our white
            glove service ensures that your freight is handled with the highest
            level of professionalism and precision.
          </p>
          <p className="text-center body-text pb-5">
            From careful loading and unloading to secure transport and final
            placement, our white glove service is designed to meet the most
            demanding delivery requirements, providing you with peace of mind
            throughout the process.
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
            Choosing Package Manager for your large freight pickup and delivery
            needs means partnering with a team that prioritizes reliability,
            safety, and customer satisfaction. Our comprehensive services,
            including expert pickup, reliable delivery, and white glove
            handling, ensure that your large freight is transported with care
            and efficiency. With our commitment to quality service, advanced
            logistics, and a focus on meeting your specific needs, Package
            Manager is your trusted partner for all your large freight
            logistics. Experience the difference with Package Manager, where
            your large freight is in expert hands from start to finish.
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

export default Pickup;
