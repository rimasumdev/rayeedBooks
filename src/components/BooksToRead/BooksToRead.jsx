import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFromLocalStorage } from "../../utility/LocalStorage";
import { Helmet } from "react-helmet-async";
const BooksToRead = () => {
  const books = useLoaderData();
  const readBooks = getFromLocalStorage("readBooks");
  const wishlist = getFromLocalStorage("wishlist");
  const [toReadBooksDisplay, setToReadBooksDisplay] = useState([]);
  const [toWishlistBooksDisplay, setToWishlistBooksDisplay] = useState([]);
  useEffect(() => {
    const ReadBooksIds = books.filter((book) =>
      readBooks.includes(book.bookId)
    );
    setToReadBooksDisplay(ReadBooksIds);
    const WishlistBooksIds = books.filter((book) =>
      wishlist.includes(book.bookId)
    );
    setToWishlistBooksDisplay(WishlistBooksIds);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [isTabActive, setIsTabActive] = useState("Read Books");

  const handleTabChange = (e) => {
    setIsTabActive(e.target.ariaLabel);
  };

  const handleSort = (e) => {
    if (isTabActive === "Read Books") {
      const sortedBooks = [...toReadBooksDisplay].sort((a, b) =>
        e.target.ariaLabel === "Ascending"
          ? a.yearOfPublishing - b.yearOfPublishing
          : b.yearOfPublishing - a.yearOfPublishing
      );
      setToReadBooksDisplay(sortedBooks);
    } else if (isTabActive === "Wishlist Books") {
      const sortedBooks = [...toWishlistBooksDisplay].sort((a, b) =>
        e.target.ariaLabel === "Ascending"
          ? a.yearOfPublishing - b.yearOfPublishing
          : b.yearOfPublishing - a.yearOfPublishing
      );
      setToWishlistBooksDisplay(sortedBooks);
    }
  };
  return (
    <section className="py-10">
      <Helmet>
        <title>Books to Read</title>
      </Helmet>
      <div className="container mx-auto space-y-10">
        <div className="bg-green-50 p-5 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Books to Read</h1>
        </div>
        <div className="flex md:justify-end justify-center">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn w-52 bg-green-100">
              Sort By <MdOutlineKeyboardArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              {isTabActive === "Read Books" ? (
                <>
                  <li>
                    <a aria-label="Ascending" onClick={handleSort}>
                      Ascending
                    </a>
                  </li>
                  <li>
                    <a aria-label="Descending" onClick={handleSort}>
                      Descending
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a aria-label="Ascending" onClick={handleSort}>
                      Ascending
                    </a>
                  </li>
                  <li>
                    <a aria-label="Descending" onClick={handleSort}>
                      Descending
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div role="tablist" className="tabs tabs-lifted ">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab !w-40"
            aria-label="Read Books"
            defaultChecked
            onChange={handleTabChange}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 rounded-box py-6 px-2 lg:px-0"
          >
            <div className="space-y-5">
              {toReadBooksDisplay.map((book) => (
                <div
                  key={book.bookId}
                  className="flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-10 border p-5 rounded-lg lg:h-80 w-full"
                >
                  <div className="lg:w-1/4 w-full h-64 lg:h-full p-2 rounded-lg bg-green-100">
                    <img
                      src={book.image}
                      alt={book.bookName}
                      className="w-full h-full object-contain "
                    />
                  </div>
                  <div className="lg:w-3/4 space-y-4 md:border-l md:border-dashed md:border-gray-300 md:pl-10">
                    <div className="space-y-5">
                      <h1 className="text-3xl md:text-4xl font-bold">
                        {book.bookName}
                      </h1>
                      <p className="text-xl italic">
                        <span className="font-bold">By:</span> {book.author}
                      </p>
                      <div className="flex gap-5 flex-wrap">
                        <p className="flex gap-2 flex-wrap">
                          <span className="font-bold ">Tags:</span>
                          {book.tags.map((tag) => (
                            <span
                              key={tag}
                              className="badge outline outline-1 outline-green-500 bg-green-100 font-semibold text-black p-3"
                            >
                              #{tag}
                            </span>
                          ))}
                        </p>
                        <p>
                          <span className="font-bold">Year of Publishing:</span>{" "}
                          {book.yearOfPublishing}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-4 border-b border-dashed border-gray-300 pb-4">
                        <p>
                          <span className="font-bold">Publisher:</span>{" "}
                          {book.publisher}
                        </p>
                        <p>
                          <span className="font-bold">Total Pages:</span>{" "}
                          {book.totalPages}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-4 items-center">
                      <p className="font-semibold text-green-700 bg-green-200 px-4 py-2 rounded-full">
                        {book.category}
                      </p>
                      <p className="font-semibold text-orange-700 bg-orange-200 px-4 py-2 rounded-full">
                        Rating: {book.rating}
                      </p>
                      <Link to={`/book/${book.bookId}`}>
                        <p className="font-semibold text-orange-700 bg-orange-200 px-4 py-2 rounded-full">
                          View Details
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab !w-40"
            aria-label="Wishlist Books"
            onChange={handleTabChange}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 rounded-box py-6 px-2 lg:px-0"
          >
            <div className="space-y-5">
              {toWishlistBooksDisplay.map((book) => (
                <div
                  key={book.bookId}
                  className="flex gap-10 border p-5 rounded-lg h-80 w-full"
                >
                  <div className="w-1/4 h-full p-2 rounded-lg bg-green-100">
                    <img
                      src={book.image}
                      alt={book.bookName}
                      className="w-full h-full object-contain "
                    />
                  </div>
                  <div className="w-3/4 space-y-4 md:border-l md:border-dashed md:border-gray-300 md:pl-10">
                    <div className="space-y-5">
                      <h1 className="text-3xl md:text-4xl font-bold">
                        {book.bookName}
                      </h1>
                      <p className="text-xl italic">
                        <span className="font-bold">By:</span> {book.author}
                      </p>
                      <div className="flex gap-5">
                        <p className="flex gap-2 flex-wrap">
                          <span className="font-bold ">Tags:</span>
                          {book.tags.map((tag) => (
                            <span
                              key={tag}
                              className="badge outline outline-1 outline-green-500 bg-green-100 font-semibold text-black p-3"
                            >
                              #{tag}
                            </span>
                          ))}
                        </p>
                        <p>
                          <span className="font-bold">Year of Publishing:</span>{" "}
                          {book.yearOfPublishing}
                        </p>
                      </div>
                      <div className="flex gap-4 border-b border-dashed border-gray-300 pb-4">
                        <p>
                          <span className="font-bold">Publisher:</span>{" "}
                          {book.publisher}
                        </p>
                        <p>
                          <span className="font-bold">Total Pages:</span>{" "}
                          {book.totalPages}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center">
                      <p className="font-semibold text-green-700 bg-green-200 px-4 py-2 rounded-full">
                        {book.category}
                      </p>
                      <p className="font-semibold text-orange-700 bg-orange-200 px-4 py-2 rounded-full">
                        Rating: {book.rating}
                      </p>
                      <Link to={`/book/${book.bookId}`}>
                        <p className="font-semibold bg-gradient-to-r from-green-500 to-green-700 text-white hover:bg-transparent hover:text-green-950 hover:border-green-500 px-4 py-2 rounded-full">
                          View Details
                        </p>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BooksToRead;
