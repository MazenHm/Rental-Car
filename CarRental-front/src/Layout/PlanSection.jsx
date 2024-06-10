import React from "react";
import "./PlanSection.css";
import PlanSectionCard from "./PlanSectionCard";

const PlanSection = () => {
  return (
    <div className="plan-container">
      <h3>Plan your trip now</h3>
      <h1>Quick & easy car rental</h1>
      <div className="plan-container-boxes">
        <PlanSectionCard
          image="/assets/car/download (1).png"
          name="Select Car"
          description="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
        />
        <PlanSectionCard
          image="/assets/car/download (2).png"
          name="Contact Operator
              "
          description="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
        />
        <PlanSectionCard
          image="/assets/car/download (3).png"
          name="Let's Drive
              "
          description="Whether you're hitting the open road, we've got you covered with our wide range of cars"
        />
      </div>
    </div>
  );
};

export default PlanSection;
