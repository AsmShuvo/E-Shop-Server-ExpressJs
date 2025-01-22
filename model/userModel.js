const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    account: {
      type: String,
      unique: true,
    },
    balance: {
      type: String,
      default: 100000,
    },
    role: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
