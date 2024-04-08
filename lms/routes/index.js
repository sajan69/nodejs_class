const express = require('express');
const httpStatus = require('http-status');

const booksController = require('../controllers/books/book.controllers');
const router = express.Router();

router.route('/books')
    .get(booksController.getBooks)
    .post(booksController.createBook);

module.exports = router;
