import React from "react";
import "../main.scss";

const Link = ({ title, onClick }) => {
  return (
    <p className="link" onClick={onClick}>
      {title}
    </p>
  );
};

export default Link;
