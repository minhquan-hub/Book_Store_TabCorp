const Book = require('../models/Book');

class BookService {

    async getBooks(bookCriteriaDto) {

        const books = Book.aggregate([{ $sort: { 'updatedAt': 1 } },
            { $match: { isDelete: false } },
            {
                '$facet': {
                    metadata: [{ $count: "total" }, { $addFields: { page: 3 } }],
                    data: [{ $skip: 10 }, { $limit: 12 }] // add projection here wish you re-shape the docs
                }
            }
        ]);

        return books;
    }

    async getBookById(id) {
        const book = await Book.findById(id);
        return book;
    }

    async addBook(bookCreateDto) {

        const newBook = new Book({
            title: bookCreateDto.title,
            author: bookCreateDto.author,
            category: bookCreateDto.category,
            description: bookCreateDto.description,
            price: parseInt(bookCreateDto.price),
            quantity: parseInt(bookCreateDto.quantity),
            image: bookCreateDto.image,
            isDelete: false
        });

        const book = await newBook.save();
        return book;
    }

    async updateBook(id, bookUpdateDto) {
        const option = { new: true };
        const book = await Book.findByIdAndUpdate(id, bookUpdateDto, option);
        return book;
    }

    async deleteBook(id) {
        const option = { new: true };
        const book = await Book.findByIdAndUpdate(id, { $set: { isDelete: true } }, option);
        return book;
    }
}

module.exports = new BookService();