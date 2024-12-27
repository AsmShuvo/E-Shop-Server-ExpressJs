const express = require("express");
const router = express.Router();
const {
  addProduct,
  showProducts,
  showProductById,
} = require("../controller/productsController");

router.post("/", addProduct);
router.get("/", showProducts);
router.get("/:id", showProductById);

module.exports = router;
