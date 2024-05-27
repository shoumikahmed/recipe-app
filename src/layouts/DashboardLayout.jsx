import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import auth from "../firebase/firebase.config";

export default function DashboardLayout() {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="grid grid-cols-12 bg-base-300">
      <div className="col-span-2 bg-gray-300 min-h-screen lg:p-12 sm:flex sm:pt-10 sm:pl-3 sm:pr-3">
        <ul className="">
          <li className="border text-gray-700 mb-2 btn bg-base-300 border-base-300 hover:text-gray-800 hover:underline shadow-xl p-4 text w-full">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className="border text-gray-700 mb-2 btn bg-base-300 border-base-300 hover:text-gray-800 hover:underline shadow-xl p-4 text w-full">
            <Link className="sm:-m-2" to={"/dashboard/all-products"}>
              All Products
            </Link>
          </li>
          <li className="border text-gray-700 mb-2 btn bg-base-300 border-base-300 hover:text-gray-800 hover:underline shadow-xl p-4 text w-full">
            <Link className="sm:-m-2" to={"/dashboard/add-products"}>
              Add Products
            </Link>
          </li>
          <li className="border text-gray-700 mb-2 btn bg-base-300 border-base-300 hover:text-gray-800 hover:underline shadow-xl p-4 text w-full">
            <Link className="sm:-m-2" to={"/"}>
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
