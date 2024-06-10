import React from "react";
import './HeroSection.css'
const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h4>Plan your trip now</h4>
        <h1>
          Save <span>big</span> with our car rental
        </h1>
        <p>
          Rent the car of your dreams. Unbeatable prices, unlimited miles,
          flexible pick-up options and much more.
        </p>
        <div className="d-flex gap-3 resp">
          <button className="d-flex gap-2  align-items-center fw-bolder">
            Book Ride <i class="fas fa-chevron-circle-down"></i>
          </button>
          <button className="d-flex gap-2 align-items-center bg-dark fw-bolder">
            Learn More <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div>
        <div className="car-img">
          <img src="/assets/car/car.png" alt="car-img" />
        </div>
        <div className="shape-img">
          <img src="/assets/car/shape.png" alt="shape-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
