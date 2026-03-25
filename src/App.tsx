import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Chatbot from "./components/Chatbot";
import "./App.css";

function App() {
  const [showContact, setShowContact] = useState(false);
  const [showAuth, setShowAuth] = useState(false);

  const modalOpen = showContact || showAuth;
  // Add-to-Cart toast
  const [toastMessage, setToastMessage] = useState("");
  // Contact form toast
  const [contactToastMessage, setContactToastMessage] = useState("");

  const openContact = () => setShowContact(true);
  const closeContact = () => setShowContact(false);

  const openAuth = () => setShowAuth(true);
  const closeAuth = () => setShowAuth(false);

  // Automatically hide Add-to-Cart toast after 2.5s
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  // Automatically hide Contact toast after 2.5s
  useEffect(() => {
    if (contactToastMessage) {
      const timer = setTimeout(() => setContactToastMessage(""), 2500);
      return () => clearTimeout(timer);
    }
  }, [contactToastMessage]);

  // Functions to trigger toasts
  const showToast = (message: string) => setToastMessage(message);
  const showContactToast = (message: string) => setContactToastMessage(message);

  return (
    <div className="home-page">
     <Header 
    openContact={openContact} 
    openAuth={openAuth} 
    modalOpen={modalOpen} 
/>

      <Home />
      <About />
      
<Chatbot />
      
      <Product showToast={showToast} />

      {/* CONTACT MODAL */}
      {showContact && (
        <div className="contact-overlay">
          <Contact
            closeModal={closeContact}
            showContactToast={showContactToast}
          />
        </div>
      )}

      {showAuth && (
  <Login
    closeModal={closeAuth}
    showSignup={() => {}}
  />
)}
      {/* ADD-TO-CART GLOBAL TOAST */}
      <div className={`toast ${toastMessage ? "show" : "hidden"}`}>
        {toastMessage}
      </div>

      {/* CONTACT FORM GLOBAL TOAST */}
      <div
        id="contactToast"
        className={contactToastMessage ? "show" : "hidden"}
      >
        {contactToastMessage}
      </div>
      <Chatbot />
    </div>
    
  );
}

export default App;