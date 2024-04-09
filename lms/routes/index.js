const express = require('express');
const httpStatus = require('http-status');

const booksController = require('../controllers/books/book.controllers');
const validate = require('../middlewares/validate');
const router = express.Router();

router.route('/books')
    .get((req,res, next)=>{
        console.log("This is from middleware");
        next("Hello");
    },
    booksController.getBooks
)
    .post(validate(booksController.createBook), booksController.createBook);

module.exports = router;
