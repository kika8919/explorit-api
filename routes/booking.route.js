"use strict";
const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const {
  bookNow,
  getBookingsByUserId,
} = require("../controllers/bookingController");

// Authentication
router.post("/", verifyJWT, bookNow);

router.get("/:userId", verifyJWT, getBookingsByUserId);

module.exports = router;
