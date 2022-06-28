const express = require('express');
const route = express.Router();

const bookController = require('../controllers/BookController')

// Book
/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - author
 *         - category
 *         - description
 *         - price
 *         - quantity
 *         - image
 *         - isDelete
 *       properties:
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *         category::
 *           type: string
 *           description: The book category
 *         description:
 *           type: string
 *           description: The book description
 *         price:
 *           type: number
 *           description: The book price
 *         quantity:
 *           type: number
 *           description: The book quantity
 *         image: 
 *           type: string
 *           description: The book image
 *         
 */

/**
 * @swagger
 * tags:
 *   name: Books
 *   description: The books managing API
 */

/**
 * @openapi
 * /book:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
 *     parameters:
 *          - name: sortColumn
 *            in: query
 *            require: true
 *            description: The sort column
 *          - name: sortOrder
 *            in: query
 *            require: true
 *            description: The sort order
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Book'
 */

route.get('/', bookController.getBooks);

/**
 * @openapi
 * /book:
 *  post:
 *      summary: Create a new book 
 *      tags: [Books]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Book'
 *      responses:
 *          200: 
 *              description: The Book was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Book'
 *          500: 
 *              description: Something server error
 */

route.post('/', bookController.postBook);

/**
 * @openapi
 * /book/{id}:
 *  put:
 *      summary: Update a book 
 *      tags: [Books]
 *      parameters:
 *          - name: id
 *            in: path 
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Book'
 *      responses:
 *          200: 
 *              description: The Book was successfully updated
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Book'
 *          500: 
 *              description: Something server error
 */

route.put('/:id', bookController.putBook);

/**
 * @openapi
 * /book/{id}:
 *  delete:
 *      summary: Delete a book 
 *      tags: [Books]
 *      parameters:
 *          - name: id
 *            in: path 
 *      responses:
 *          200: 
 *              description: The Book was successfully deleted
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Book'
 *          500: 
 *              description: Something server error
 */

route.delete('/:id', bookController.deleteBook);





module.exports = route;