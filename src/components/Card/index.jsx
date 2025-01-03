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
        <h3>{title}</h3>
        <div className="card-description-content">
          <div className="description-bar" />
          <span>{description}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
