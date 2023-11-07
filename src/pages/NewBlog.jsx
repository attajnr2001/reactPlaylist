import { useState } from "react";
import MyButton from "../components/MyButton";
import { useNavigate } from "react-router-dom";

function NewBlog() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [ispending, setIspending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, author, body };
    setIspending(true);
    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIspending(false);
      navigate(-1);
    });
  };
  return (
    <div>
      <h3 className="title">Add a New blog</h3>

      <form onSubmit={handleSubmit}>
        <div className="control">
          <label>Title</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="cntrol">
          <label>Body</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>

        <div className="control">
          <label>Author</label>
          <select value={author} onChange={(e) => setAuthor(e.target.value)}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        {!ispending && <MyButton text={"Add Blog"} />}
        {ispending && <MyButton disabled text={"Adding Blog"} />}
      </form>
    </div>
  );
}

export default NewBlog;
