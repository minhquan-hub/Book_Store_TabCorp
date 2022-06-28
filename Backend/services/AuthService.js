const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User');

const refreshTokenArr = [];

class AuthService {
    constructor() {}

    generateAccessToken(user) {
        return jwt.sign({
            id: user._id,
            email: user.email,
        }, process.env.JWT_ACCESS_KEY, {
            expiresIn: "10m"
        });
    }

    generateRefreshToken(user) {
        return jwt.sign({
            id: user._id,
            email: user.email,
        }, process.env.JWT_REFRESH_KEY, {
            expiresIn: "2h"
        })
    }

    async loginUser(LoginRequest) {
        let AuthDto = {
            email: "",
            roleName: "",
            token: "",
            reFreshToken: "",
            isSuccess: false,
        }
        console.log("Login email: " + LoginRequest.email)
        const user = await User.findOne({ email: LoginRequest.email });
        console.log("1" + user)
        if (!user) return AuthDto;
        console.log("user data: " + user.password);
        console.log("LoginRequest password: " + LoginRequest.password);

        const validPassword = await bcrypt.compare(LoginRequest.password, user.password)
            .then((valid) => {
                return valid;
            })
            .catch((err) => {
                console.error("Error: " + err);
            });
        console.log("validPassword: " + validPassword);
        if (!validPassword) return AuthDto;

        if (user && validPassword) {
            const token = this.generateAccessToken(user);
            const reFreshToken = this.generateRefreshToken(user);
            refreshTokenArr.push(reFreshToken);

            AuthDto = {
                email: user.email,
                roleName: "",
                token: token,
                reFreshToken: reFreshToken,
                isSuccess: true,
            }

            return AuthDto;
        }
    }
}

module.exports = new AuthService();