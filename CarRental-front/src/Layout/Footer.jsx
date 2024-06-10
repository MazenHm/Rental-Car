import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <div className="footer-box">
          <div className="d-flex flex-column gap-1 footer-items ">
            <h2>CAR Rental</h2>
            <p>
              We offers a big range of vehicles for all your driving needs. We
              have the perfect car to meet your needs.
            </p>
            <a> (123) -456-789</a>
            <a> carrental@gmail.com</a>
            <a> Design by XpeedStudio</a>
          </div>
          <div className="d-flex flex-column gap-1 footer-items">
            <h2>COMPANY</h2>
            <a> (123) -456-789</a>
            <a> (123) -456-789</a>
            <a> carrental@gmail.com</a>
            <a> Design by XpeedStudio</a>
          </div>
          <div className="d-flex flex-column gap-1 footer-items">
            <h2>WORKING HOURS</h2>
            <a> (123) -456-789</a>
            <a> (123) -456-789</a>
            <a> carrental@gmail.com</a>
          </div>
          <div className="d-flex flex-column gap-1 footer-items">
            <h2>SUBSCRIPTION</h2>
            <p> Subscribe your Email address for latest news & updates.</p>
            <input
              type="text"
              placeholder="Enter Email Address"
              className="mb-2"
            />
            <button className="rounded-0 w-80">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
