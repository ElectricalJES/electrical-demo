import React from "react";

function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>
        Get in touch with us for electrical products, services, and quotations.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>

          <p>📞 Phone: +91 9444817770</p>
          <p>📧 Email: info@yourcompany.com</p>
          <p>📍 Chennai, Tamil Nadu, India</p>
        </div>

        <div className="contact-form">
          <h2>Send Enquiry</h2>

          <input type="text" placeholder="ChandraMohan" />
          <input type="email" placeholder="chandra.suganthi@gmail.com" />
          <input type="tel" placeholder="9" />
          <textarea placeholder="Your Requirement"></textarea>
          <button>Send Enquiry</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
