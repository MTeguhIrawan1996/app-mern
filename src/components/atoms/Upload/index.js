import React from "react";
import "../main.scss";
import { LoginBg } from "../../../assets";

const Upload = () => {
  return (
    <div className="upload">
      <img className="priview" src={LoginBg} alt="Priview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
