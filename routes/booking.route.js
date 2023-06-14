"use strict";
const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const verifyJWT = require("../middleware/verifyJWT");

// Authentication
router.post("/login", userController.userLogin);

// Registration
router.post("/register", userController.registerUser);

// Get Current User
router.get("/", verifyJWT, userController.getCurrentUser);

// Update User
router.put("/", verifyJWT, userController.updateUser);

module.exports = router;
