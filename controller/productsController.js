const { createProduct, getProducts } = require("../services/product.services");

const addProduct = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "failed to add product",
      error: error.message,
    });
  }
};

const showProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Error Showing Products",
      error: error.message,
    });
  }
};

module.exports = { addProduct, showProducts };
