import React from "react";
import "./index.css";

function Step({ number, title, text }) {
  return (
    <div className="step">
      <div className="step-number">{number}</div>
      <div className="step-title">{title}</div>
      <div className="step-text">{text}</div>
    </div>
  );
}

export default Step;
