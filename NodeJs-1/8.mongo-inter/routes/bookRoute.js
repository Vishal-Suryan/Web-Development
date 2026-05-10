const express = require("express");
const {
  createAuthor,
  createBook,
  getBookWithAuthor,
} = require("../controllers/bookController");

const router = express.Router();

router.post("/author", createAuthor);
router.post("/bookCreate", createBook);
router.get("/get/:id", getBookWithAuthor);

module.exports = router;
