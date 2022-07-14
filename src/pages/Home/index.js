import React, { useEffect, useState } from "react";
import { BlogItem, Button, Gap } from "../../components";
import "./home.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDataBlog } from "../../config/redux/action";

const Home = () => {
  const [counter, setCounter] = useState(1);
  const { dataBlog, page } = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();
  // console.log("State Global :", dataBlog);

  useEffect(() => {
    // setTimeout(() => {
    //   // dispatch({ type: "UPDATE_NAME" });
    // }, 3000);

    // Axios.get("http://localhost:4000/v1/blog/posts?page=2&perPage=2")
    //   .then((result) => {
    //     // console.log("data api", result.data);
    //     const responseAPI = result.data;
    //     // setDataBlog(responseAPI.data);
    //     dispatch(setDataBlog(responseAPI.data));
    //   })
    //   .catch((err) => {
    //     console.log("err:", err);
    //   });
    dispatch(setDataBlog(counter));
  }, [dispatch, counter]);

  const history = useHistory();
  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1);
  };
  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1);
  };

  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="Create Blog"
          className="button btn btn-success"
          onClick={() => history.push("/create-blog")}
        />
      </div>
      <Gap height={20} />
      <div className="content-wrapper">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {dataBlog.map((blog) => {
            return (
              <BlogItem
                key={blog._id}
                image={`http://localhost:4000/${blog.image}`}
                title={blog.title}
                body={blog.body}
                name={blog.author.name}
                date={blog.createdAt}
              />
            );
          })}
        </div>
      </div>
      <div className="pagination">
        <Button
          title="Previous"
          className="button btn btn-warning"
          onClick={previous}
        />
        <Gap width={20} />
        <p className="text-page">
          {page.currentPage} / {page.totalPage}
        </p>
        <Gap width={20} />
        <Button
          title="Next"
          className="button btn btn-warning"
          onClick={next}
        />
      </div>
      <Gap height={20} />
    </div>
  );
};

export default Home;
