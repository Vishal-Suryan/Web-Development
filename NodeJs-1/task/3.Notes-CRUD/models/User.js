const { trim } = require("lodash");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      maxLength: [10, "Length of username should not exceed 10 Chars"],
      minLength: [1, "Length of username should be atleast 1"],
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: [3, "Length of password should be atleast 3"],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("User", userSchema);
