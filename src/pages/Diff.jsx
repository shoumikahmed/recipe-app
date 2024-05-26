import React from "react";

export default function Diff() {
  return (
    <div className="diff aspect-[18/7] my-8 p-6">
      <div className="diff-item-1">
        <img src="https://hips.hearstapps.com/hmg-prod/images/crepes-index-64347419e3c7a.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*" />
      </div>
      <div className="diff-item-2">
        <img src="https://www.foodandwine.com/thmb/fjNakOY7IcuvZac1hR3JcSo7vzI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-pasta-sausage-basil-and-mustard-hero-06-cfd1c0a2989e474ea7e574a38182bbee.jpg" />
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
}
