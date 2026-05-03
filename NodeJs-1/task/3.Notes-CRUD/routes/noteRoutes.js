const express = require("express");

const {
  getSingleNote,
  getAllNotes,
  addNewNote,
  updateNote,
  deleteNote,
} = require("../controllers/notesController");

const router = express.Router();

router.get("/get", getAllNotes);
router.get("/get/:id", getSingleNote);
router.post("/add", addNewNote);
router.put("/update/:id", updateNote);
router.delete("/delete/:id", deleteNote);

module.exports = router;
