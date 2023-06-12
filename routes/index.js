"use strict";
const express = require("express");
const router = express.Router();

router.use("/user", require("./userRoutes"));

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
