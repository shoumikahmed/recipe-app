import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EditProducts() {
  const shoe = useLoaderData();
  console.log(shoe);

  const [title, setTitle] = useState(shoe.title);
  const [price, setPrice] = useState(shoe.price);
  const [brand, setBrand] = useState(shoe.brand);
  const [id, setId] = useState(shoe.id);
  const [description, setDescription] = useState(shoe.description);
  const [image_url, setImageURL] = useState(shoe.image_url);

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

    await fetch(`http://localhost:3000/shoes/${shoe.id}`, {
      method: "PATCH",
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
          toast(`Successfully product's data updated`);
        }
      });
  };

  return (
    <div className="bg-indigo-300 rounded-xl shadow-2xl">
      <ToastContainer></ToastContainer>
      <h1 className="text-5xl font-bold text-center pt-8 text-purple-700">
        Edit Product
      </h1>

      <div className="my-16 p-12">
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="brand"
              placeholder="Brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="number"
              name="price"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="image_url"
              placeholder="Image URL"
              value={image_url}
              onChange={(e) => setImageURL(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input
              className="bg-gray-100 p-4 w-full border border-black rounded-lg"
              type="text"
              name="id"
              placeholder="ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="mt-2 flex justify-center items-center">
            <input
              className="bg-gradient-to-r border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300 w-full"
              type="submit"
              value="Update product's data"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
