const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User');

class AuthService {
    constructor() {}

    generateAccessToken(user) {
        return jwt.sign({
            id: user._id,
            email: user.email,
            role: user.role
        }, process.env.JWT_ACCESS_KEY, {
            expiresIn: "10h"
        });
    }

    async loginUser(LoginRequest) {
        let AuthDto = {
            email: "",
            roleName: "",
            token: "",
            isSuccess: false,
        }

        const user = await User.findOne({ email: LoginRequest.email });
        if (!user) return AuthDto;

        const validPassword = await bcrypt.compare(LoginRequest.password, user.password)
            .then((valid) => {
                return valid;
            })
            .catch((err) => {
                console.error("Error: " + err);
            });
        if (!validPassword) return AuthDto;

        if (user && validPassword) {
            const token = this.generateAccessToken(user);

            AuthDto = {
                email: user.email,
                roleName: user.role,
                token: token,
                isSuccess: true,
            }

            return AuthDto;
        }
    }
}

module.exports = new AuthService();