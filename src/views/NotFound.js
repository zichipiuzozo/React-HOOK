import { useNavigate } from "react-router-dom";
const NotFound = () => {
  let navigate = useNavigate();
  const handleClickBtn = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <h4>This Page Isn't Available</h4>
      <h5>
        The link may be , or the page may have been removed. Check to see if the
        link you're trying to open it correct.
      </h5>
      <button className="btn btn-primary" onClick={handleClickBtn}>
        Go to HomePage
      </button>
    </div>
  );
};
export default NotFound;
