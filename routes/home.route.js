"use strict";
const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");
const verifyJWT = require("../middleware/verifyJWT");

// Authentication
router.get("/category", categoryController.userLogin);



// Registration
router.post("/register", userController.registerUser);


module.exports = router;
