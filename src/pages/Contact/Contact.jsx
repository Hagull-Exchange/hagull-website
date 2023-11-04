import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import "./Contact.css";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.name = contact.name ? "" : "Name is required.";
    tempErrors.email = contact.email
      ? /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(contact.email)
        ? ""
        : "Email is not valid."
      : "Email is required.";
    tempErrors.message = contact.message ? "" : "Message is required.";
    tempErrors.phone = contact.phone
      ? /^\(?([0-9]{3})\)?[- ]?([0-9]{3})[- ]?([0-9]{4})$/.test(contact.phone)
        ? ""
        : "Phone number is not valid."
      : "Phone number is required.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle form submission
      alert("Form submitted successfully!");
      setContact({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  return (
    <>
      <div className="contact-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <form className="contact-form shadow" onSubmit={handleSubmit}>
                <h1 className="mb-3">Contact Us</h1>
                <div className="form-group pb-3">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={contact.name}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.name}</div>
                </div>
                <div className="form-group pb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={contact.email}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.email}</div>
                </div>

                <div className="form-group pb-3">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="phone"
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                    id="phone"
                    name="phone"
                    value={contact.phone}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.phone}</div>
                </div>

                <div className="form-group pb-3">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    rows="3"
                    value={contact.message}
                    onChange={handleChange}
                  ></textarea>
                  <div className="invalid-feedback">{errors.message}</div>
                </div>
                <Button text="Submit" to="#" variant="primary" />
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
