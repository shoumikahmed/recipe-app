import React, { useEffect, useState } from "react";
import SingleProductCardDashboard from "../components/dashboard/SingleProductCardDashboard";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/shoes")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product._id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-500">
        All Products
      </h1>
      <div className="my-16 flex flex-wrap gap-6">
        {products.map((shoe) => (
          <SingleProductCardDashboard
            key={shoe.id}
            shoe={shoe}
            onDelete={handleDeleteProduct}
          ></SingleProductCardDashboard>
        ))}
      </div>
    </div>
  );
}
