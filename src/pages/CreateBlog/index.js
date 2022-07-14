import React, { useState } from "react";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import "./createBlog.scss";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const CreateBlog = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const onSubmit = () => {
    // console.log("title :", title);
    // console.log("body :", body);
    // console.log("image :", image);

    const data = new FormData();
    data.append("title", title);
    data.append("body", body);
    data.append("image", image);
    Axios.post("http://localhost:4000/v1/blog/post", data, {
      headers: {
        "content-type": "multipart/from-data",
      },
    })
      .then((res) => {
        console.log("post success:", res);
      })
      .catch((err) => {
        console.log("Erorr:", err);
      });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };
  return (
    <div>
      <div className="card mt-3 mb-5">
        <div className="card-header">Create New Blog Spot</div>
        <div className="card-body">
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Upload onChange={(e) => onImageUpload(e)} img={imagePreview} />
          <TextArea
            label="Deskripsi"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>
        <div className="button-action">
          <Button
            title="Save"
            className="button btn btn-success"
            onClick={onSubmit}
          />
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
