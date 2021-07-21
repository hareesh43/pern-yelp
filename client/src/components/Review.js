import React from "react";
import StarRating from "./StarRating";

export default function Review({ reviews }) {
  return (
    <div className="row row-col-3 mb-2">
      {reviews && reviews.map((ele) => (
        <div
          key={ele.id}
          class="card text-white bg-primary mb-3 mr-4 ml-4"
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
