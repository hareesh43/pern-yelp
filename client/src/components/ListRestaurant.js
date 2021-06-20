import React, { useEffect } from "react";
import RestaurantApi from "../Api/RestaurantApi";

export default function ListRestaurant() {
  useEffect(async () => {
    try {
      const response = await RestaurantApi.get("/");
      console.log(response);
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
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>$$</td>
            <td>
              <button className="btn btn-warning">Edit</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
