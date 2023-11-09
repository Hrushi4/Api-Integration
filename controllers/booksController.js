const Book = require("../models/book");

// Get all books
const getAllBooks = async (req, res, next) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    next(err);
  }
};

// Get a specific book by ID
const getBookById = async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    next(err);
  }
};

// Create a new book
const createBook = async (req, res, next) => {
  try {
    const { title, author, summary } = req.body;
    const book = new Book({ title, author, summary });
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    next(err);
  }
};

// Update a book
const updateBook = async (req, res, next) => {
  try {
    const { title, author, summary } = req.body;
    const bookId = req.params.id;

    // Check if the book exists in the database
    const book = await Book.findById(bookId);

    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Update the book details if provided in the request body
    if (title) {
      book.title = title;
    }
    if (author) {
      book.author = author;
    }
    if (summary) {
      book.summary = summary;
    }

    // Save the updated book
    const updatedBook = await book.save();

    res.json(updatedBook);
  } catch (err) {
    next(err);
  }
};

// Delete a book
const deleteBook = async (req, res, next) => {
  try {
    const bookId = req.params.id;
    // Fetch the book from your data source, such as a database
    const result = await Book.deleteOne({ _id: bookId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book deleted" });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
