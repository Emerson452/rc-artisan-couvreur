import React from "react";
import "./index.css";

function Card({ image, altText, title }) {
  return (
    <div className="card">
      <img src={image} alt={altText} />
      <div>
        <span>{title}</span>
      </div>
    </div>
  );
}

export default Card;
