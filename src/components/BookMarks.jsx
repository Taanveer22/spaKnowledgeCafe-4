import SingleBookMark from "./SingleBookMark";

const BookMarks = ({ savedBookmarks, readingTime }) => {
  return (
    <div className="w-full sm:w-1/3">
      <h1 className="text-xl font-medium text-red-600 mb-5">
        Total Reading Time : {readingTime} min
      </h1>
      <h1 className="text-xl font-medium text-red-600 mb-5">
        Total Bookmarks : {savedBookmarks.length}
      </h1>
      <div className="grid gap-5 grid-cols-1">
        {savedBookmarks.map((bookmarkElement) => (
          <SingleBookMark
            key={bookmarkElement.id}
            bookmarkElement={bookmarkElement}
          ></SingleBookMark>
        ))}
      </div>
    </div>
  );
};

export default BookMarks;
