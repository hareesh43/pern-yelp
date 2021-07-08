import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import RestaurantApi from "../Api/RestaurantApi";
import { ContextRestaurant } from "../context/ContextRestaurant";

export default function Details() {
  const { id } = useParams();
  const history = useHistory();
  const { selectedRestaurant, setselectedRestaurant } =
    useContext(ContextRestaurant);

  const getRestaurant = async () => {
    try {
      const response = await RestaurantApi.get(`/${id}`);

      setselectedRestaurant(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <>
      <h1 className="text-center">
        {selectedRestaurant && selectedRestaurant.name}
      </h1>
    </>
  );
}
