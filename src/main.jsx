import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import BookLists from "./components/BookLists/BookLists.jsx";
import BooksToRead from "./components/BooksToRead/BooksToRead.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
import { HelmetProvider } from "react-helmet-async";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App />
        <ScrollRestoration />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/book-lists",
        element: <BookLists />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/books-to-read",
        element: <BooksToRead />,
        loader: () => fetch("/books.json"),
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
        loader: () => fetch("/books.json"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
