import React from "react";
import "./ChooseSectionCard.css";
const ChooseSectionCard = (props) => {
  return (
    <div className="choose-card-container">
      <div className="d-flex align-items-center gap-3 choosecard">
        <img src={props.image} alt="" />

        <div className="d-flex flex-column">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ChooseSectionCard;
