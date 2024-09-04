import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

function RetailMerchandising() {
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
            At Package Manager, we offer a diverse range of retail merchandising
            services to enhance your shopping experience. Our well-stocked
            stores carry a variety of essential products and convenient items,
            making it easy for you to find everything you need in one place.
            From office supplies and packaging materials to greeting cards and
            unique gifts, Package Manager provides a comprehensive selection of
            high-quality merchandise to meet the needs of both individuals and
            businesses.
          </p>
          <div className="text-center pb-1 pt-5">
            {/* <img
              src="../images/FedEx-logo.png"
              alt="FedEx Logo"
              className="img-fluid pt-4"
              style={{ maxWidth: "250px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Office Supplies</h3>
          <p className="text-center body-text">
            Our retail locations are fully equipped with a wide array of office
            supplies to help you stay organized and productive. Whether you need
            pens, paper, binders, or desk accessories, Package Manager has
            everything you need to keep your office running smoothly. Our
            selection of office supplies includes products from trusted brands,
            ensuring you receive the highest quality items for your daily tasks.
            Visit our stores to browse our extensive inventory and find the
            perfect supplies for your home or business office.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/UPS-logo.png"
              alt="UPS Logo"
              className="img-fluid pt-5"
              style={{ maxWidth: "150px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Packaging Materials</h3>
          <p className="text-center body-text">
            At Package Manager, we understand the importance of secure and
            efficient packaging for your shipments. Our stores offer a
            comprehensive range of packaging materials, including boxes, bubble
            wrap, packing peanuts, tape, and labels. Whether you're preparing a
            small parcel or a large shipment, our high-quality packaging
            materials will ensure that your items are well-protected during
            transit. Our knowledgeable staff can also assist you in selecting
            the right materials for your specific needs, providing expert advice
            to ensure your packages are safely and securely packed.
          </p>
          <div className="text-center pb-4 pt-5 pe-1">
            {/* <img
              src="../images/DHL-logo.png"
              alt="DHL Logo"
              className="img-fluid pt-5 pe-1  dhl-logo"
              style={{ maxWidth: "325px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Greeting Cards and Gifts</h3>
          <p className="text-center body-text">
            Our retail merchandising services also include a charming selection
            of greeting cards and gifts for all occasions. Whether you're
            celebrating a birthday, anniversary, holiday, or special milestone,
            Package Manager has the perfect card and gift to express your
            sentiments. From elegant stationery and decorative gift wrap to
            unique and thoughtful presents, our stores are filled with
            delightful options to make any occasion memorable. Explore our
            collection and discover the perfect items to share with your loved
            ones.
          </p>
          <div className="text-center pb-3 pt-5">
            {/* <img
              src="../images/USPS-logo.png"
              alt="USPS Logo"
              className="img-fluid usps-logo"
              style={{ maxWidth: "280px", height: "auto" }}
            /> */}
          </div>
          <h3 className="text-center">Convenience Items</h3>
          <p className="text-center body-text pb-5">
            In addition to our specialized merchandise, Package Manager stores
            offer a variety of convenient items to meet your everyday needs.
            From snacks and beverages to personal care products and travel
            essentials, our retail locations are stocked with a range of
            products to make your shopping experience quick and hassle-free.
            Whether you're picking up a last-minute necessity or simply browsing
            for useful items, Package Manager provides a one-stop-shop for all
            your convenience needs.
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
            Choosing Package Manager for your retail merchandising needs means
            you are opting for quality, variety, and convenience. Our
            well-stocked stores and friendly staff ensure that you have access
            to a wide range of high-quality products, all in one convenient
            location. With multiple locations and flexible hours, Package
            Manager makes it easy for you to find the items you need, when you
            need them. Trust Package Manager for all your retail merchandising
            needs, and experience the exceptional service and diverse selection
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

export default RetailMerchandising;
