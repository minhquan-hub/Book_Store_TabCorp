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
 *         - role
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
 *         role: "Admin"
 *         phone: "0924721184"
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 */

route.get('/:id', (req, res) => {
    res.send("ok ok ok ok" + req.params.id);
});

/**
 * @openapi
 * /api/user:
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


module.exports = route;