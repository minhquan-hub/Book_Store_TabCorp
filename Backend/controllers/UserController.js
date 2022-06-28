const express = require('express');
const bcrypt = require('bcrypt');

const userService = require('../services/UserService');

const UserController = {
    postUser: async(req, res) => {
        try {
            const userCreateDto = req.body;
            const user = await userService.createUser(userCreateDto);
            res.status(200).json(user);
        } catch (err) {
            console.error(err);
            res.status(500).json("Something server error");
        }
    }
}

module.exports = UserController;