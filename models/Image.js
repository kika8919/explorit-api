"use strict";
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");

const imageSchema = new mongoose.Schema(
  {
    imageId: { type: String, required: true },
    url: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Image", imageSchema);
