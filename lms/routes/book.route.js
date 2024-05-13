const express = require('express');
const booksController = require('../controllers/books/book.controllers');
const { createBook, updateBook, deleteBook } = require('../validations/book.validation');
const validate = require('../middlewares/validate');

const router = express.Router();

router.route('/') // /api/books/
    .get(booksController.getBooks)
    .post(validate(createBook), (req, res, next) => {
        console.log('this is second middleware');
        next();
    }, booksController.createBook);

router.route('/:bookId') // /api/books/:bookId
    .get(booksController.getSingleBook)
    .patch(validate(updateBook), booksController.updateBook)
    .delete(validate(deleteBook), booksController.deleteBook);

module.exports = router;