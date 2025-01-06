const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    account: {
      type: String,
      required: true,
      unique: true,
    },
    role: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
