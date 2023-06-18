"use strict";
const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const verifyJWT = require("../middleware/verifyJWT");
const { getLocationById } = require("../controllers/locationController");

// Authentication
router.get("/category", categoryController.getCategories);

router.get("/category/:categoryId", categoryController.getLocationsByCategory);
router.get("/location/:locationId", getLocationById);

// Registration
// router.post("/register", userController.registerUser);

module.exports = router;
