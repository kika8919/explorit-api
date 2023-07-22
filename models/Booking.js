"use strict";
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    hotel: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    user: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    contact: {
      type: String,
      required: true,
    },
    dates: {
      type: Object,
      required: true,
    },
    noOfPeople: {
      type: String,
    },

    email: {
      type: String,
    },

    pricePerNight: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
