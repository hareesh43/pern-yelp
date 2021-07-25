const express = require("express");
require("dotenv").config();
const cors = require("cors");
const db = require("./db");

const app = express();

// middleware

app.use(express.json());

app.use(cors());

// get Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  // const query = "select * from restaurants";
  const query =
    " select * from restaurants left join (select restaurant_id,count(rating ) as review_count,trunc(avg(rating),1) as average_rating from reviews group by restaurant_id ) reviews on reviews.restaurant_id = restaurants.id";
  // select * from restaurants left join (select restaurant_id,count(rating ) as review_count,trunc(avg(rating),2) as average_rating from reviews group by restaurant_id ) reviews on reviews.restaurant_id = restaurants.id;

  try {
    const result = await db.query(query);
    res.status(200).json({
      status: "success",
      data_length: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

// get particular Restaurants
app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const query =
      "select * from restaurants left join (select restaurant_id,count(rating ) as review_count,trunc(avg(rating),2) as average_rating from reviews group by restaurant_id ) reviews on reviews.restaurant_id = restaurants.id where id = $1";
    const reviewQuery = "select * from reviews where restaurant_id = $1";
    const restaurant = await db.query(query, [req.params.id]);
    const reviews = await db.query(reviewQuery, [req.params.id]);

    res.status(200).json({
      status: "success",
      data_length: restaurant.rows.length,
      data: { restaurant: restaurant.rows[0], reviews: reviews.rows },
    });
  } catch (error) {
    console.log(error);
  }
});

// add  Restaurants
app.post("/api/v1/restaurants", async (req, res) => {
  try {
    const { name, location, price_range } = req.body;
    const query =
      "insert into restaurants (name,location,price_range) values($1,$2,$3) returning *";
    const result = await db.query(query, [name, location, price_range]);
    res.status(201).json({
      status: "success",
      data_length: result.rows.length,
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
  }
});

// add Review
app.post("/api/v1/restaurants/:id/addReview", async (req, res) => {
  try {
    const { name, review, rating } = req.body;
    const query =
      "insert into reviews(name,restaurant_id, review, rating ) values($1,$2,$3,$4) returning *";

    const result = await db.query(query, [name, req.params.id, review, rating]);
    res.status(201).json({
      status: "success",
      data: result.rows[0],
    });
  } catch (error) {
    console.error(error);
  }
});

// update Restaurants
app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, location, price_range } = req.body;
    const query =
      "update restaurants set name = $1,location = $2 ,price_range = $3  where id = $4 returning *";
    const result = await db.query(query, [name, location, price_range, id]);
    res.status(200).json({
      status: "success",
      data_length: result.rows.length,
      data: result.rows[0],
    });
  } catch (error) {
    console.log(error);
  }
});

// delete  Restaurants
app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = "delete from restaurants where id = $1";
    const result = await db.query(query, [id]);
    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    console.log(error);
  }
});

const port = process.env.PORT || 3002;
app.listen(port, () => {
  console.log(`listening to ${port}`);
});
