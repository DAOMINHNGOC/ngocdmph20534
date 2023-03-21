import axios from "axios";
import dotenv from "dotenv";
import joi from "joi";
import Product from "../models/products.js";
dotenv.config();

const productSchema = joi.object({
  name: joi.string().required(),
  price: joi.number().required(),
  description: joi.string(),
});

const getAll = async (req, res) => {
  try {
    const products = await Product.find();
    // const { data: products } = await axios.get(
    //   `${process.env.API_URL}/products`
    // );
    return res.json({
      message: "Láy sản phẩm thành công",
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    // const { data: products } = await axios.get(
    //   `${process.env.API_URL}/products/${req.params.id}`
    // );
    return res.json({
      message: "Láy sản phẩm thành công",
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

const remove = async (req, res) => {
  try {
    const products = await Product.findByIdAndDelete(req.params.id);
    // const { data: products } = await axios.delete(
    //   `${process.env.API_URL}/products/${req.params.id}`
    // );
    return res.json({
      message: "Xóa sản phẩm thành công",
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

const update = async (req, res) => {
  try {
    const products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // const { error } = productSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).json({
    //     message: error,
    //   });
    // }
    // const { data: products } = await axios.put(
    //   `${process.env.API_URL}/products/${req.params.id}`,
    //   req.body
    // );
    return res.json({
      message: "Cập nhật sản phẩm thành công",
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

const create = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    // const { error } = productSchema.validate(req.body);
    // if (error) {
    //   return res.status(400).json({
    //     message: error,
    //   });
    // }
    // const { data: products } = await axios.post(
    //   `${process.env.API_URL}/products`,
    //   req.body
    // );
    return res.json({
      message: "Thêm sản phẩm thành công",
      products,
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
};

export { get, getAll, create, remove, update };
