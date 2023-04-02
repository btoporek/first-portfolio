import React from "react";
import "../styles/Contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact">
      <div className="container" id="contact-wrapper">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
