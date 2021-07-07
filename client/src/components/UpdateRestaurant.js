import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import RestaurantApi from "../Api/RestaurantApi";
import { ContextRestaurant } from "../context/ContextRestaurant";

export default function UpdateRestaurant() {
  const { id } = useParams();
  const history = useHistory();
  const { addRestaurant } = useContext(ContextRestaurant);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("");

  const getRestaurant = async () => {
    const response = await RestaurantApi.get(`/${id}`);
    const { name, location, price_range } = response.data.data;
    setName(name);
    setLocation(location);
    setPriceRange(price_range);
  };
  useEffect(() => {
    getRestaurant();
  }, []);
  const handleClick = async (e) => {
    e.preventDefault();
    const response = await RestaurantApi.put(`/${id}`, {
      name,
      location,
      price_range: priceRange,
    });
    history.push(`/`);
    console.log(response);
  };

  return (
    <div className="container">
      <form>
        <div className="form-group mt-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="form-control input mt-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="lacation"
            className="form-control input mt-2"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="priceRange">Price Range</label>
          <input
            type="number"
            id="priceRange"
            className="form-control input mt-2"
            placeholder="Price Range"
            min="0"
            max="5"
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary mt-2"
            onClick={handleClick}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
