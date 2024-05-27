import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProducts() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const id = form.id.value;
    const title = form.title.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const description = form.description.value;
    const image_url = form.image_url.value;

    const data = { id, title, brand, price, description, image_url };
    console.log(data);

    await fetch("http://localhost:3000/shoes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log(data);
          form.reset();
          toast(`Successfully product added`);
        }
      });
  };

  return (
    <div className="bg-indigo-300 rounded-xl shadow-2xl">
      <ToastContainer></ToastContainer>
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
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border text-purple-700 border-indigo-100 rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="btn mt-4 w-full bg-purple-600 text-white border-purple-500 p-4 hover:text-black hover:bg-indigo-500 hover:border-indigo-500"
              type="submit"
              value="Add product"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
