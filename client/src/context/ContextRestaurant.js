import React, { useState, createContext } from "react";

const ContextRestaurant = createContext();

export const ContextRestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <ContextRestaurant.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </ContextRestaurant.Provider>
  );
};
