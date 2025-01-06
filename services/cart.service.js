const cartModel = require("../model/cartModel");

exports.createCartProduct = async (data) => {
  const result = await cartModel.create(data);
  return result;
};

exports.getCartProducts = async () => {
  const products = await cartModel.find();
  return products;
};

exports.getCartProductById = async (id) => {
  const product = await cartModel.findById(id);
  return product;
};