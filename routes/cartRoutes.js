const express = require("express");
const {
  addProductToCart,
  showProductsOfCart,
} = require("../controller/cartController");
const router = express.Router();

router.post("/", addProductToCart);
router.get("/", showProductsOfCart);

module.exports = router;