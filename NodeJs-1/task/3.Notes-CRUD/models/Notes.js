const mongoose = require("mongoose");

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Note title is required"],
    minLength: [1, "Minimum length of Note title should be 1"],
    maxLength: [30, "Maximum length of Note title should not exceed 30"],
    trim: true,
  },
  body: {
    type: String,
    required: false,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Note", NoteSchema);
