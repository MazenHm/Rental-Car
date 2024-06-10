import React from "react";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import ReviewSection from "../Layout/ReviewSection";
import "../styles/Models.css";
import { Link } from "react-router-dom";
const Testimonials = () => {
  return (
    <div>
      <Navbar />
      <div className="models-section">
        <h1>Testimonials</h1>
        <p>
          <Link to="/">
            <span>Home</span>
          </Link>
          / Testimonials
        </p>
        <ReviewSection />
      </div>
      <div className="banner-about">
        <h2>Book a car by getting in touch with us</h2>
        <div className="d-flex gap-3">
          <i class="fas fa-phone-alt"></i>
          <h3 className="m-0">(123) 456-7869</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Testimonials;
