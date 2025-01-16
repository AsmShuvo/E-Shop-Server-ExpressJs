const {
  createCartProduct,
  getCartProducts,
  deleteCartProduct,
  updateCartProductById,
  getCartProductsByEmail,
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
    const { email } = req.query;
    const products = email
      ? await getCartProductsByEmail(email)
      : await getCartProducts();
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
    const { productId } = req.params;
    const { status, transactionId } = req.body; 
    const updateData = {};

    if (status) {
      updateData.status = status;
    }
    if (transactionId) {
      updateData.transactionId = transactionId;
    }

    await updateCartProductById(productId, updateData);
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
    console.log("Error updating cart product: ", error);
  }
};

module.exports = {
  addProductToCart,
  showProductsOfCart,
  deleteProductFromCart,
  updateCartProduct,
};
