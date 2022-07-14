import React, { useEffect, useState } from "react";
import { RegisterBg } from "../../assets";
import { Button } from "../../components";
import "./detailBlog.scss";
import { useHistory, withRouter } from "react-router-dom";
import Axios from "axios";

const DetailBlog = (props) => {
  const [data, setData] = useState({});
  useEffect(() => {
    // console.log("params:", props.match.params.id);
    const id = props.match.params.id;
    Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
      .then((res) => {
        // console.log("data api", res.data);
        const responseAPI = res.data;
        setData(responseAPI.data);
        // dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
        // dispatch({
        //   type: "UPDATE_PAGE",
        //   payload: {
        //     currentPage: responseAPI.current_page,
        //     totalPage: Math.ceil(responseAPI.total_data / responseAPI.per_page),
        //   },
      })
      .catch((err) => {
        console.log("err:", err);
      });
  }, [props]);
  const history = useHistory();

  if (data.author) {
    return (
      <div className="card mb-5 mt-3">
        <img
          src={`http://localhost:4000/${data.image}`}
          className="card-img-top img-cover"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">
            <small className="text-muted">
              {data.author.name} - {data.createdAt}
            </small>
          </p>
          <p className="card-text">{data.body}</p>
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
  }
  return <p>Loading Data....</p>;
};

export default withRouter(DetailBlog);
