const express = require("express");
const router = express.Router();
const Book = require("../model/Book")
const booksContoller = require("../controllers/books-controller");

router.get("/", booksContoller.getAllBooks );
router.post("/", booksContoller.addBooks);
router.get("/:id", booksContoller.getById);
router.put("/:id", booksContoller.updateBook); 
router.delete("/:id", booksContoller.deleteBook);

module.exports = router; 