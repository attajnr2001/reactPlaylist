import { useParams, useLoaderData } from "react-router-dom";

function BlogDetails() {
  const { id } = useParams();
  const blog = useLoaderData();
  return (
    <div className="blogDetails">
      <p className="blogTitle">{blog.title}</p>
      <span className="author">written by - {blog.author}</span>
      <p className="body">{blog.body}</p>
    </div>
  );
}

export const blogDetails = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:4000/blogs/" + id);
  return res.json();
};

export default BlogDetails;
