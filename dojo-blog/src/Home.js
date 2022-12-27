import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "New website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // runs initially and whenever there is a re-render
  useEffect(() => {
    console.log("use effect")
    console.log(blogs)
  })

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's Blogs"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default Home;
