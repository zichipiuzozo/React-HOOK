import "./Blog.scss";
const AddNewBlog = () => {
  return (
    <div className="add-new-container">
      <div className="text-add-new">----- Add new blogs -----</div>
      <div className="inputs-data">
        <label>Title: </label>
        <input type={"text"} />
      </div>
      <div className="inputs-data">
        <label>Content: </label>
        <input type={"text"} />
      </div>
      <button className="btn-add-new">Submit</button>
    </div>
  );
};

export default AddNewBlog;
