import React, { useEffect, useState } from "react";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import "./createBlog.scss";
import { useHistory, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  postToAPI,
  setDataBlog,
  setForm,
  setImgPreview,
  updateToAPI,
} from "../../config/redux/action";
import Axios from "axios";

const CreateBlog = (props) => {
  const history = useHistory();
  const { form, imgPreview } = useSelector((state) => state.createBlogReducer);
  const { title, body } = form;
  const [isUpdate, setIsUpdate] = useState(false);
  const dispatch = useDispatch();
  const { counter } = useState();
  // const [title, setTitle] = useState("");
  // const [body, setBody] = useState("");
  // const [image, setImage] = useState("");
  // const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const id = props.match.params.id;
    // console.log("params:", props);
    if (id) {
      setIsUpdate(true);
      Axios.get(`http://localhost:4000/v1/blog/post/${id}`)
        .then((res) => {
          const responseAPI = res.data;
          // console.log(responseAPI);
          dispatch(setForm("title", responseAPI.data.title));
          dispatch(setForm("body", responseAPI.data.body));
          dispatch(
            setImgPreview(`http://localhost:4000/${responseAPI.data.image}`)
          );
        })
        .catch((err) => {
          console.log("err:", err);
        });
    } else {
      dispatch(setForm("title", ""));
      dispatch(setForm("body", ""));
      dispatch(setImgPreview(counter));
    }
  }, [dispatch, props, counter]);

  const onSubmit = () => {
    const id = props.match.params.id;
    if (isUpdate) {
      updateToAPI(form, id, history);
      dispatch(setDataBlog(counter));
    } else {
      postToAPI(form, history);
    }

    // console.log("title :", title);
    // console.log("body :", body);
    // console.log("image :", image);

    // const data = new FormData();
    // data.append("title", title);
    // data.append("body", body);
    // data.append("image", image);
    // Axios.post("http://localhost:4000/v1/blog/post", data, {
    //   headers: {
    //     "content-type": "multipart/from-data",
    //   },
    // })
    //   .then((res) => {
    //     console.log("post success:", res);
    //   })
    //   .catch((err) => {
    //     console.log("Erorr:", err);
    //   });
  };

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    dispatch(setForm("image", file));
    dispatch(setImgPreview(URL.createObjectURL(file)));
  };
  return (
    <div>
      <div className="card mt-3 mb-5">
        <div className="card-header">
          {isUpdate ? "Update" : "Create New"} Blog Spot
        </div>
        <div className="card-body">
          <Input
            label="Title"
            value={title}
            onChange={(e) => dispatch(setForm("title", e.target.value))}
          />
          <Upload onChange={(e) => onImageUpload(e)} img={imgPreview} />
          <TextArea
            label="Deskripsi"
            value={body}
            onChange={(e) => dispatch(setForm("body", e.target.value))}
          />
        </div>
        <div className="button-action">
          <Button
            title={isUpdate ? "Update" : "Simpan"}
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

export default withRouter(CreateBlog);
