import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantApi from "../Api/RestaurantApi";
import { ContextRestaurant } from "../context/ContextRestaurant";

export default function UpdateRestaurant() {
  const { id } = useParams();
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

  return (
    <div>
      <form className="form-control">
        <input
          type="text"
          className="form-control input"
          value={name}
          placeholder="Name"
        />
        <input
          type="text"
          className="form-control input"
          placeholder="Location"
          value={location}
        />
        <input
          type="number"
          className="form-control input"
          placeholder="Price Range"
          value={priceRange}
        />
      </form>
    </div>
  );
}
