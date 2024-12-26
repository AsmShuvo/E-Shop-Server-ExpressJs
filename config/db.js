const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URL);
    console.log(`Connected to ${process.env.DB_URL}`);
  } catch (error) {
    console.log("DB Connection Error: ", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
