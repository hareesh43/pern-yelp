import React from "react";
import Header from "../components/Header";
import AddRestaurant from "../components/AddRestaurant";
import ListRestaurant from "../components/ListRestaurant";

export default function Home() {
  return (
    <div>
      <Header />
      <AddRestaurant />
      <ListRestaurant />
    </div>
  );
}
