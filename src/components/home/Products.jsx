import React from "react";
import SingleProducts from "../shared/SingleProducts";

const Products = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1 className="my-8 text-2xl font-bold text-center">Our Products</h1>
      <div className="flex justify-center gap-4">
        {data.slice(0, 3).map((shoe) => (
          <SingleProducts key={shoe.id} shoe={shoe}></SingleProducts>
        ))}
      </div>
    </div>
  );
};

export default Products;
