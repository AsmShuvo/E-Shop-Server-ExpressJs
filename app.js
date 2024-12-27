const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const { mongoose } = require("mongoose");
const { connectDB } = require("./config/db");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
const PORT = process.env.PORT || 5000;

const productsRoute = require("./routes/productsRoutes");

connectDB();

app.use("/products", productsRoute);

app.get("/", (req, res) => {
  res.send("E-Shop Server is running...");
});

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
