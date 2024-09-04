import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function CopyPrint() {
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
            At Package Manager, we provide a comprehensive suite of copy, print,
            scan, and shred services to meet the needs of individuals and
            businesses alike. Our state-of-the-art equipment and experienced
            staff ensure that your documents are handled with the utmost care
            and precision. Whether you need to print important business
            documents, scan and digitize records, make copies of important
            papers, or securely shred sensitive information, Package Manager is
            here to assist you with all your document management needs.
          </p>
          <div className="text-center pb-1 pt-5">
            {/* <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Copy Services</h3>
          <p className="text-center body-text">
            Our copy services offer high-quality reproductions of your
            documents, ensuring that every detail is captured with precision.
            Whether you need black and white or color copies, single-sided or
            double-sided, we have the equipment and expertise to meet your
            needs. From small copy jobs to large volume projects, our team is
            dedicated to providing fast and efficient service. Bring in your
            documents, and we will produce crisp, clear copies that meet your
            exact specifications.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/UPS-logo.png"
              alt="UPS Logo"
              className="img-fluid pt-5"
              style={{ maxWidth: "150px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Print Services</h3>
          <p className="text-center body-text">
            Package Manager’s print services cater to a wide range of printing
            needs, from everyday documents to professional marketing materials.
            We offer various printing options, including digital printing, large
            format printing, and custom printing solutions. Whether you need
            flyers, brochures, business cards, banners, or posters, our
            high-quality printing services will help you make a lasting
            impression. With a variety of paper types and finishes available, we
            ensure that your printed materials are tailored to your specific
            requirements.
          </p>
          <div className="text-center pb-4 pt-5 pe-1">
            {/* <img
              src="../images/DHL-logo.png"
              alt="DHL Logo"
              className="img-fluid pt-5 pe-1  dhl-logo"
              style={{ maxWidth: "325px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Scan Services</h3>
          <p className="text-center body-text">
            Our scan services make it easy to digitize your documents, providing
            you with electronic copies that are easy to store, share, and
            manage. We use advanced scanning technology to produce
            high-resolution digital files of your documents, photos, and other
            materials. Whether you need to scan a single page or an entire
            archive, our team is equipped to handle projects of any size.
            Scanning your documents not only helps reduce physical storage space
            but also ensures that your important information is easily
            accessible and secure.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/USPS-logo.png"
              alt="USPS Logo"
              className="img-fluid usps-logo"
              style={{ maxWidth: "280px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Shred Services</h3>
          <p className="text-center body-text pb-5">
            At Package Manager, we understand the importance of protecting your
            sensitive information. Our shred services provide a secure and
            convenient way to dispose of confidential documents, helping you
            prevent identity theft and maintain privacy. Whether you have a few
            documents or large quantities of paper to shred, our
            industrial-grade shredders ensure that your information is
            thoroughly destroyed. Bring your documents to any of our locations,
            and our staff will handle the shredding process with the highest
            level of security and confidentiality.
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
            Choosing Package Manager for your copy, print, scan, and shred needs
            means you are opting for convenience, quality, and reliability. Our
            comprehensive services are designed to meet the diverse needs of our
            customers, providing professional solutions with a personal touch.
            With multiple locations and flexible hours, we make it easy for you
            to access our services at your convenience. Trust Package Manager to
            handle your document management needs, and experience the
            exceptional service and attention to detail that our customers have
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

export default CopyPrint;
