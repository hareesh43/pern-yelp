import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import RestaurantApi from "../Api/RestaurantApi";
import { ContextRestaurant } from "../context/ContextRestaurant";

import UpdateRestaurant from "../components/UpdateRestaurant";

export default function UpdateDetails() {
 

  return (
    <>
      <h1 className="text-center  ">Update Restaurant</h1>
      <UpdateRestaurant />
    </>
  );
}
