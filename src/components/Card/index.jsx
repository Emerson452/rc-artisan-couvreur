import React from "react";
import "./index.css";

function Card({ background, icon, altIcon, altBackground, title }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={background} alt={altBackground} />
      </div>
      <div className="card-content">
        {icon && <img src={icon} alt={altIcon} />}
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Card;
