"use strict";
const express = require("express");
const router = express.Router();
const verifyJWT = require("../middleware/verifyJWT");
const {
  bookNow,
  getBookingsByEmail,
} = require("../controllers/bookingController");

// Authentication
router.post("/", verifyJWT, bookNow);

router.get("/:email", verifyJWT, getBookingsByEmail);

module.exports = router;
