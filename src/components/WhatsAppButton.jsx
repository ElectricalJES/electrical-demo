import React from "react";

function WhatsAppButton() {
  const phoneNumber = "9444817770";

  const message =
    "Hello, I would like to know more about your electrical products and services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat with us on WhatsApp"
    >
      💬
    </a>
  );
}

export default WhatsAppButton;
