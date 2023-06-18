"use strict";
const { default: mongoose } = require("mongoose");
const Location = mongoose.model("Location");

const getLocationById = async (req, res, next) => {
  try {
    const location = await Location.findOne({
      _id: req.params.locationId,
    }).populate([
      {
        path: "images",
      },
      {
        path: "activities",
      },
    ]);

    res.json(location);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getLocationById,
};
