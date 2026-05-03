const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth");
const router = express.Router();

// routes related to auth
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
