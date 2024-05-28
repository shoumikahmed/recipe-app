import React from "react";
import { Link } from "react-router-dom";

const SingleProducts = ({ shoe }) => {
  const { id, title, brand, price, description, image_url } = shoe;
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img className="p-4" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">{brand}</h3>
        <h3 className="text-xl font-semibold">{price}</h3>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="bg-gradient-to-r border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
