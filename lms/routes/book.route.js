const httpStatus = require('http-status');
const express = require('express');
const booksController = require('../controllers/books/book.controllers');
const validate = require('../middlewares/validate');
const router = express.Router();
const { createBook } = require('../validations/book.validation');

router.route('/')
    .get(
    booksController.getBooks
)
    .post(validate(createBook), booksController.createBook);

module.exports = router;