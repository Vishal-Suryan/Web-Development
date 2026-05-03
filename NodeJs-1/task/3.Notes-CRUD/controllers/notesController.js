const Note = require("../models/Notes");

const addNewNote = async (req, res) => {
  try {
    const newNote = await Note.create(req.body);
    if (newNote) {
      res.status(201).json({
        success: true,
        message: "Note created successfully",
        data: newNote,
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    if (notes.length > 0) {
      res.status(200).json({
        success: true,
        message: "Notes fetched successfully",
        data: notes,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Notes Found",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const getSingleNote = async (req, res) => {
  try {
    const getNote = await Note.findById(req.params.id);
    if (getNote) {
      res.status(200).json({
        success: true,
        message: "Note fetched successfully",
        data: getNote,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const updateNote = async (req, res) => {
  try {
    const getNote = await Note.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (getNote) {
      res.status(200).json({
        success: true,
        message: "Note updated successfully",
        data: getNote,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

const deleteNote = async (req, res) => {
  try {
    const getNote = await Note.findByIdAndDelete(req.params.id);
    if (getNote) {
      res.status(200).json({
        success: true,
        message: "Note deleted successfully",
        data: getNote,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Note not found",
      });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
    });
  }
};

module.exports = {
  getSingleNote,
  getAllNotes,
  addNewNote,
  updateNote,
  deleteNote,
};
