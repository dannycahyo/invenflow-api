import Product from "../models/Product.js";

export const getAllProducts = async () => {
  return await Product.find();
};

export const getProductById = async (id) => {
  return await Product.findById(id);
};

export const createProduct = async (productData) => {
  return await Product.create(productData);
};

export const modifyProduct = async (id, productData) => {
  return await Product.findByIdAndUpdate(id, productData, {
    new: true,
  });
};

export const removeProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};
