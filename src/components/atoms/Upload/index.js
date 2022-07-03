import React from "react";
import "../main.scss";
import { LoginBg } from "../../../assets";

const Upload = () => {
  return (
    <div className="mb-3">
      <img src={LoginBg} className="rounded priview" alt="..." />
      <div>
        <input className="form-control" type="file" id="formFile" />
      </div>
    </div>
  );
};

export default Upload;
