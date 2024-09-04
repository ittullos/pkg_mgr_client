import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function Mailbox() {
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
            At Package Manager, we provide convenient and secure mailbox
            services and smart locker solutions to meet the needs of individuals
            and businesses. Our comprehensive services ensure that your mail and
            packages are safely received, stored, and easily accessible at your
            convenience. With multiple brick-and-mortar locations, we offer a
            range of options to enhance your mailing and package management
            experience.
          </p>
          <div className="text-center pb-1 pt-5">
            {/* <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Mailbox Services</h3>
          <p className="text-center body-text">
            Our mailbox services offer a reliable and professional way to manage
            your mail. Whether you need a personal mailbox for your home
            correspondence or a business mailbox for professional use, Package
            Manager has you covered. Our mailboxes provide a secure and private
            address for receiving mail and packages, ensuring that your items
            are safely stored until you can pick them up. Enjoy the peace of
            mind that comes with knowing your mail is secure, and benefit from
            services like mail forwarding, package acceptance from all carriers,
            and notification alerts when you receive new mail.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/UPS-logo.png"
              alt="UPS Logo"
              className="img-fluid pt-5"
              style={{ maxWidth: "150px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Smart Lockers</h3>
          <p className="text-center body-text">
            For ultimate convenience, our smart locker solutions provide a
            modern and secure way to receive packages. With our state-of-the-art
            smart lockers, you can access your parcels 24/7, giving you the
            flexibility to retrieve your items at a time that suits you best.
            When a package arrives, you’ll receive a notification with a unique
            access code, allowing you to pick up your parcel quickly and easily.
            Our smart lockers are designed to accommodate packages of various
            sizes, ensuring that your deliveries are stored securely until you
            can collect them.
          </p>
          <div className="text-center pb-4 pt-5 pe-1">
            {/* <img
              src="../images/DHL-logo.png"
              alt="DHL Logo"
              className="img-fluid pt-5 pe-1  dhl-logo"
              style={{ maxWidth: "325px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Secure and Convenient</h3>
          <p className="text-center body-text">
            Security is a top priority at Package Manager. Our mailbox services
            and smart lockers are designed to provide a safe environment for
            your mail and packages. Our facilities are equipped with advanced
            security measures, including surveillance cameras and secure access
            protocols, to ensure the protection of your items. Additionally, our
            convenient locations and extended hours make it easy for you to
            access your mailbox or smart locker at your convenience, without the
            worry of missed deliveries.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/USPS-logo.png"
              alt="USPS Logo"
              className="img-fluid usps-logo"
              style={{ maxWidth: "280px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Business Solutions</h3>
          <p className="text-center body-text pb-5">
            For businesses, our mailbox services and smart lockers offer a
            professional and efficient way to manage mail and packages. A
            dedicated business mailbox provides a professional address for your
            company, enhancing your business image and ensuring that your mail
            is handled with care. Our smart lockers offer a convenient solution
            for receiving business packages, reducing the need for a dedicated
            mailroom and providing secure storage for important deliveries. Let
            Package Manager help streamline your mail and package management,
            allowing you to focus on your core business activities.
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
            At Package Manager, we are committed to providing exceptional
            mailbox and smart locker services that cater to your needs. Our
            secure and convenient solutions ensure that your mail and packages
            are always accessible and well-protected. With multiple locations,
            flexible access hours, and advanced security features, we make it
            easy for you to manage your mail and packages with confidence. Trust
            Package Manager for all your mailbox and smart locker needs, and
            experience the reliability and convenience that our customers have
            come to expect.
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

export default Mailbox;
