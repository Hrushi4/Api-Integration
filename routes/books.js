const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// Get all books
router.get("/getall", booksController.getAllBooks);

// Get a specific book by ID
router.get("/getBook/:id", booksController.getBookById);

// Create a new book
router.post("/createBook", booksController.createBook);

// Update a book
router.patch("/updateBook/:id", booksController.updateBook);

// Delete a book
router.delete("/deleteBook/:id", booksController.deleteBook);

module.exports = router;
