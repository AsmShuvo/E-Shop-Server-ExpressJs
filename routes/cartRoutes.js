const express = require("express");
const {
  addProductToCart,
  showProductsOfCart,
  deleteProductFromCart,
} = require("../controller/cartController");
const router = express.Router();

router.post("/", addProductToCart);
router.get("/", showProductsOfCart);
router.delete("/:productId", deleteProductFromCart);

module.exports = router;
