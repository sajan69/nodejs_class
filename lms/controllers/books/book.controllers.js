const httpStatus = require('http-status');    
const getBooks = async (req, res) => {
    req.json({
        message: "This are the available books."
    })
}

const createBook = async (req, res) => {   
     const data = req.body;
    res.status(httpStatus.CREATED).json({
        message: "New book has been added.",
        data,
    })
}

module.exports = {
    getBooks,
    createBook
}