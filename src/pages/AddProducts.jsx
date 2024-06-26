import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function AddProducts() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { title, brand, price, description, image_url };
    console.log(data);

    await fetch("http://localhost:5000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Succesfully product added");
        form.reset();
        navigate("/dashboard/all-products");
      });
  };

  return (
    <div className="bg-indigo-300 rounded-xl shadow-2xl">
      <h1 className="text-5xl font-bold text-center pt-8 text-purple-700">
        Add a Product
      </h1>

      <div className="my-16 p-12">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
            />
          </div>

          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-gradient-to-r hover:border-purple-400 border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 w-full"
              type="submit"
              value="Add product"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
