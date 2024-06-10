import React from "react";
import "./ChooseSection.css";
import ChooseSectionCard from "../components/ChooseSectionCard";

const ChooseSection = () => {
  return (
    <div className="choose-container">
      <div className="d-flex justify-content-center respp">
        <img src="/assets/car/main.70cd75042bdf42515d92.png" alt="" />
      </div>
      <div className="choose-box">
        <div>
          <h4>Why Choose Us</h4>
          <h2>Best valued deals you will ever find</h2>
          <p>
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <div className="finddetails-btn">
            <button>
              Find details <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="d-flex flex-column align-items-center gap-4 resppp">
          <ChooseSectionCard
            image="/assets/car/download (4).png"
            title="Cross Country Drive
"
            description="Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.

"
          />
          <ChooseSectionCard
            image="/assets/car/download (5).png"
            title="All Inclusive Pricing

"
            description="Get everything you need in one convenient, transparent price with our all-inclusive pricing policy."
          />
          <ChooseSectionCard
            image="/assets/car/download (6).png"
            title="No Hidden Charges"
            description="Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing."
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
