import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/HF_Y23_R13_W24_UK_QR3152-50_Main_low-1023cc51.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5 font-semibold">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="bg-gradient-to-r border-purple-400 from-purple-500 to-indigo-500 text-white font-bold btn rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-300">
            <Link to={"/dashboard/all-products"}>Get Started</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
