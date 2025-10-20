import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const Blogs = ({handleAddToBookmarks}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/fakeData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="w-full sm:w-2/3">
      <h1 className="text-xl font-medium text-green-600 mb-5">Total Blogs : {blogs.length}</h1>
      <div className="grid gap-5 grid-cols-1">
        {blogs.map((blogElement) => (
          <SingleBlog
            key={blogElement.id}
            blogElement={blogElement}
            handleAddToBookmarks ={handleAddToBookmarks}
          ></SingleBlog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
