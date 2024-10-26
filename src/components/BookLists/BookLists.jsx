import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
const BookLists = () => {
  const data = useLoaderData();
  // console.log("data", data);
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center">Books</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center px-4 py-10">
          {data.map((book) => (
            <Book key={book.bookId} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookLists;
