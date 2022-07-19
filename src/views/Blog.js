import { Link, useNavigate } from "react-router-dom";
import useFetch from "../Customize/fetch";
import "./Blog.scss";

const Blog = () => {
  let navigate = useNavigate();
  const {
    data: dataBlogs,
    isLoading,
    isError
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
  let newData = [];
  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 10);
  }
  const handleAddNew = () => {
    navigate("/add-new-blog");
  };
  return (
    <>
      <div>
        <button className="btn-add-new" onClick={handleAddNew}>
          + Add new blog
        </button>
      </div>
      <div className="blogs-container">
        {isLoading === false &&
          newData &&
          newData.length > 0 &&
          newData.map(item => {
            return (
              <div className="single-blog" key={item.id}>
                <div className="title">Title: {item.title}</div>
                <div className="content">{item.body}</div>
                <button>
                  <Link to={`/blog/${item.id}`}>View detail</Link>
                </button>
                <hr />
              </div>
            );
          })}
        {isLoading === true && (
          <div style={{ textAlign: "center !important", width: "100%" }}>
            Loading data.....
          </div>
        )}
      </div>
    </>
  );
};
export default Blog;
