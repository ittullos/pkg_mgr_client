import React from "react";
import ContactForm from "../components/ContactForm";
import { useState, useEffect } from "react";

const retailServices = [
  {
    title: "Parcel Shipping",
    description:
      "Whether you're sending a small package or a large shipment, Package Manager offers reliable parcel shipping services through leading carriers such as FedEx, UPS, DHL, and USPS. We ensure your parcels are delivered quickly and safely, domestically and internationally.",
    image: "/images/cards/parcel.jpg",
    link: "/parcel-shipping",
  },
  {
    title: "Packaging Services",
    description:
      "Our professional packaging services guarantee that your items are securely packed for transit. From fragile items to large freight, we use high-quality materials and expert techniques to protect your shipments.",
    image: "/images/cards/packaging.jpg",
    link: "/packaging-services",
  },
  {
    title: "Mailbox Services / Smart Locker",
    description:
      "Enjoy the convenience and security of our mailbox services and smart lockers. Receive packages and mail at your convenience, with flexible access hours and secure storage solutions.",
    image: "/images/cards/mailbox.jpg",
    link: "/mailbox-services",
  },
  {
    title: "Copy / Print / Scan / Shred",
    description:
      "Package Manager provides a full suite of document management services, including copying, printing, scanning, and shredding. Whether for personal or business needs, our services ensure your documents are handled with care and confidentiality.",
    image: "/images/cards/copy.jpg",
    link: "/copy-print-scan-shred",
  },
  {
    title: "Notary Services",
    description:
      "Our certified notaries offer reliable and convenient notary services for all your important documents. From legal forms to contracts, we provide professional notary services to ensure your documents are legally compliant.",
    image: "/images/cards/notary.jpg",
    link: "/notary-services",
  },
  {
    title: "Retail Merchandising",
    description:
      "Enhance your brand with our specialized retail merchandising services. We create, produce, and ship high-quality merchandise tailored to your business needs, helping you stand out in the marketplace.",
    image: "/images/cards/merchandising.jpg",
    link: "/retail-merchandising",
  },
];

const freightServices = [
  {
    title: "Large Freight Packaging Services",
    description:
      "Package Manager offers expert large freight packaging solutions, including custom crating and specialized freight shipping. We handle your oversized and heavy shipments with precision and care, ensuring safe delivery.",
    image: "/images/cards/freight.jpg",
    link: "/freight-packaging",
  },
  {
    title: "Courier Services",
    description:
      "Our comprehensive courier services cover local, long-distance, and white glove deliveries. We ensure that your documents and packages are delivered promptly and securely, meeting all your courier needs with reliability and efficiency.",
    image: "/images/cards/courier.jpg",
    link: "/courier-services",
  },
  {
    title: "Storage and Fulfillment",
    description:
      "Optimize your supply chain with our storage and fulfillment services. From secure pallet storage to efficient order fulfillment, Package Manager provides scalable solutions that streamline your operations and enhance customer satisfaction.",
    image: "/images/cards/storage.jpg",
    link: "/storage-and-fulfillment",
  },
  {
    title: "Pickup and Delivery Services",
    description:
      "Our flexible and reliable pickup and delivery services cater to both local and long-distance needs. We handle your items with the utmost care, ensuring they are collected and delivered on time and in perfect condition.",
    image: "/images/cards/delivery.jpg",
    link: "/pickup-and-delivery",
  },
];

function Home() {
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
    <div>
      <div className="container my-5">
        <div className="row">
          {windowWidth >= 1200 && (
            <div className="col-md-4">
              <div className="sticky-div">
                <ContactForm />
              </div>
            </div>
          )}
          <div className="col-md-8 mx-auto">
            <h1 className="text-center my-5">Welcome to Package Manager</h1>
            <img
              src="/images/pkg-mgr-1.jpg"
              className="img-fluid d-block mx-auto"
              alt="Package Manager"
            />
            <div style={{ maxWidth: 475 }} className="mx-auto text-center">
              <p className="lead mt-4">
                At Package Manager, we are dedicated to providing a
                comprehensive range of logistics and shipping solutions tailored
                to meet the diverse needs of individuals and businesses. With
                multiple brick-and-mortar locations and a commitment to
                exceptional service, Package Manager is your trusted partner for
                all your packaging, shipping, and fulfillment needs.
              </p>
            </div>
            <div className="mt-5"></div>
            <h1 className="text-center my-5">Our Services</h1>
            <h3 className="text-dark mt-4 mb-2 pb-3 ps-3 card-header">
              Retail Services
            </h3>
            <div className="row">
              {retailServices.map((retailService, index) => (
                <div className="col-12 col-xl-6 mb-4 px-4 py-3" key={index}>
                  <a href={retailService.link} className="text-decoration-none">
                    <div className="card h-100 green-border mb-3 shadow card-hover">
                      <img
                        src={retailService.image}
                        className="card-img-top"
                        alt={retailService.title}
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                      <div className="card-header">
                        <h5 className="card-title pt-2 green-header">
                          {retailService.title}
                        </h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">{retailService.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            <h3 className="text-dark mt-5 pb-3 ps-3 card-header">
              Large Freight
            </h3>
            <div className="row">
              {freightServices.map((freightService, index) => (
                <div className="col-12 col-xl-6 mb-4 px-4 py-3" key={index}>
                  <a
                    href={freightService.link}
                    className="text-decoration-none"
                  >
                    <div className="card h-100 green-border shadow card-hover mx-auto">
                      <img
                        src={freightService.image}
                        className="card-img-top"
                        alt={freightService.title}
                        style={{ height: "300px", objectFit: "cover" }}
                      />
                      <div className="card-header green-header">
                        <h5 className="card-title pt-2">
                          {freightService.title}
                        </h5>
                      </div>
                      <div className="card-body">
                        <p className="card-text">
                          {freightService.description}
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
            {windowWidth < 1200 && (
              <div className="sticky-div">
                <ContactForm />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

{
  /* <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScYQNWcd3Kbz2mkr9fbHnBL8Ilq954KHjClQ5kwqxDIfEHZbA/viewform?embedded=true"
                width="600"
                height="700"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                title="Contact Us"
              >
                Loading…
              </iframe> */
}
