const mongoose = require("mongoose");

const checkoutProductSchema = new mongoose.Schema(
  {
    method: {
      type: String,
      required: true,
    },
    productIds: {
      type: [String],
      required: true,
    },
    productNames: {
      type: [String],
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    trxId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Checkout", checkoutProductSchema);
