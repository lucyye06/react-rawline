import React, { useState } from "react";

type ContactProps = {
  closeModal: () => void;
  showContactToast: (message: string) => void; // Pass this from App.tsx
};

function Contact({ closeModal, showContactToast }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields!");
      return;
    }

    // Reset form
    setName("");
    setEmail("");
    setMessage("");

    // Show Contact toast
    showContactToast("Message sent successfully!");

    // Close modal immediately
    closeModal();
  };

  return (
    <div id="contact" className="contact-card">
      <span className="close-x" onClick={closeModal}>×</span>

      <h2>Contact Us</h2>
      <p className="contact-sub">
        Send us your concerns and we'll get back to you!
      </p>

      <form id="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit" className="send-btn">
          Send Message
        </button>
      </form>

      <div className="divider"></div>

      <div className="contact-socials">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/fb1.png" alt="Facebook" />
        </a>

        <a
          href="https://www.instagram.com/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/ig.png" alt="Instagram" />
        </a>

        <a
          href="https://x.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/twit.png" alt="Twitter" />
        </a>
      </div>
    </div>
  );
}

export default Contact;