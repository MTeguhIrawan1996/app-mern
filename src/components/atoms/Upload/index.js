import React from "react";
import "../main.scss";

const Upload = ({ img, ...rest }) => {
  return (
    <div className="mb-3">
      {img && <img src={img} className="rounded priview" alt="..." />}

      <div>
        <input className="form-control" type="file" id="formFile" {...rest} />
      </div>
    </div>
  );
};

export default Upload;
