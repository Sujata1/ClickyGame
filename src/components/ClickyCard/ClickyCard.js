import React from "react";
import "./ClickyCard.css";

const ClickyCard = props => (

  <div className="card">
    <div className="img-container  shake">
      <img alt={props.name} height="250" src={props.image} onClick={() => props.ifClicked(props.id)} />
    </div>
  </div>
);

export default ClickyCard;
