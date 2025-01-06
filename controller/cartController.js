const {
  createCartProduct,
  getCartProducts,
} = require("../services/cart.service");

const addProductToCart = async (req, res) => {
  try {
    console.log("Add product called");
    console.log(req.body);
    const product = await createCartProduct(req.body);
    console.log("item to add into cart ", product);
    res.status(200).json({
      status: "Success",
      message: "Product Added to cart Successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "failed to add product to cart",
      error: error.message,
    });
    console.log(error.message);
  }
};

const showProductsOfCart = async (req, res) => {
  try {
    const products = await getCartProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Error Showing Products",
      error: error.message,
    });
  }
};

module.exports = { addProductToCart, showProductsOfCart };
