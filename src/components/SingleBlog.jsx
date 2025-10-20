import { FaRegBookmark } from "react-icons/fa";
const SingleBlog = ({ blogElement, handleAddToBookmarks }) => {
  // console.log(blogElement);
  const { cover, title, reading_time } = blogElement;
  return (
    <div className="space-y-4">
      <img className="max-w-full" src={cover}></img>
      <h1 className="text-2xl font-medium">{title}</h1>
      <div className="flex items-center gap-3 text-lg font-normal">
        <h2>{reading_time} min read</h2>
        <button
          onClick={() => handleAddToBookmarks(blogElement)}
          className="text-red-600"
        >
          <FaRegBookmark></FaRegBookmark>
        </button>
      </div>
      <button className="text-lg font-normal">Mark As Read</button>
    </div>
  );
};

export default SingleBlog;
