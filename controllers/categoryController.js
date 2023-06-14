"use strict";
const { default: mongoose } = require("mongoose");
const Category = mongoose.model("Category");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.json({ categories });
  } catch (err) {
    next(err);
  }
};

const addCategory = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.json({ categories });
  } catch (err) {
    next(err);
  }
};



module.exports = {
  getCategories,
};
