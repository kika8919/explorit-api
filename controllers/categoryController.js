"use strict";
const { default: mongoose } = require("mongoose");
const Category = mongoose.model("Category");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();
    return res.json(categories);
  } catch (err) {
    next(err);
  }
};

const getLocationsByCategory = async (req, res, next) => {
  try {
    const category = await Category.findOne({
      _id: req.params.categoryId,
    }).populate([
      {
        path: "locations",
        populate: { path: "images" },
      },
      {
        path: "locations",
        populate: { path: "activities" },
      },
    ]);

    res.json(category.locations);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getCategories,
  getLocationsByCategory,
};