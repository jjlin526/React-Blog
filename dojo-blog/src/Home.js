import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    // GET request which returns a promise
    fetch('http://localhost:8000/blogs')
    .then(res => {
        return res.json()
    })
    .then((data) => {
        setBlogs(data)
    })
    // add dependency array, fetch only occurs on load
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
