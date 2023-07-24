"use strict";
const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    hotel: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hotel",
    },
    userEmail: {
      required: true,
      type: String,
    },
    contactPhoneNumber: {
      type: String,
      required: true,
    },
    dates: {
      type: Object,
      required: true,
    },
    noOfPeople: {
      type: Number,
      required: true,
    },
    contactEmail: {
      type: String,
    },
    pricePerNightAtBooking: {
      type: String,
      required: true,
    },
    totalCost: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
