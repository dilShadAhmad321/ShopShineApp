import React, { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would handle the form submission, e.g., send data to a server
    console.log("Form submitted:", { name, email, subject, message });
  };

  return (
    <div className="contact-container">
      <div className="form-section">
        <h2>Get in touch</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input className="contactForm"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input className="contactForm"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="subject">Subject:</label>
            <input className="contactForm"
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message:</label>
            <textarea className="contactForm"
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <div className="contact-info-section">
        <h2>Contact us</h2>
        <ul>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>
              Address: Golmuri, Jamshedpur, Jharkhand, India 
            </span>
          </li>
          <li>
            <i className="fas fa-phone-alt"></i>
            <span>Phone: +1235 2355 98</span>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <span>Email: info@shopshine.com</span>
          </li>
          <li>
            <i className="fas fa-globe"></i>
            <span>Website: ShopShine.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
