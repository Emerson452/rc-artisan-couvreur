import React from "react";
import "./index.scss";

const Button = ({
  variant = "primary",
  children,
  onClick,
  value = undefined,
  type = undefined,
  disabled = false,
  label,
}) => {
  return (
    <button
      className={`button ${variant} ${disabled ? "disabled" : ""}`}
      onClick={onClick}
      type={type}
      value={value}
      disabled={disabled}
    >
      {label}
      {children}
    </button>
  );
};

Button.Primary = (props) => {
  return <Button variant="primary" {...props} />;
};

Button.Secondary = (props) => {
  return <Button variant="secondary" {...props} />;
};

Button.Tertiary = (props) => {
  return <Button variant="tertiary" {...props} />;
};

export default Button;
