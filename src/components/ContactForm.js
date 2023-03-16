import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ubf1g8s",
        "template_ka3rzf8",
        form.current,
        "qvVEevIWxcO3L4FpM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="container" id="contact-form">
      <h2 className="contact-heading">Contact Me</h2>
      <Form ref={form} onSubmit={sendEmail}>
        <Form.Group>
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            name="sender_name"
            placeholder="Enter Full Name"
            className="form-entry"
          />
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            type="email"
            name="sender_email"
            placeholder="Enter Email Address"
            className="form-entry"
          />
          <Form.Label className="form-label">Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            placeholder="Subject"
            className="form-entry"
          />
          <Form.Label>Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={7}
            name="message"
            placeholder="Type your message here"
          />
        </Form.Group>
        <Button className="form-control" id="form-button" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
