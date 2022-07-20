import { Link, useNavigate } from "react-router-dom";
import useFetch from "../Customize/fetch";
import "./Blog.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import AddNewBlog from "./AddNewBlog";
const Blog = () => {
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let navigate = useNavigate();
  const {
    data: dataBlogs,
    isLoading,
    isError
  } = useFetch(`https://jsonplaceholder.typicode.com/posts`, false);

  useEffect(() => {
    if (dataBlogs && dataBlogs.length > 0) {
      let newDataSimple = dataBlogs.slice(0, 10);
      setNewData(newDataSimple);
    }
  }, [dataBlogs]);

  const handleAddNew = blog => {
    let data = newData;
    data.unshift(blog);
    setShow(false);
    setNewData(data);
  };

  const deletePost = id => {
    let data = newData;
    data = data.filter(item => item.id !== id);
    setNewData(data);
  };
  return (
    <>
      <>
        <Button variant="primary" className="my-3" onClick={handleShow}>
          + Add new blog
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddNewBlog handleAddNew={handleAddNew} />
          </Modal.Body>
        </Modal>
      </>
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
                <button onClick={() => deletePost(item.id)}>X</button>
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
