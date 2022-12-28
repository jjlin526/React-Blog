import { exactProp } from "@mui/utils";
import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    // prevent refresh
    e.preventDefault();

    setIsPending(true);

    const blog = { title, body, author };

    // make POST request using fetch API
    fetch("http://localhost:8000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
  };

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending ? (
          <button>Add Blog</button>
        ) : (
          <button disabled>Adding blog...</button>
        )}
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
