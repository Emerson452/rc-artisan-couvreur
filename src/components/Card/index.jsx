import React from "react";
import "./index.scss";
import Button from "../Button";

function Card({ background, altBackground, title, description }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={background} alt={altBackground} />
      </div>
      <div className="card-content">
        <h5>{title}</h5>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default Card;
