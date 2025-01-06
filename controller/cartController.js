const {
  createCartProduct,
  getCartProducts,
  deleteCartProduct,
} = require("../services/cart.service");

const addProductToCart = async (req, res) => {
  try {
    console.log("item ", req.body);
    const product = await createCartProduct(req.body);
    console.log("item to add into cart ", product);
    res.status(200).json({
      status: "Success",
      message: "Product Added to cart Successfully",
    });
  } catch (error) {
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

const deleteProductFromCart = async (req, res) => {
  try {
    const { productId } = req.params;
    await deleteCartProduct(productId);
    res.status(200).json({
      status: "Success",
      message: "Product removed from cart successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Error removing product from cart",
      error: error.message,
    });
  }
};

module.exports = {
  addProductToCart,
  showProductsOfCart,
  deleteProductFromCart,
};
