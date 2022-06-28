const Book = require('../models/Book');

class BookService {

    async getBooks(bookCriteriaDto) {
        const sortOrder = parseInt(bookCriteriaDto.sortOrder);
        const sortColumn = bookCriteriaDto.sortColumn;
        const books = Book.aggregate([{
                '$sort': {
                    [sortColumn]: sortOrder
                }
            },
            {
                '$facet': {
                    metadata: [{ $count: "total" }, { $addFields: { page: 3 } }],
                    data: [{ $skip: 10 }, { $limit: 6 }] // add projection here wish you re-shape the docs
                }
            }
        ]);

        return books;
    }

    async addBook(bookCreateDto) {

        const newBook = new Book({
            title: bookCreateDto.title,
            author: bookCreateDto.author,
            category: bookCreateDto.category,
            description: bookCreateDto.description,
            price: bookCreateDto.price,
            quantity: bookCreateDto.quantity,
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