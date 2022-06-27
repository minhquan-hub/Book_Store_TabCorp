import express = require('express');
import bcrypt = require('bcrypt');

const UserController = require('../controllers/UserController');
const userController = new UserController();
const  User = require('../../BookStore.DataAccessor/models/User');


const route = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Book:
 *       type: object
 *       required:
 *         - title
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         title:
 *           type: string
 *           description: The book title
 *         author:
 *           type: string
 *           description: The book author
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

/**
  * @swagger
  * tags:
  *   name: Books
  *   description: The books managing API
  */

/**
 * @swagger
 * /books:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Books]
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

// route.post('/add', async (req:  express.Request, res: express.Response) => {
//     try {
//         const salt = await bcrypt.genSalt(10)
//         const hashed = bcrypt.hash(req.body.password, salt)
//         console.log(req.body);
//         // create user
//         const newUser = new User({
//             username: req.body.username,
//             phone: req.body.phone,
//             email: req.body.email,
//         })
//         console.log(newUser.email);
//         // save
//         const user = await newUser.save()
//         console.log("ok ok ok ");
//         res.status(200).json(user)

//     } catch (err) {
//         console.log(err)
//         res.status(500).json(err)
//     }}
// );

route.post('/add', userController.addUser(()=>({})));

/**
 * @swagger
 * /books/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Book'
 *       404:
 *         description: The book was not found
 */

route.get('/:id', (req, res) => {
    res.send("ok ok ok ok")
});

// route.post('/', (req, res) => {
//     res.send("ok ok ok")
// });

module.exports = route;