import { useLoaderData, useLocation, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Book from "../Book/Book";
import { Helmet } from "react-helmet-async";
const BookLists = () => {
  const data = useLoaderData();
  const location = useLocation();
  // console.log("Location", location.pathname);
  const totalBooks = data.length;
  const [booksPerPage, setBooksPerPage] = useState(12);
  const totalPages = Math.ceil(totalBooks / booksPerPage);
  console.log("totalBooks", totalBooks);
  console.log("totalPages", totalPages);
  const [toDisplay, setToDisplay] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    if (location.pathname === "/book-lists" || location.pathname === "/") {
      setToDisplay(data.slice(0, 12));
      // console.log("toDisplay", toDisplay);
    }
  }, [data, location.pathname]);
  // const handleLoadMore = () => {
  //   setToDisplay(data.slice(0, toDisplay.length + 4));
  // };
  const handleBooksPerPage = (e) => {
    setBooksPerPage(e.target.value);
    setCurrentPage(1);
    setToDisplay(data.slice(0, e.target.value));
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setToDisplay(data.slice((page - 1) * booksPerPage, page * booksPerPage));
    console.log("toDisplay", toDisplay);
  };
  return (
    <section className="py-10">
      {location.pathname === "/book-lists" && (
        <Helmet>
          <title>Book Lists</title>
        </Helmet>
      )}
      <div className="container mx-auto">
        <div
          className={`flex ${
            location.pathname === "/book-lists"
              ? "justify-between"
              : "justify-center"
          } items-center`}
        >
          <h1 className="text-3xl font-bold text-center">Books</h1>
          {location.pathname === "/book-lists" && (
            <div className="w-full max-w-xs">
              <label className="flex gap-2 items-center justify-end">
                <span className="label-text">Books per page</span>
                <select
                  className="select select-bordered"
                  onChange={handleBooksPerPage}
                >
                  <option value={12}>12</option>
                  <option value={24}>24</option>
                  <option value={36}>36</option>
                  <option value={48}>48</option>
                </select>
              </label>
            </div>
          )}
        </div>
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
          {/* {location.pathname === "/book-lists" &&
            toDisplay.length < data.length && (
              <button
                className="btn btn-primary text-white col-span-full mx-auto w-60"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            )} */}
        </div>
        {location.pathname === "/book-lists" && (
          <div className="flex justify-center items-center gap-4">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page}
                className={`btn ${
                  currentPage === page + 1
                    ? "btn-primary text-white"
                    : "btn-neutral"
                }`}
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BookLists;
