import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogitem.scss";

const BlogItem = () => {
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
      </div>
    </div>
  );
};

export default BlogItem;
