import React from "react";

const Input = ({ label, ...rest }) => {
  return (
    <div className="mb-3">
      <label className="form-label fw-bold">{label}</label>
      <input type="text" className="form-control" {...rest} />
    </div>
  );
};

export default Input;
