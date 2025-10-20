const SingleBookMark = ({ bookmarkElement }) => {
  // console.log(bookmarkElement);
  return (
    <div>
      <h1 className="bg-blue-500 p-1">{bookmarkElement.title}</h1>
    </div>
  );
};

export default SingleBookMark;
