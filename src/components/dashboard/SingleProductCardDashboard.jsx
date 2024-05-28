import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SingleProductCardDashboard({ shoe, onDelete }) {
  const { id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/shoes/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast(`Successfully product deleted`);
        onDelete(id);
      });
  };

  return (
    <div className="card w-80 bg-base-200 shadow-2xl rounded-lg">
      <ToastContainer></ToastContainer>
      <figure>
        <img className="p-4" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300">
            <Link to={`/dashboard/edit-products/${id}`}>Edit</Link>
          </button>
          <button
            onClick={handleDelete}
            className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
