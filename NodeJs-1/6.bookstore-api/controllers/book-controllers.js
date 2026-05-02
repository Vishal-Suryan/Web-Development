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
const getSingleBook = async (req, res) => {};
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
const updateSingleBook = async (req, res) => {};
const deleteBook = async (req, res) => {};

module.exports = {
  getAllBooks,
  getSingleBook,
  addNewBook,
  updateSingleBook,
  deleteBook,
};
