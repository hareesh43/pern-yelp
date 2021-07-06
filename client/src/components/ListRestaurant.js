import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import RestaurantApi from "../Api/RestaurantApi";
import { ContextRestaurant } from "../context/ContextRestaurant";

export default function ListRestaurant() {
  const { restaurants, setRestaurants } = useContext(ContextRestaurant);
  const history = useHistory();

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

  const handleDelete = async (id) => {
    try {
      const response = await RestaurantApi.delete(`/${id}`);
      console.log(response);
      setRestaurants(restaurants.filter((r) => r.id !== id));
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = (id) => {
    history.push(`/restaurant/${id}/update`);
  };
  return (
    <div>
      <table className="table  table-hover">
        <thead className="bg-info text-white">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody className="bg-dark text-white">
          {restaurants &&
            restaurants.map((val) => (
              <tr key={val.id}>
                <td>{val.name}</td>
                <td>{val.location}</td>
                <td>{"$".repeat(val.price_range)}</td>
                <td>**</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEdit(val.id)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(val.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
