const bookService = require('../services/BookService')

const BookController = {
    getBooks: async(req, res) => {
        try {
            const bookCriteriaDto = req.query;
            const books = await bookService.getBooks(bookCriteriaDto);
            res.status(200).json(books);
        } catch (err) {
            console.error(err);
            res.status(500).json("Something server error");
        }
    },

    getBookById: async(req, res) => {
        try {
            const id = req.params.id;
            const book = await bookService.getBookById(id);
            res.status(200).json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json("Something server error");
        }
    },

    postBook: async(req, res) => {
        try {
            const bookCreateDto = req.body;
            const book = await bookService.addBook(bookCreateDto);
            res.status(200).json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json("Something server error");
        }
    },

    putBook: async(req, res) => {
        try {
            const id = req.params.id;
            const bookUpdateDto = req.body;
            const book = await bookService.updateBook(id, bookUpdateDto);
            res.status(200).json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json("Something server error");
        }
    },

    deleteBook: async(req, res) => {
        try {
            const id = req.params.id;
            const book = await bookService.deleteBook(id);
            res.status(200).json(book);
        } catch (err) {
            console.error(err);
            res.status(500).json("Something server error");
        }
    }
}

module.exports = BookController;