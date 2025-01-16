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

exports.deleteCartProduct = async (productId) => {
  await cartModel.deleteOne({ productId });
};

exports.updateCartProductById = async (productId, updateData) => {
  console.log(updateData);
  await cartModel.updateOne({ productId }, { $set: updateData });
};
exports.getCartProductsByEmail = async (email) => {
  const products = await cartModel.find({ user: email });
  return products;
};

exports.updateCartProductById = async (productId, updateData) => {
  await cartModel.updateOne({ productId }, { $set: updateData });
};