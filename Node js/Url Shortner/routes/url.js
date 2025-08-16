const express = require("express");
const router = express.Router();
const {
  handleGenerateNewShortURL,
  handleGetAnalytics,
} = require("../coontrollers/url");
router.post("/", handleGenerateNewShortURL);
router.get("/analytics/:shortId", handleGetAnalytics);
module.exports = router;
