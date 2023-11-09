const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const errorHandler = require("./middlewares/errorHandler");
const bookRouter = require("./routes/books");
const connectDB = require("./config/db");

dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use("/books", bookRouter);

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
