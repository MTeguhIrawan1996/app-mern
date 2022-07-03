import React from "react";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import "./createBlog.scss";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div>
      <div className="card mt-3 mb-5">
        <div className="card-header">Create New Blog Spot</div>
        <div className="card-body">
          <Input label="Title" />
          <Upload />
          <TextArea label="Deskripsi" />
        </div>
        <div className="button-action">
          <Button title="Save" className="button btn btn-success" />
          <Gap width={20} />
          <Button
            title="Kembali"
            className="button btn btn-warning"
            onClick={() => history.push("/")}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
