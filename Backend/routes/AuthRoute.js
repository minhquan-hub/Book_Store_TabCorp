const express = require('express');
const route = express.Router();

const authController = require('../controllers/AuthController');

// Auth
/**
 * @swagger
 *  components:
 *      schemas:
 *          Auth:
 *              type: object
 *              required: 
 *                  - email
 *                  - password
 *              properties:
 *                  email:
 *                      type: string
 *                      description: The email
 *                  password:
 *                      type: string
 *                      description: The password
 */

/**
 * @swagger
 * tags:
 *  name: Auths
 *  description: The auth managing API
 */

/**
 * @openapi
 * /auth:
 *  post:
 *      summary: Return the authDto 
 *      tags: [Auths]
 *      requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Auth'
 *      responses:
 *          200:
 *              description: The Login is successfully
 *              content: 
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Auth'
 *          500:
 *              description: Something server error
 *          
 */

route.post('/', authController.loginUser);

module.exports = route;