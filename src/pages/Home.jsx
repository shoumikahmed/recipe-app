import React from "react";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import { useLoaderData } from "react-router-dom";

export default function Home() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <Banner></Banner>
      <Products data={data}></Products>
    </div>
  );
}
