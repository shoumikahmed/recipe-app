import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6">About Us</h2>
        <div className="space-y-6">
          <p className="text-lg">
            Welcome to our recipe website! Our mission is to provide delicious
            and easy-to-follow recipes for home cooks of all levels. Whether
            you're a beginner or an experienced chef, we have something for
            everyone.
          </p>
          <p className="text-lg">
            Our team is passionate about food and we believe that cooking should
            be fun and accessible to all. We are constantly exploring new
            cuisines and techniques to bring you the best recipes from around
            the world.
          </p>
          <p className="text-lg">
            We started this website as a way to share our love of cooking with
            others. Our goal is to create a community where people can come
            together to share their culinary experiences and learn from each
            other.
          </p>
          <h3 className="text-2xl font-bold">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h4 className="text-xl font-bold">John Doe</h4>
                <p className="text-gray-600">Chef & Founder</p>
                <p className="text-gray-700">
                  John is a professional chef with over 20 years of experience
                  in the culinary industry. He loves to experiment with new
                  flavors and techniques.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <img
                src="https://via.placeholder.com/150"
                alt="Team Member"
                className="w-24 h-24 rounded-full"
              />
              <div>
                <h4 className="text-xl font-bold">Jane Smith</h4>
                <p className="text-gray-600">Content Creator</p>
                <p className="text-gray-700">
                  Jane is a food blogger and photographer. She enjoys creating
                  beautiful and delicious recipes that are easy to make at home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
