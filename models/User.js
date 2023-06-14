"use strict";
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "is invalid"],
      index: true,
    },
    bio: {
      type: String,
      default: "",
    },
    image: {
      type: String,
      default: "https://static.productionready.io/images/smiley-cyrus.jpg",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator);

// @desc generate access token for a user
// @required valid email and password
userSchema.methods.generateAccessToken = function () {
  const accessToken = jwt.sign(
    {
      user: {
        firstName: this.firstName,
        lastName: this.lastName,
        id: this._id,
        email: this.email,
        password: this.password,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  return accessToken;
};

userSchema.methods.toUserResponse = function () {
  return {
    firstName: this.firstName,
    email: this.email,
    lastName: this.lastName,
    image: this.image,
    token: this.generateAccessToken(),
  };
};

userSchema.methods.toProfileJSON = function (user) {
  return {
    firstName: this.firstName,
    lastName: this.lastName,
    image: this.image,
    email: this.email,
  };
};

module.exports = mongoose.model("User", userSchema);
