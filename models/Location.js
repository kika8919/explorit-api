"use strict";
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");

const locationSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    activities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity",
      },
    ],
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      default: "India",
    },
    images: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image",
      },
    ],
    lnglat: { lng: Number, lat: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Location", locationSchema);
