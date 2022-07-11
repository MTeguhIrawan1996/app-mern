import React from "react";
// import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import "./blogitem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = (props) => {
  const history = useHistory();
  const { image, title, name, date, body } = props;
  return (
    <div className="col">
      <div className="card mb-3">
        <img src={image} className="card-img-top image-thumb" alt="post" />
        <div className="card-body content-detail">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            <small className="text-muted">
              {name} - {date}
            </small>
          </p>
          <p className="card-text mt-2">{body}</p>
        </div>
        <div className="d-grid gap-2 col-6 mx-auto mb-3">
          <Button
            title="View Detail"
            className="button btn btn-success mt-2"
            onClick={() => history.push("/detail-blog")}
          />
        </div>
      </div>
    </div>

    // {/* <div className="blog-item">
    //   <img className="image-thumb" src={image} alt="post" />
    //   <div className="content-detail">
    //     <p className="title">{title}</p>
    //     <p className="author">
    //       {name} - {date}
    //     </p>
    //     <p className="body">{body}</p>
    //   </div>
    //   <div className="d-grid gap-2 col-6 mx-auto mb-3">
    //     <Button
    //       title="View Detail"
    //       className="button btn btn-success mt-2"
    //       onClick={() => history.push("/detail-blog")}
    //     />
    //   </div>
    // </div> */}
  );
};

export default BlogItem;
