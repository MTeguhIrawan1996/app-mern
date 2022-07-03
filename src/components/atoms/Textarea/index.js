import React from "react";
import "../main.scss";

const TextArea = ({ label, ...rest }) => {
  return (
    <div className="form">
      <label className="form-label fw-bold">{label}</label>
      <textarea className="form-control" {...rest} />
    </div>
  );
};

export default TextArea;
