import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getFromLocalStorage } from "../../utility/LocalStorage";
const BooksToRead = () => {
  const books = useLoaderData();
  // console.log(books);
  const readBooks = getFromLocalStorage("readBooks");
  // console.log("readBooks", readBooks);
  const wishlist = getFromLocalStorage("wishlist");
  // console.log("wishlist", wishlist);
  // const [isRead, setIsRead] = useState(false);
  // const [isWishlist, setIsWishlist] = useState(false);
  const [toReadBooksDisplay, setToReadBooksDisplay] = useState([]);
  const [toWishlistBooksDisplay, setToWishlistBooksDisplay] = useState([]);

  // console.log("ReadBooksIds", toReadBooksDisplay);
  useEffect(() => {
    const ReadBooksIds = books.filter((book) =>
      readBooks.includes(book.bookId)
    );
    setToReadBooksDisplay(ReadBooksIds);
    const WishlistBooksIds = books.filter((book) =>
      wishlist.includes(book.bookId)
    );
    setToWishlistBooksDisplay(WishlistBooksIds);
  }, []);

  return (
    <section className="py-10">
      <div className="container mx-auto space-y-10">
        <div className="bg-green-50 p-5 rounded-lg">
          <h1 className="text-3xl font-bold text-center">Books to Read</h1>
        </div>
        <div className="flex justify-end">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn w-52 bg-green-100">
              Sort By <MdOutlineKeyboardArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        <div role="tablist" className="tabs tabs-lifted">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab !w-40"
            aria-label="Read Books"
            defaultChecked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 rounded-box py-6 px-2 lg:px-0"
          >
            <div className="space-y-5">
              {toReadBooksDisplay.map((book) => (
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
