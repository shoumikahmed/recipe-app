import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function SingleProductCardDashboard({ shoe, onDelete }) {
  const { _id, title, brand, price, description, image_url } = shoe;

  const handleDelete = async () => {
    await fetch(`http://localhost:5000/shoes/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        toast.success(`Product deleted`);
        onDelete(_id);
      });
  };

  return (
    <div className="card w-80 bg-base-200 shadow-2xl rounded-lg">
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
            <Link to={`/products/${_id}`}>See details</Link>
          </button>
          <button className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300">
            <Link to={`/dashboard/edit-products/${_id}`}>Edit</Link>
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
