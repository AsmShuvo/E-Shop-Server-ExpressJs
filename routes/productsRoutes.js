const express = require("express");
const router = express.Router();
const {
  addProduct,
  showProducts,
} = require("../controller/productsController");

router.post("/", addProduct);
router.get("/", showProducts);

module.exports = router;
