import React from "react";
import "./PlanSectionCard.css";
const PlanSectionCard = (props) => {
  return (
    <div className="PlanSectionCard">
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default PlanSectionCard;