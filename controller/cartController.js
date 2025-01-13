const {
  createCartProduct,
  getCartProducts,
  deleteCartProduct,
  updateCartProductById,
} = require("../services/cart.service");

const addProductToCart = async (req, res) => {
  try {
    const product = await createCartProduct(req.body);
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
    // console.log(products);
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

const updateCartProduct = async (req, res) => {
  try {
    console.log("Update called");
    const { productId } = req.params;
    const { transactionId } = req.body;
    console.log(productId, transactionId);
    await updateCartProductById(productId, { transactionId });
    res.status(200).json({
      status: "Success",
      message: "Cart product updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Error updating cart product",
      error: error.message,
    });
    console.log("Error updating trxId: ", error);
  }
};

module.exports = {
  addProductToCart,
  showProductsOfCart,
  deleteProductFromCart,
  updateCartProduct,
};
