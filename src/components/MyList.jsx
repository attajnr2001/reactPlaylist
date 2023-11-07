import { Link } from "react-router-dom";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";

function MyList({ blogs, title }) {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch("http://localhost:4000/blogs/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <>
      <h2 className="title">{title}</h2>
      {blogs.map((blog) => (
        <div  className="blog" key={blog.id}>
          <Link to={`${blog.id}`}>
            <div>
              <div className="each">
                <p className="_title">{blog.title}</p>
                <p className="author">{blog.author}</p>
              </div>
            </div>
          </Link>
          <MyButton
            btnType={"delBtn"}
            clickEvent={() => handleDelete(blog.id)}
            text={"Delete"}
          />
        </div>
      ))}
    </>
  );
}

export default MyList;
