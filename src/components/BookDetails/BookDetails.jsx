import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
  addToLocalStorage,
  getFromLocalStorage,
} from "../../utility/LocalStorage";
const BookDetails = () => {
  const books = useLoaderData();
  // console.log("books", books);
  const { id } = useParams();
  //   console.log("bookId", id);
  const book = books.find((book) => book.bookId === parseInt(id));
  //   console.log("bookDetails: ", book);
  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  const readBooks = getFromLocalStorage("readBooks");
  const wishlist = getFromLocalStorage("wishlist");
  const [isRead, setIsRead] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);
  useEffect(() => {
    const existingReadBooksIds = readBooks.find(
      (bookId) => parseInt(bookId) === parseInt(id)
    );
    if (existingReadBooksIds) {
      setIsRead(true);
    }
    const existingWishlistIds = wishlist.find(
      (bookId) => parseInt(bookId) === parseInt(id)
    );
    if (existingWishlistIds) {
      setIsWishlist(true);
    }
  }, [id, readBooks, wishlist]);
  const handleAddTo = (e) => {
    if (e.target.innerText === "Read Now") {
      if (!isRead) {
        addToLocalStorage(parseInt(id), "readBooks");
        notify("Added to read", "success");
        setIsRead(true);
        console.log("Read Success  ", bookName);
      } else {
        notify(`${bookName} already added to read`, "error");
        console.log("Read Error  ", bookName);
      }
    } else if (e.target.innerText === "Wishlist") {
      if (!isWishlist && !isRead) {
        addToLocalStorage(parseInt(id), "wishlist");
        notify("Added to wishlist", "success");
        setIsWishlist(true);
        console.log("Wishlist Success", bookName);
      } else {
        notify(
          `${bookName} cannot be added to wishlist. already added to read`,
          "error"
        );
        console.log("Wishlist Error  ", bookName);
      }
    }
  };
  const notify = (msg, type) => {
    toast(msg, {
      style: {
        background: type === "success" ? "#059669" : "#ef4444",
        color: "white",
      },
    });
  };
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>{bookName} | Rayeed Book Store</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4 py-10 auto-rows-auto">
        <img
          src={image}
          alt={bookName}
          className="w-full h-[600px] object-contain bg-green-50 rounded-lg p-4"
        />
        <div className="space-y-4 md:border-l md:border-dashed md:border-gray-300 md:pl-12">
          <h1 className="text-3xl md:text-4xl font-bold">{bookName}</h1>
          <p className="text-xl italic border-b border-dashed border-gray-300 pb-4">
            <span className="font-bold">By:</span> {author}
          </p>
          <h2 className="text-xl font-semibold border-b border-dashed border-gray-300 pb-4">
            {category}
          </h2>
          <p>
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <p className="flex gap-2 flex-wrap border-b border-dashed border-gray-300 pb-4">
            <span className="font-bold ">Tags:</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="badge outline outline-1 outline-green-500 text-black p-3"
              >
                #{tag}
              </span>
            ))}
          </p>
          <p>
            <span className="font-bold">Publisher:</span> {publisher}
          </p>
          <p>
            <span className="font-bold">Year of Publishing:</span>{" "}
            {yearOfPublishing}
          </p>
          <p>
            <span className="font-bold">Rating:</span> {rating}
          </p>
          <p>
            <span className="font-bold">Total Pages:</span> {totalPages}
          </p>
          <div className="flex gap-4">
            <button onClick={handleAddTo} className="btn btn-primary">
              Read Now
            </button>
            <button onClick={handleAddTo} className="btn btn-secondary">
              Wishlist
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="custom-toast"
      />
    </div>
  );
};

export default BookDetails;
