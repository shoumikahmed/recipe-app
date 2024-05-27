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
          <button className="btn bg-gray-600 border-gray-600 text-white hover:text-gray-700">
            <Link to={`/products/${id}`}>See details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
