import React from "react";

function ContactForm() {
  return (
    <div>
      <div className="sticky-form-container">
        <h3 className="text-center">Contact Us</h3>
        <form
          action="https://formspree.io/f/mnnardao"
          method="POST"
          className="form"
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" name="name" className="form-control" required />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="_replyto"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              className="form-control"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
