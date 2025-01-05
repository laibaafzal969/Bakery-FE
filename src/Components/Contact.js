import React, { useState } from "react";
import CreditPopup from "./Popups";
import "./contact.css";
import { usePost } from "../api/useApi";
import Alert from "react-bootstrap/Alert";

const Contact = () => {
  const [alert, setAlert] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { mutate, isLoading } = usePost("/api/contacts", {
    onSuccess: () => {
      setAlert({
        type: "success",
        message: `Your query has been sent. We will get back to you soon!`,
      });
      setTimeout(() => setAlert(null), 3000);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    },
    onError: (error) => {
      setAlert({
        type: "danger",
        message: `Failed to send your message. ${error.message}`,
      });
      setTimeout(() => setAlert(null), 3000);
    },
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
    mutate(data);
  };

  return (
    <div id="contact">
      <div className="d-flex flex-column bd-highlight mb-3 contact-bg">
        <div className="flex-fill mt-5">
          <form className="react-form" method="post" onSubmit={handleSubmit}>
            <h1 id="formTitle">Contact</h1>
            {alert && <Alert variant={alert.type}>{alert.message}</Alert>}

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
