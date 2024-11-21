import React from "react";
import "./Contact.css";
import Popup from "reactjs-popup";

const Contact = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p className="description">
        Our team will reach out to you within 24 hrs.
      </p>

      <div className="contact-section">
        <div className="contact-info">
          <h2>
            Looking for Business Tie-Ups, Hotel Tie Ups, B2B Contracts, etc
          </h2>
          <p>
            Email us:{" "}
            <a href=" info@entrepreneurshipnetwork.net ">
              {" "}
              info@entrepreneurshipnetwork.net{" "}
            </a>
          </p>

          <h2>For Holiday Package Deals, or Flights Deals, etc</h2>
          <p>
            Email us:{" "}
            <a href=" info@entrepreneurshipnetwork.net ">
              {" "}
              info@entrepreneurshipnetwork.net{" "}
            </a>
          </p>

          <h2>Delhi Office Address:</h2>
          <p>New Delhi,India </p>
          <iframe
            title="New Delhi Office Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54092701996!2d77.04383197592139!3d28.527252326223294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1726850552412!5m2!1sen!2sin"
            width="600"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <div className="payment-options">
          <h2>Payment Options:</h2>
          <Popup
            trigger=<button id="Pay_btm"> Payment</button>
            position="right center">
            <div>To be provided on Request</div>
          </Popup>

          <h3>UPI ID / Bank Details</h3>
          <p>To be provided on Request</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
