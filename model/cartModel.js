const mongoose = require("mongoose");

const cartProductSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
    },
    productName: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
    },
    user: {
      type: String,
      required: true,
    },
    transactionId: {
      type: String, // Add this field
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Cart", cartProductSchema);
