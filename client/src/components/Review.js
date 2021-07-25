import React from "react";
import StarRating from "./StarRating";

export default function Review({ reviews }) {
  return (
    <div className="row mb-2">
      {reviews &&
        reviews.map((ele) => (
          <div
            key={ele.id}
            class=" col-3 card text-white bg-primary mb-3 m-4"
            style={{ maxWidth: "35%" }}
          >
            <div class="card-header d-flex justify-content-between ">
              <span>{ele.name}</span>
              <span>{<StarRating rating={ele.rating} />}</span>
            </div>
            <div class="card-body">
              <p class="card-text">{ele.review}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
