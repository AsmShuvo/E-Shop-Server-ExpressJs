const express = require("express");
const {
  addProductToCart,
  showProductsOfCart,
  deleteProductFromCart,
  updateCartProduct,
} = require("../controller/cartController");
const router = express.Router();

router.post("/", addProductToCart);
router.get("/", showProductsOfCart);
router.delete("/:productId", deleteProductFromCart);
router.put("/:productId", updateCartProduct); 

module.exports = router;
