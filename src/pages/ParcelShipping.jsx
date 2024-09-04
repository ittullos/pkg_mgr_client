import React from "react";

function ParcelShipping() {
  return (
    <div className="container my-5 p-5">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <p className="lead">
            At Package Manager, we understand that reliable and efficient parcel
            shipping is crucial for both individuals and businesses. With our
            extensive network of brick-and-mortar locations, we make it
            convenient for you to send packages anywhere in the world. Whether
            you're shipping a small gift to a loved one or managing logistics
            for your business, our dedicated team is here to assist you every
            step of the way. We partner with leading carriers to ensure that
            your packages are delivered on time and in perfect condition.
          </p>
          <div className="text-center pb-1 pt-5">
            <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            />
          </div>
          <p>
            FedEx is renowned for its global reach and fast delivery services.
            At Package Manager, we offer a variety of FedEx shipping options to
            suit your needs, including FedEx Ground, FedEx Express, and FedEx
            International. Whether you need next-day delivery or a
            cost-effective solution for your shipments, FedEx provides reliable
            service with advanced tracking capabilities. With FedEx's extensive
            network, you can be confident that your parcels will reach their
            destination quickly and safely.
          </p>
          <div className="text-center pb-3 pt-5">
            <img
              src="../images/UPS-logo.png"
              alt="UPS Logo"
              className="img-fluid pt-5"
              style={{ maxWidth: "150px", height: "auto" }}
            />
          </div>
          <p>
            UPS is another trusted name in the shipping industry, known for its
            comprehensive logistics solutions and exceptional customer service.
            Package Manager offers UPS services such as UPS Ground, UPS Next Day
            Air, and UPS Worldwide Express, providing a range of options for
            domestic and international shipments. UPS's advanced tracking and
            guaranteed delivery times make it an excellent choice for businesses
            and individuals alike. With UPS, you can expect your parcels to be
            handled with the utmost care and efficiency.
          </p>
          <div className="text-center pb-4 pt-5 pe-1">
            <img
              src="../images/DHL-logo.png"
              alt="DHL Logo"
              className="img-fluid pt-5 pe-1"
              style={{ maxWidth: "325px", height: "auto" }}
            />
          </div>
          <p>
            DHL specializes in international shipping, offering unparalleled
            expertise in cross-border logistics. At Package Manager, we provide
            DHL Express services to ensure your international shipments arrive
            swiftly and securely. DHL's global network spans over 220 countries
            and territories, making it the ideal choice for sending packages to
            virtually any destination. With a focus on speed and reliability,
            DHL ensures that your parcels are delivered on time, even to the
            most remote locations.
          </p>
          <div className="text-center pb-3 pt-5">
            <img
              src="../images/USPS-logo.png"
              alt="USPS Logo"
              className="img-fluid"
              style={{ maxWidth: "280px", height: "auto" }}
            />
          </div>
          <p>
            The United States Postal Service (USPS) is a reliable and
            cost-effective option for domestic and international shipping.
            Package Manager offers a range of USPS services, including Priority
            Mail, Priority Mail Express, and First-Class Mail. USPS is known for
            its extensive delivery network and affordable rates, making it a
            popular choice for everyday shipping needs. Whether you're sending a
            letter or a package, USPS provides dependable service with
            comprehensive tracking and delivery confirmation.
          </p>
          <div className="text-center mb-1 mt-4">
            <img
              src="../pkg-mgr-logo.png"
              alt="Package Manager Logo"
              className="img-fluid"
              style={{ maxWidth: "150px", height: "auto" }}
            />
            <h2>Why Choose Package Manager?</h2>
          </div>
          <p className="lead">
            At Package Manager, we are committed to providing you with the best
            shipping experience possible. Our knowledgeable staff is always
            ready to help you choose the right carrier and shipping option for
            your needs. With multiple locations, flexible hours, and a variety
            of shipping solutions, we make it easy for you to send your parcels
            with confidence. Trust Package Manager to handle your shipping
            needs, and experience the convenience and reliability that our
            customers have come to expect.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ParcelShipping;
