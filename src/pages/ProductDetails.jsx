import React from "react";
import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const shoe = useLoaderData();
  console.log(shoe);

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl m-10">
      <figure>
        <img className="w-[400px]" src={image_url} alt="Album" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <h2 className="card-title">${price}</h2>
        <h2 className="card-title">{brand}</h2>
        <p className="">{description}</p>
      </div>
    </div>
  );
}
