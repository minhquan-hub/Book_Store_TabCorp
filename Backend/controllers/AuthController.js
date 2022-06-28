const authService = require('../services/AuthService');

const AuthController = {
    loginUser: async(req, res) => {
        try {
            const loginRequest = req.body;
            res.status(200).json(await authService.loginUser(loginRequest));
        } catch (err) {
            console.error(err);
            res.status(500).json("Something server error");
        }
    }
}

module.exports = AuthController;