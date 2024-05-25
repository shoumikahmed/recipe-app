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
    <div className="grid grid-cols-12">
      <div className="col-span-2 bg-gray-300 min-h-screen p-12">
        <ul>
          <li className="border border-black p-4 text w-full">
            <Link to={"home"}>Dashboard</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"/dashboard/all-products"}>All Products</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"/dashboard/add-products"}>Add Products</Link>
          </li>
          <li className="border border-black p-4 text w-full">
            <Link to={"/"}>Home</Link>
          </li>
        </ul>
      </div>
      <div className="col-span-10 p-20">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
