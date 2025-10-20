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

  const handleAddToReadingTime = (time) => {
    // console.log("reading time added...", time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center my-5">Knowledge Cafe</h1>
      <div className="flex">
        <Blogs handleAddToBookmarks={handleAddToBookmarks} handleAddToReadingTime={handleAddToReadingTime}></Blogs>
        <BookMarks savedBookmarks={savedBookmarks} readingTime={readingTime}></BookMarks>
      </div>
    </div>
  );
}

export default App;
