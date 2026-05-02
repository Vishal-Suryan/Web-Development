const Book = require("../models/Book");

const getAllBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({});
    if (allBooks.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of books fetched successfully",
        data: allBooks,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Books found",
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
const getSingleBook = async (req, res) => {
  try {
    const bookDetailsById = await Book.findById(req.params.id);
    if (bookDetailsById) {
      res.status(200).json({
        success: true,
        message: "Book fetched successfully",
        data: bookDetailsById,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Book found with this ID",
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
const addNewBook = async (req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);
    if (newBookFormData) {
      res.status(201).json({
        success: true,
        message: "Book added",
        data: newlyCreatedBook,
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
const updateSingleBook = async (req, res) => {
  try {
    const formData = req.body;
    const getCurrId = req.params.id;
    const bookDetailsById = await Book.findByIdAndUpdate(getCurrId, formData, {
      new: true,
    });
    if (bookDetailsById) {
      res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: bookDetailsById,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Book found with this ID",
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
const deleteBook = async (req, res) => {
  try {
    const getCurrentBookById = await Book.findByIdAndDelete(req.params.id);
    if (getCurrentBookById) {
      res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: getCurrentBookById,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Book found with this ID",
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
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateSingleBook,
  deleteBook,
};
