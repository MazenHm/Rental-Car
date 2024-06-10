import React from "react";
import Footer from "../Layout/Footer";
import { Link } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="about-section">
        <h1>Contact</h1>
        <p>
          <Link to="/">
            <span>Home</span>
          </Link>
          / Contact
        </p>
        <div className="contact-main">
          <div className="d-flex gap-3 flex-column">
            <h1>Need additional information?</h1>
            <p>
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
            <div className="d-flex flex-column gap-2">
              <div className="d-flex gap-2 align-items-center">
                <i class="fas fa-phone-alt"></i>
                <a>+216 50543162</a>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <i class="far fa-envelope"></i>
                <a>mazen.hammouda@outlook.com</a>
              </div>
              <div className="d-flex gap-2 align-items-center">
                <i class="fas fa-map-marker-alt"></i>
                <a>Belgrade,Serbia</a>
              </div>
            </div>
          </div>
          <div>
            <form className="d-flex gap-4 flex-column">
              <div className="d-flex flex-column gap-2">
                <label>
                  Full Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="E.g:Mazen Hammouda"
                />
              </div>
              <div className="d-flex flex-column gap-2">
                <label>
                  Email <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="youremail@exemple.com"
                />
              </div>
              <div className="d-flex flex-column gap-2">
                <label>
                  Tell us about it <span>*</span>
                </label>
                <textarea name="about" placeholder="Write Here.." />
              </div>
              <div className="d-flex gap-2">
                <button className="d-flex gap-2 align-items-center w-100 justify-content-center">
                  <i class="fas fa-envelope-open-text"></i>Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
