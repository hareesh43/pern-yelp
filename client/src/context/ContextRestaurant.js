import React, { useState, createContext } from "react";

export const ContextRestaurant = createContext();

export const ContextRestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setselectedRestaurant] = useState(null);

  const addRestaurant = (restaurant) => {
    setRestaurants([...restaurants, restaurant]);
  };

  return (
    <ContextRestaurant.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurant,
        selectedRestaurant,
        setselectedRestaurant,
      }}
    >
      {children}
    </ContextRestaurant.Provider>
  );
};
