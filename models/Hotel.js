"use strict";
const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    distanceFromCity: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    checkIn: {
      type: String,
      required: true,
    },
    checkOut: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    starRating: {
      type: Number,
      required: true,
    },
    customerRatings: {
      type: Number,
    },
    price: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amenities: [
      {
        type: String,
      },
    ],
    locationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
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

module.exports = mongoose.model("Hotel", hotelSchema);
