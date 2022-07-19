import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../Customize/fetch";
import "./Blog.scss";
const DetailBlog = () => {
  let { id } = useParams();
  let navigate = useNavigate();

  const {
    data: dataBlogDetail,
    isLoading,
    isError
  } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false);

  const handleBackData = () => {
    navigate("/blog");
  };

  console.log(">>>> check data detail", dataBlogDetail);
  return (
    <>
      <div>
        <span onClick={handleBackData}>&lt; -- Back</span>
      </div>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Blog ID: {id} ---
              {isLoading === true ? "Loading data....." : dataBlogDetail.title}
            </div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailBlog;
