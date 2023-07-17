const mongoose = require("mongoose");
require("../models/User");
require("../models/Image");
require("../models/Location");
require("../models/Category");
require("../models/Activity");
require("../models/Hotel");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
