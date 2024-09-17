import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <div
        style={{
          maxWidth: 500,
          margin: "150px auto 0",
        }}
        className="p-3"
      >
        <ContactForm />
      </div>
    </>
  );
}

export default Contact;
