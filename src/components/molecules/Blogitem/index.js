import React from "react";
import { RegisterBg } from "../../../assets";
import { Button } from "../../atoms";
import "./blogitem.scss";
import { useHistory } from "react-router-dom";

const BlogItem = () => {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author - Date Post</p>
        <p className="body">
          Excepteur aliqua esse veniam magna nisi nostrud fugiat ut elit culpa
          ea. Labore minim sit tempor reprehenderit dolore eu nisi eu dolor.
          Nisi cupidatat nisi magna cillum tempor sit. Amet commodo cupidatat ex
          nostrud incididunt esse velit consectetur. Qui et cupidatat nisi
          voluptate quis sit excepteur adipisicing. Elit cillum reprehenderit do
          ex ea ipsum enim laboris ullamco ipsum. Excepteur id enim est fugiat
          irure consequat sit anim quis officia elit.
        </p>
        <Button
          title="View Detail"
          className="button btn btn-success mt-2"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
};

export default BlogItem;
