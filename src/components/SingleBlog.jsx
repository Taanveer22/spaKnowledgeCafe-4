import { FaBookmark } from "react-icons/fa6";
const SingleBlog = ({
  blogElement,
  handleAddToBookmarks,
  handleAddToReadingList,
}) => {
  // console.log(blogElement);
  const { cover, title, reading_time, id } = blogElement;
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
          <FaBookmark></FaBookmark>
        </button>
      </div>
      <button
        onClick={() => handleAddToReadingList(reading_time, id)}
        className="text-lg font-normal bg-green-500 p-1"
      >
        Add to reading list
      </button>
    </div>
  );
};

export default SingleBlog;
