import React, { useContext, useState } from "react";
import { ContextRestaurant } from "../context/ContextRestaurant";
import RestaurantApi from "../Api/RestaurantApi";

export default function AddRestaurant() {
  const { addRestaurant } = useContext(ContextRestaurant);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("Price Select");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantApi.post("/", {
        name,
        location,
        price_range: priceRange,
      });
      // adding the restaurant to context
      addRestaurant(response.data.data[0]);
      setName("");
      setLocation("");
      setPriceRange("Price Select");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-4 mt-5 ">
      <form action="">
        <div className="row">
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-3">
            <input
              type="text"
              className="form-control"
              placeholder="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="col-5">
            <select
              className="form-select"
              aria-label="Price Range"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="price select">Price select</option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
              <option value="5">$$$$$</option>
            </select>
          </div>
          <button
            type="button"
            className="btn btn-primary col-1"
            onClick={handleSubmit}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
