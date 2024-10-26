import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div
      key={book.bookId}
      className="flex flex-col justify-between border border-gray-300 rounded-lg p-4 bg-base-100 min-h-[700px] space-y-4"
    >
      <div>
        <img
          src={image}
          alt={bookName}
          className="w-full h-60 object-contain bg-green-50 rounded-lg p-4"
        />
      </div>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <span
            key={tag}
            className="badge outline outline-1 outline-green-500 text-black p-3"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="space-y-2 ">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">{bookName}</h2>
          <p className="italic text-green-900  p-2 rounded-lg">
            <span className="font-bold text-black">By:</span> {author}
          </p>
        </div>
        <div className="divide-y divide-dashed"> </div>
        <div className="flex gap-4">
          <p>
            <span className="font-bold">Total Pages:</span> {totalPages}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {rating}
          </p>
        </div>
        <div className="space-y-2">
          <p>
            <span className="font-bold">Category:</span> {category}
          </p>
          <p>
            <span className="font-bold">Publisher:</span> {publisher}
          </p>
          <p>
            <span className="font-bold">Year of Publishing:</span>{" "}
            {yearOfPublishing}
          </p>
        </div>
      </div>
      <Link to={`/book/${bookId}`}>
        <button className="btn bg-gradient-to-r from-green-500 to-green-700 text-white hover:bg-transparent hover:text-green-950 hover:border-green-500 w-full">
          View Details
        </button>
      </Link>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
};
export default Book;
