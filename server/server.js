const express = require("express");
require("dotenv").config();
const db = require("./db");

const app = express();

// middleware
app.use(express.json());

// get Restaurants
app.get("/api/v1/restaurants", async (req, res) => {
  const query = "select * from restaurants";
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
  const query = "select * from restaurants where id = $1";
  try {
    const result = await db.query(query, [req.params.id]);

    res.status(200).json({
      status: "success",
      data_length: result.rows.length,
      data: result.rows[0],
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
      data: result.rows,
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
