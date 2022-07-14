import Axios from "axios";

export const setForm = (formType, formValue) => {
  return { type: "SET_FORM_DATA", formType, formValue };
};

export const setImgPreview = (payload) => {
  return { type: "SET_IMG_PREVIEW", payload };
};

export const postToAPI = (form, history) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);
  Axios.post("http://localhost:4000/v1/blog/post", data, {
    headers: {
      "content-type": "multipart/from-data",
    },
  })
    .then((res) => {
      console.log("post success:", res);
      history.push("/");
    })
    .catch((err) => {
      console.log("Erorr:", err);
    });
};

export const updateToAPI = (form, id, history) => {
  const data = new FormData();
  data.append("title", form.title);
  data.append("body", form.body);
  data.append("image", form.image);
  Axios.put(`http://localhost:4000/v1/blog/post/${id}`, data, {
    headers: {
      "content-type": "multipart/from-data",
    },
  })
    .then((res) => {
      history.push("/");
    })
    .catch((err) => {
      console.log("Erorr:", err);
    });
};
