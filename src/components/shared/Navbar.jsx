import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleSignOut = async () => {
    const success = await signOut();
    if (success) {
      alert("Log out");
    }
  };

  return (
    <div className="navbar bg-gray-400">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <a
          href="/"
          className="btn btn-ghost text-2xl font-bold text-gray-600 hover:text-gray-700"
        >
          Culinary Recipes
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link
              to={"/"}
              className="btn btn-ghost text-xl text-gray-600 hover:underline hover:text-gray-700"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="btn btn-ghost text-xl text-gray-600 hover:underline hover:text-gray-700"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="btn btn-ghost text-xl text-gray-600 hover:underline hover:text-gray-700"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end ">
        {!user?.email ? (
          <>
            <Link
              to={"/login"}
              className="btn bg-gray-600 border-gray-600 text-white hover:text-gray-700 mr-2"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn bg-gray-600 border-gray-600 text-white hover:text-gray-700"
            >
              Register
            </Link>
          </>
        ) : (
          <div className="flex gap-4 items-center">
            <Link
              to={"/dashboard"}
              className="btn bg-gray-600 border-gray-600 text-white hover:text-gray-700"
            >
              Dashboard
            </Link>

            <div>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-11">
                  <span className="text-xs">UI</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleSignOut}
              className="btn bg-gray-600 border-gray-600 text-white hover:text-gray-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
