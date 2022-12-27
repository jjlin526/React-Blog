import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // runs initially and whenever there is a re-render - good for fetching data
  useEffect(() => {
    // GET request which returns a promise
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return res.json()
    })
    .then((data) => {
        setBlogs(data)
    })
    // add dependency array
  }, []);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
        handleDelete={handleDelete}
      />
      <button onClick={() => setName('luigi')}>Change Name</button>
    </div>
  );
};

export default Home;
