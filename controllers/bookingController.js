"use strict";
const { default: mongoose } = require("mongoose");
const Booking = mongoose.model("Booking");

const getBookingsByUserId = async (req, res, next) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId }).populate([
      {
        path: "hotel",
      },
    ]);
    return res.json(bookings);
  } catch (err) {
    next(err);
  }
};

const bookNow = async (req, res, next) => {
  try {
    const newBooking = new Booking(req.body.booking);
    const createdBooking = await Booking.create(newBooking);

    if (createdBooking) {
      // user object created successfully
      res.status(201).json({
        status: "success",
      });
    } else {
      res.status(422).json({
        errors: {
          body: "Unable to create a booking",
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  bookNow,
  getBookingsByUserId,
};
