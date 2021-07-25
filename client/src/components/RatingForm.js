import React, { useState } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import RestaurantApi from "../Api/RestaurantApi";

export default function RatingForm() {
  const { id } = useParams();
  const location = useLocation();
  const history = useHistory();
  const [name, setName] = useState("");
  const [rating, setRating] = useState("Rating");
  const [review, setReview] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantApi.post(`/${id}/addReview`, {
        name,
        rating,
        review,
      });
      history.push("/");
      history.push(location.pathname);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-2">
      <h3 className="text-center">Add Review</h3>
      <form action="">
        <div className="form-row row">
          <div className="form-group col-8">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              id="name"
            />
          </div>

          <div className="form-group col-4">
            <label htmlFor="rating">Rating</label>
            <select
              type=" number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="form-control custom-select"
              id="rating"
            >
              <option disable>Rating</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>

        <div className="form-group mt-3">
          <label htmlFor="review">Review</label>
          <textarea
            cols="5"
            rows="4"
            type="text"
            className="form-control"
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <button onClick={handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
