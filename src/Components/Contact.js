import React, { useState } from "react";
import { CreditPopup } from "./Popups";
import "./contact.css";
import $ from "jquery";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    $.ajax({
      type: "POST",
      url: "https://ba8lbixyll.execute-api.us-east-1.amazonaws.com/prod",
      dataType: "json",
      crossDomain: "true",
      contentType: "application/json; charset=utf-8",
      data: JSON.stringify(data),
      success: function () {
        // clear form and show a success message
        alert("Thanks!");
      },
      error: function () {
        // show an error message
        alert("Something went wrong. Please try again.");
      },
    });
  };

  return (
    <div id="contact">
      <div className="d-flex flex-column bd-highlight mb-3 contact-bg">
        <div className="flex-fill">
          <form className="react-form" method="post" onSubmit={handleSubmit}>
            <h1 id="formTitle">Contact</h1>

            <fieldset className="form-group">
              <label>Name:</label>
              <input
                id="formName"
                className="form-input"
                name="name"
                type="text"
                required
                onChange={handleChange}
                value={formData.name}
              />
            </fieldset>

            <fieldset className="form-group">
              <label>Email:</label>
              <input
                id="formEmail"
                className="form-input"
                name="email"
                type="email"
                required
                onChange={handleChange}
                value={formData.email}
              />
            </fieldset>

            <fieldset className="form-group">
              <label>Subject:</label>
              <input
                id="formSubject"
                className="form-input"
                name="subject"
                type="text"
                required
                onChange={handleChange}
                value={formData.subject}
              />
            </fieldset>

            <fieldset className="form-group">
              <label>Message:</label>
              <textarea
                id="formMessage"
                className="form-textarea"
                name="message"
                required
                onChange={handleChange}
                value={formData.message}
              ></textarea>
            </fieldset>

            <div className="form-group">
              <button id="formButton" className="form-btn" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="ml-auto p-2 bd-highlight">
          <CreditPopup
            credit={
              <a id="photoCredit" href="https://unsplash.com/@nevenkrcmarek">
                Photo by Laiba Afzal on Unsplash
              </a>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
