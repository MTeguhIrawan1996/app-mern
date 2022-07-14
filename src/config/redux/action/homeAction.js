import Axios from "axios";

export const setDataBlog = () => {
  return (dispatch) => {
    Axios.get("http://localhost:4000/v1/blog/posts?page=2&perPage=2")
      .then((result) => {
        // console.log("data api", result.data);
        const responseAPI = result.data;
        // setDataBlog(responseAPI.data);
        dispatch({ type: "UPDATE_DATA_BLOG", payload: responseAPI.data });
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };
};
