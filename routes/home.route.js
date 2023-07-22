"use strict";
const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const { getLocationById } = require("../controllers/locationController");
const { getHotelsByLocationId } = require("../controllers/hotelController");

router.get("/category", categoryController.getCategories);
router.get("/category/:categoryId", categoryController.getLocationsByCategory);
router.get("/location/:locationId", getLocationById);
router.get("/hotels/:locationId", getHotelsByLocationId);

module.exports = router;
