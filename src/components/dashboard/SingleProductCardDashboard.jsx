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
          <button className="btn bg-blue-500 text-white hover:text-black">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
          <button className="btn bg-green-500 text-white hover:text-black">
            <Link to={`/dashboard/edit-products/${id}`}>Edit</Link>
          </button>
          <button
            onClick={handleDelete}
            className="btn bg-red-500 text-white hover:text-black"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
