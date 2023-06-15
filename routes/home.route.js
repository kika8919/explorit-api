"use strict";
const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const verifyJWT = require("../middleware/verifyJWT");


// Authentication
router.get("/category", categoryController.getCategories);



// Registration
// router.post("/register", userController.registerUser);


module.exports = router;
