"use strict";
const { default: mongoose } = require("mongoose");
const Hotels = mongoose.model("Hotel");

const getHotelsByLocationId = async (req, res, next) => {
  try {
    const hotels = await Hotels.find({
      locationId: req.params.locationId,
    }).populate([
      {
        path: "images",
      },
    ]);

    res.json(hotels);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getHotelsByLocationId,
};
