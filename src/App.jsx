import { useState } from "react";
import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";

function App() {
  const [savedBookmarks, setSavedBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddToBookmarks = (blogElement) => {
    // console.log("added to BookMarks", blogElement);
    const newSavedBookmarks = [...savedBookmarks, blogElement];
    setSavedBookmarks(newSavedBookmarks);
  };

  const handleAddToReadingList = (paramTime, paramId) => {
    // console.log("reading time added", paramTime);
    const newReadingTime = readingTime + paramTime;
    setReadingTime(newReadingTime);
    // remove saved bookmarks after reading....
    // console.log("remove bookmark", id);
    const remainingBookmarks = savedBookmarks.filter(
      (bookmarkElement) => bookmarkElement.id !== paramId
    );
    setSavedBookmarks(remainingBookmarks);
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center my-5">Knowledge Cafe</h1>
      <div className="flex gap-5 justify-between">
        <Blogs
          handleAddToBookmarks={handleAddToBookmarks}
          handleAddToReadingList={handleAddToReadingList}
        ></Blogs>
        <BookMarks
          savedBookmarks={savedBookmarks}
          readingTime={readingTime}
        ></BookMarks>
      </div>
    </div>
  );
}

export default App;
