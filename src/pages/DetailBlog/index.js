import React from "react";
import { RegisterBg } from "../../assets";
import { Button } from "../../components";
import "./detailBlog.scss";
import { useHistory } from "react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="card mb-5 mt-3">
      <img src={RegisterBg} className="card-img-top img-cover" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          <small className="text-muted">Author - Date Post</small>
        </p>
        <p className="card-text">
          Adipisicing magna aliqua reprehenderit ex eu exercitation magna
          incididunt sunt tempor ad enim duis. Deserunt qui dolor ipsum magna
          tempor excepteur nostrud incididunt sunt. Pariatur exercitation cillum
          nulla do. Qui cillum aliqua cillum aliquip consequat quis esse aliqua
          adipisicing. Eiusmod tempor incididunt quis nostrud aute sint irure
          consequat aliquip aute. Esse mollit labore sint proident enim do nisi
          nulla ipsum. Elit pariatur nostrud commodo aliquip incididunt.
        </p>
      </div>
      <div className="button-detail">
        <Button
          title="Kembali"
          className="button btn btn-warning mb-3 mt-2"
          onClick={() => history.push("/")}
        />
      </div>
    </div>
  );
};

export default DetailBlog;
