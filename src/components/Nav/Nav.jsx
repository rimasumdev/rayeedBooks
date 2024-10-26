import { Link } from "react-router-dom";

const Nav = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Book Lists", path: "/book-lists" },
    { name: "Pages to Read", path: "/pages-to-read" },
  ];
  return (
    <div className="container mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow gap-2"
            >
              {navItems.map((item) => (
                <li key={item.path} className="font-bold">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl font-bold">
            <img
              src="/src/assets/img/logo.svg"
              alt="logo"
              className=" lg:block"
            />
            Rayeed&apos;s Book Store
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navItems.map((item) => (
              <li key={item.path} className="font-bold">
                <Link to={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end hidden md:flex gap-2">
          <a className="btn bg-gradient-to-r from-green-500 to-green-700 text-white hover:bg-transparent hover:text-green-950 hover:border-green-500">
            Sign In
          </a>
          <a className="btn border bg-transparent hover:bg-green-500 hover:text-white border-green-500 text-green-950">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
