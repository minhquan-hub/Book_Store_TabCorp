const express = require('express');
const route = express.Router()
const bcrypt = require('bcrypt');

const userController = require('../controllers/UserController');
const User = require('../models/User');


// User
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - id
 *         - username
 *         - password
 *         - email
 *         - phone
 *       properties:
 *         id:
 *           type: number
 *           description: The user id
 *         email:
 *           type: string
 *           description: The book author
 *         password::
 *           type: string
 *           description: The password
 *         phone:
 *           type: string
 *           desciption: The phone number
 *       example:
 *         email: "quan123@gmail.com"
 *         password: "quan123"
 *         phone: "09247211284"
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

/**
 * @openapi
 * /user/{id}:
 *   get:
 *     summary: Returns the list of all the books
 *     tags: [Users]
 *     parameters:
 *          - name: id
 *            in: path
 *            require: true
 *            description: The user id
 *     responses:
 *       200:
 *         description: The list of the books
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/BookStore/DataAccessor/models/User'
 */

route.get('/:id', (req, res) => {
    res.send("ok ok ok ok" + req.params.id);
});

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

/**
 * @openapi
 * /user:
 *  post:
 *      summary: Create a new user 
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          200: 
 *              description: The User was successfully created
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          500: 
 *              description: Something server error
 */

route.post('/', userController.postUser);



// route.get('/:id', (req, res) => {
//     res.send(req.params.id)
// })

// route.post('/', (req, res) => {
//     res.send("ok ok ok")
// });

module.exports = route;