import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center py-2 text-[#80eb34]">Book ViBes</h1>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/booklist">Book List</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl hidden md:flex">Book ViBes</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/booklist">Book List</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-2 ">
          <a className="btn bg-[#23BE0A]">Sign In</a>
          <a className="btn bg-[#59C6D2]">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
