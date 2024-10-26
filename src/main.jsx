import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import BookLists from "./components/BookLists/BookLists.jsx";
import PagesToRead from "./components/PagesToRead/PagesToRead.jsx";
import BookDetails from "./components/BookDetails/BookDetails.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
        path: "/pages-to-read",
        element: <PagesToRead />,
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
    <RouterProvider router={router} />
  </StrictMode>
);
