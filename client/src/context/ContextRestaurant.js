import React, { useState, createContext } from "react";

export const ContextRestaurant = createContext();

export const ContextRestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);

  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <ContextRestaurant.Provider
      value={{ restaurants, setRestaurants, addRestaurant }}
    >
      {children}
    </ContextRestaurant.Provider>
  );
};
