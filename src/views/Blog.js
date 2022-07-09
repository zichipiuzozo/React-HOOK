import useFetch from "../Customize/fetch";
import "./Blog.scss";
const Blog = () => {
  const {
    data: dataBlogs,
    isLoading,
    isError
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);
  let newData = [];
  if (dataBlogs && dataBlogs.length > 0) {
    newData = dataBlogs.slice(0, 10);
  }

  return (
    <div className="blogs-container">
      {newData &&
        newData.length > 0 &&
        newData.map(item => {
          return (
            <div className="single-blog">
              <div className="title">Title: {item.title}</div>
              <div className="content">{item.body}</div>
              <button>View detail</button>
              <hr />
            </div>
          );
        })}
    </div>
  );
};
export default Blog;
