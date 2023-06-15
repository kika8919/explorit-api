"use strict";
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");

const activitySchema = new mongoose.Schema(
  {
    // activityId: { type: String, required: true },
    type: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Activity", activitySchema);
