import React from "react";
import "../main.scss";

const Button = ({ title, ...rest }) => {
  return <button {...rest}>{title}</button>;
};

export default Button;
