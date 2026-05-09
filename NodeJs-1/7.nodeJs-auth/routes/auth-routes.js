const express = require("express");
const {
  registerUser,
  loginUser,
  changePassword,
} = require("../controllers/auth");
const authMiddleware = require("../middlewares/auth-middleware");
const router = express.Router();

// routes related to auth
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/changePassword", authMiddleware, changePassword);

module.exports = router;
