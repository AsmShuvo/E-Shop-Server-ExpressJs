const { mongoose } = require("mongoose");
const productModel = require("../model/productModel");

exports.createProduct = async (data) => {
  const result = await productModel.create(data);
  return result;
};

exports.getProducts = async () => {
  const products = await productModel.find();
  return products;
};
