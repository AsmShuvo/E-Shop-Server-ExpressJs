const {
  createProduct,
  getProducts,
  getProductById,
} = require("../services/product.services");

const addProduct = async (req, res) => {
  try {
    const product = await createProduct(req.body);
    res.status(200).json({
      status: "Success",
      message: "Product Added Successfully",
    });
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

const showProductById = async (req, res) => {
  try {
    // console.log("finding product by id");
    const { id } = req.params;
    console.log("id=", id);
    const product = await getProductById(id);
    console.log("Found Product: ", product);
    if (!product) {
      return res.status(404).json({
        status: "fail",
        message: "product not found",
      });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Error showing product",
      error: error.message,
    });
  }
};

module.exports = { addProduct, showProducts, showProductById };
