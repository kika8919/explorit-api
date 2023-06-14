"use strict";
const express = require("express");
const router = express.Router();

router.use("/user", require("./user.route"));

router.use("/home", require("./home.route"));

router.use("/booking", require("./booking.route"));

router.get("/health", (req, res, next) => {
  try {
    res.json({
      uptime: process.uptime(),
      status: "healthy",
      timestamp: new Date(),
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
