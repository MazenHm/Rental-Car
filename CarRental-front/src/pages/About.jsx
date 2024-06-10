import React from "react";
import Navbar from "../Layout/Navbar";
import "../styles/About.css";
import PlanSection from "../Layout/PlanSection";
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about-section">
        <h1>About</h1>
        <p>
          <Link to="/">
            <span>Home</span>
          </Link>
          / Contact
        </p>
        <div className="about-main">
          <img src="/assets/car/about.jpg" alt="" />
          <div className="about-box">
            <h3>About Company</h3>
            <h2>You start the engine and your adventure begins</h2>
            <p>
              Certain but she but shyness why cottage. Guy the put instrument
              sir entreaties affronting. Pretended exquisite see cordially the
              you. Weeks quiet do vexed or whose. Motionless if no to affronting
              imprudence no precaution. My indulged as disposal strongly
              attended.
            </p>
            <div className="about-main-icons">
              <div className="d-flex flex-column gap-2">
                <img src="/assets/car/download (7).png" alt="" />
                <div className="d-flex gap-2">
                  <h1>20</h1>
                  <p>
                    Car <br />
                    Types
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <img
                  src="/assets/car/download (8).png"
                  alt=""
                  height="43"
                  width="70"
                />
                <div className="d-flex gap-2">
                  <h1>20</h1>
                  <p>
                    Rental <br />
                    Outlets
                  </p>
                </div>
              </div>
              <div className="d-flex flex-column gap-2">
                <img src="/assets/car/download (9).png" alt="" />
                <div className="d-flex gap-2">
                  <h1>20</h1>
                  <p>
                    Repair <br />
                    Shop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PlanSection />
      <Footer />
    </div>
  );
};

export default About;
