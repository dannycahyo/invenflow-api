import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a product name"],
  },
  price: {
    type: Number,
    required: [true, "Please provide a product price"],
  },
  quantity: {
    type: Number,
    required: [true, "Please provide a product quantity"],
  },
  category: {
    type: String,
    required: [true, "Please provide a product category"],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
