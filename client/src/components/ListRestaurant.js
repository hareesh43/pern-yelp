import React, { useContext, useEffect } from "react";
import RestaurantApi from "../Api/RestaurantApi";
import { ContextRestaurant } from "../context/ContextRestaurant";

export default function ListRestaurant() {
  const { restaurants, setRestaurants } = useContext(ContextRestaurant);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const response = await RestaurantApi.get("/");
    console.log(response.data.data);
    setRestaurants(response.data.data);
  };

  useEffect(() => {
    try {
      fetchData();
    } catch (error) {}
  }, []);

  return (
    <div>
      <table className="table  table-hover">
        <thead className="bg-info text-white">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-dark text-white">
          {restaurants.map((val) => (
            <tr>
              <th key={val.id} scope="row">
                {val.id}
              </th>
              <td>{val.name}</td>
              <td>{val.location}</td>
              <td>{"$".repeat(val.price_range)}</td>
              <td>**</td>
              <td>
                <button className="btn btn-warning">Edit</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
