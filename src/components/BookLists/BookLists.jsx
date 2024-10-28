import { useLoaderData, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Book from "../Book/Book";
import { Helmet } from "react-helmet-async";
const BookLists = () => {
  const data = useLoaderData();
  const location = useLocation();
  // console.log("Location", location.pathname);
  const [toDisplay, setToDisplay] = useState(data);
  useEffect(() => {
    if (location.pathname === "/book-lists" || location.pathname === "/") {
      setToDisplay(data.slice(0, 12));
      // console.log("toDisplay", toDisplay);
    }
  }, [data, location.pathname]);
  const handleLoadMore = () => {
    setToDisplay(data.slice(0, toDisplay.length + 4));
  };
  return (
    <section className="py-10">
      {location.pathname === "/book-lists" && (
        <Helmet>
          <title>Book Lists</title>
        </Helmet>
      )}
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center px-4 py-10">
          {toDisplay.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
          {location.pathname === "/" && (
            <Link
              to="/book-lists"
              className="btn btn-primary text-white col-span-full mx-auto w-60"
            >
              View All
            </Link>
          )}
          {location.pathname === "/book-lists" &&
            toDisplay.length < data.length && (
              <button
                className="btn btn-primary text-white col-span-full mx-auto w-60"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )}
        </div>
      </div>
    </section>
  );
};

export default BookLists;
