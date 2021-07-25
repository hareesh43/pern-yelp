import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import RestaurantApi from "../Api/RestaurantApi";
import RatingForm from "../components/RatingForm";
import Review from "../components/Review";
import StarRating from "../components/StarRating";
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

  const handleRating = (rating, reviewCount) => {
    if (!rating) {
      return <span>0 Review</span>;
    }
    return (
      <>
        <StarRating rating={rating} />
        <span>({reviewCount})</span>
      </>
    );
  };

  return (
    <>
      {selectedRestaurant && (
        <>
          <h1 className="text-center">{selectedRestaurant.restaurant.name}</h1>
          <div className="text-center">
            {handleRating(
              selectedRestaurant.restaurant.average_rating,
              selectedRestaurant.restaurant.review_count
            )}
          </div>
          <div className="mt-2">
            <Review reviews={selectedRestaurant.reviews} />
            <RatingForm />
          </div>
        </>
      )}
    </>
  );
}
