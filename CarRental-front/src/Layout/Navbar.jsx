import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="container-car">
      <div>
        <Link to="/">
          <img
            className="img-logo"
            src="/assets/car/logo.0ad964cb93ab30cc809d.png"
            alt="logo-img"
          />
        </Link>
      </div>
      <div>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/models">
            <li>Vehicle Models</li>
          </Link>
          <Link to="/testimonials">
            <li>Testimonials</li>
          </Link>
          <li>Our Team</li>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
      <div className="d-flex gap-4 alig-items-center">
        <h6>Sign in</h6>
        <button>register</button>
      </div>
    </div>
  );
};

export default Navbar;
