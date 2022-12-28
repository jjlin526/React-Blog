import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div className="blog-details">
      <h2>Add a New Blog - {id}</h2>
    </div>
  );
};

export default BlogDetails;
